import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import Screen from './components/screen'
import Group from './components/group'
import GroupContainer from './components/groupContainer'
import Keyboard from './components/keyboard_original'
import Operators from './components/operators'
import Commands from './components/commands'
import ScientificLeft from './components/scientific/scientific_left'
import ScientificRight from './components/scientific/scientific_right'
import Tearjerker from './components/tearjerker'
import { evaluate, filter } from 'mathjs'

const is_reverse = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height
}


const App = () => {
  const styles = StyleSheet.create(
    {
      container: {
        flex: 1
      }
    }
  )

  const [isReverse, setIsReverse] = useState(is_reverse())
  const [isGoodMan, setGoodMan] = useState(false)
  const [cursorPos, setCursorPos] = useState(0)
  const [screenContent, setScreenContent] = useState("")
  const [groupsContent, setGroupsContent] = useState([])
  const [forbiddenContent, setforbiddenContent] = useState([])


  Dimensions.addEventListener('change', () => setIsReverse(is_reverse()))

  const handleClick = (value) => {
    // const pos = undefined
    switch (value) {
      case "=":
        setGroupsContent([...groupsContent, { 'content': screenContent, 'forbid': forbiddenContent }])
        try {
          tmp = String(evaluate(screenContent))
          setScreenContent(tmp);
          setCursorPos(tmp.length)
        }
        catch (e) {
          Alert.alert("user durak, invalid input", e.message);
          setScreenContent("")
          setCursorPos(0)
        }
        setforbiddenContent([])

        break;
      case "AC":
        setScreenContent("")
        setCursorPos(0)
        setforbiddenContent([])

        break;
      case "<--":
        if (cursorPos == 0 && screenContent.length != 0){
          break
        }
        pos = forbiddenContent.findIndex((el) => cursorPos >= el[0] && cursorPos <= el[1] + 1)
        if (pos != -1) {
          const [leftForbid, rightForbid] = forbiddenContent[pos]
          forbiddenContent.splice(pos, 1)
          setScreenContent(screenContent.slice(0, leftForbid - 1) + screenContent.slice(rightForbid + 1))
          const delta = rightForbid - leftForbid + 2
          setforbiddenContent(forbiddenContent.map((el) => el[0] > rightForbid ? [el[0] - delta, el[1] - delta] : el))
          setCursorPos(leftForbid - 1)
        } else {
          setScreenContent(screenContent.slice(0, cursorPos - 1) + screenContent.slice(cursorPos))
          setforbiddenContent(forbiddenContent.map((el) => el[0] > cursorPos ? [el[0] - 1, el[1] - 1] : el))
          setCursorPos(cursorPos - 1)
        }
        break;
      default:
        // alert(groupsContent[0].content + ' = ' + JSON.stringify(groupsContent[0].forbid))    
        let realCursorPos = cursorPos
        pos = forbiddenContent.findIndex((el) => cursorPos >= el[0] && cursorPos <= el[1])
        if (pos != -1) {
          realCursorPos = forbiddenContent[pos][1] + 1
          setCursorPos(realCursorPos)
        }

        // if (screenContent[realCursorPos - 1] === String(value) && String(value) !== '(' && String(value) !== ')') {
        //   break
        // }
        if (['*', '+', '-', '/', '^', '.'].includes(value)) 
          if (['*', '+', '-', '/', '^', '.'].includes(screenContent[realCursorPos - 1])) {
            setScreenContent(screenContent.slice(0, realCursorPos - 1) + String(value) + screenContent.slice(realCursorPos))
            break
          }

        setScreenContent(screenContent.slice(0, realCursorPos) + String(value) + screenContent.slice(realCursorPos))
        let resForbid = forbiddenContent
        resForbid = resForbid.map((el) => el[0] > realCursorPos ? [el[0] + String(value).length, el[1] + String(value).length] : el)
        if (String(value).length >= 2) {
          resForbid = [...resForbid, [realCursorPos + 1, realCursorPos + String(value).length - 1]]
          // alert(JSON.stringify(forbiddenContent))
        }
        setforbiddenContent(resForbid)

        setCursorPos(realCursorPos + String(value).length)

    }
    // Alert.alert(`val=${value} prev_pos=${cursorPos}`)

  }

  return (
    <View style={[styles.container]}>
      <Screen setCursorPos={setCursorPos} screenContent={screenContent} cursorPos={cursorPos} forbiddenContent={forbiddenContent} />
      <GroupContainer>
        {groupsContent.map((el, ind) => <Group key={ind} content={el['content']} setScreenContent={setScreenContent} setCursorPos={setCursorPos} setforbiddenContent={setforbiddenContent} logForbid={el['forbid']} />)}
      </GroupContainer>
      <View style={{ flex: 8, flexDirection: "row" }}>
        {isReverse ? isGoodMan ? <ScientificLeft handleClick={handleClick} /> : <Tearjerker setGoodMan={setGoodMan} /> : null}
        <View style={{ flex: 5 }}>
          <Keyboard handleClick={handleClick} />
          <Operators handleClick={handleClick} />
          <Commands handleClick={handleClick} />
        </View>
        {isReverse ? isGoodMan ? <ScientificRight handleClick={handleClick} /> : <Tearjerker setGoodMan={setGoodMan} /> : null}



      </View>
    </View>
  )
}

export default App

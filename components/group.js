import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


const Group = ({ content, setScreenContent, setCursorPos, logForbid, setforbiddenContent }) => {
  const [colorContent, setColorContent] = useState('#' + (Math.random().toString(16) + '000000').substring(2, 6).toUpperCase() + 'FF')
  const onPress = () => {
    setScreenContent(content)
    setCursorPos(content.length)
    setforbiddenContent([...logForbid])
    // alert(JSON.stringify(logForbid))
  }

  const styles = StyleSheet.create({
    group: {
      padding: 8,
      fontSize: 14,
      borderRadius: 12,
      margin: 2,
      maxHeight: 35,
      backgroundColor: colorContent,
      justifyContent: 'center'


    },
    texta: {
      textAlignVertical: "center",
    }
    // divide: {
    //   backgroundColor: "#cb7dc9",
    //   },
    // substract: {
    //     backgroundColor: "#fcb064",
    //   },
    // add: {
    //     backgroundColor: "#fb96cf",
    //   },
    // multiply: {
    //     backgroundColor: "#68cef1",
    // },
  }
  )
  return (
    <TouchableOpacity style={styles.group} onPress={onPress} >
      <Text style={styles.texta}>{content}</Text>
    </TouchableOpacity>

  )
}

export default Group
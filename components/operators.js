import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Operator from './operator'


const Operators = ({handleClick}) => {
    const styles = StyleSheet.create({
        operators: {
            flex: 2,
            flexDirection: "row",
        }
    }
    )
    return (
        <View style={styles.operators}>
              <Operator content="/" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("/")}/>
              <Operator content="-" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("-")}/>
              <Operator content="+" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("+")}/>
              <Operator content="x" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("*")}/>
        </View>

    )
}

export default Operators
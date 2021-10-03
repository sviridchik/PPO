import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Number from './number'


const Keyboard = ({handleClick}) => {
    const styles = StyleSheet.create({
        keyboard: {
            flex: 9
        },

    })
    return (
        <View style={styles.keyboard}>

            <View style={{ flexDirection: "row", flex: 1 }}>
                
                <Number content={1} onPress={() => handleClick("1")}/>
                <Number content={2} onPress={() => handleClick("2")}/>
                <Number content={3} onPress={() => handleClick("3")}/>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Number content={4} onPress={() => handleClick("4")}/>
                <Number content={5} onPress={() => handleClick("5")}/>
                <Number content={6} onPress={() => handleClick("6")}/>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Number content={7} onPress={() => handleClick("7")}/>
                <Number content={8} onPress={() => handleClick("8")}/>
                <Number content={9} onPress={() => handleClick("9")}/>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Number content={"+-"} onPress={() => handleClick("unaryMinus(")}/>
                <Number content={0} onPress={() => handleClick("0")}/>
                <Number content={"."} onPress={() => handleClick(".")}/>
            </View>
        </View>
    )
}

export default Keyboard
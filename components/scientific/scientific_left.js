import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Operator from '../operator'




const ScientificLeft = ({handleClick}) => {
    const styles = StyleSheet.create({
        science: {
            flex: 3,
            // flexDirection: "row",
            paddingLeft: "10%"
        },
    }
    )
    return (


    <View style={styles.science}>
        <View style={{ flexDirection: "row" ,flex:1}}>
            <Operator content="x^2" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("^2")}/>
            <Operator content="Pi" style={{backgroundColor: "#03A762"}} onPress={() => handleClick("pi")}/>
        </View>
        <View style={{ flexDirection: "row",flex:1}}>
            <Operator content="x^y" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("^")}/>
            <Operator content="sqrt()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("sqrt(")}/>
        </View>
        <View style={{ flexDirection: "row" ,flex:1}}>
            <Operator content="round()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("round(")}/>
            <Operator content="(" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("(")}/>
        </View>
        <View style={{ flexDirection: "row" ,flex:1}}>
            <Operator content="exp()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("exp(")}/>
            <Operator content=")" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick(")")}/>
        </View>
    </View>

    )
}


export default ScientificLeft
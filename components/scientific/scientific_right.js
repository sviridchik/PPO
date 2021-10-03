import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Operator from '../operator'




const ScientificRight = ({handleClick}) => {
    const styles = StyleSheet.create({
        science: {
            flex: 3,
            // flexDirection: "row",
            paddingRight: "10%"
        },
    }
    )
    return (
        <View style={styles.science}>
            <View style={{ flexDirection: "row" ,flex:1}}>
                <Operator content="sin()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("sin(")}/>
                <Operator content="cos()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("cos(")}/>
            </View>
            <View style={{ flexDirection: "row",flex:1 }}>
                <Operator content="1/x" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("^(-1)")}/>
                <Operator content="!" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("!")}/>
            </View>
            <View style={{ flexDirection: "row" ,flex:1}}>
                <Operator content="log()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("log(")}/>
                <Operator content="log2()" style={{ backgroundColor: "#03A762" }} onPress={() => handleClick("log2(")}/>

            </View>
            <View style={{ flexDirection: "row" ,flex:1}}>
                <Operator content="tan()" style={{ backgroundColor: "#03A762" }}  onPress={() => handleClick("tan(")}/>
                <Operator content="asin()" style={{ backgroundColor: "#03A762" }}  onPress={() => handleClick("asin(")}/>
            </View>
        </View>

    )
}


export default ScientificRight
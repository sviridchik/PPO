import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Operator from './operator'


const Commands = ({handleClick}) => {
    const styles = StyleSheet.create({
        commands: {
            flex: 2,
            flexDirection: "row",
        },
        command: {
            flex: 1,
            // flexDirection: "row",
            // backgroundColor: "blue",
            borderRadius: 10,
            // padding: 10,
            borderWidth:5,
            margin:5,
            justifyContent:"center",
            alignItems:"center",
        }
    }
    )
    return (
        <View style={styles.commands}>

            <TouchableOpacity style={[styles.command, { borderColor: 'green'}] } onPress={() => handleClick("=")}>
                <Text style={{color: 'green', fontSize: 20}}>{"="}</Text>
                {/* <Text style={styles.command}>{"="}</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.command, { borderColor: 'red' }]} onPress={() => handleClick("AC")}>
                <Text style={{color: 'red', fontSize: 20}}>{"AC"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.command, { borderColor: 'blue' }]} onPress={() => handleClick("<--")}>
                <Text style={{color: 'blue', fontSize: 20}}>{"<--"}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Commands
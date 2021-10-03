import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const Operator = ({ content, style, onPress }) => {
    const styles = StyleSheet.create({
        operator: {
            margin: 5,

            justifyContent: 'center',
            // paddingTop: 8,
            // paddingBottom: 8,
            borderRadius: 100,
            // height: 60,
            // display: "flex",
            flex: 1,
            // backgroundColor: "red",
            ...style       
        }
    }
    )
    return (
        <TouchableOpacity style={styles.operator} onPress={onPress}>
                <Text style={{ alignSelf: "center", fontSize:20, color:"white"}}>{content}</Text>
        </TouchableOpacity>

    )
}

export default Operator
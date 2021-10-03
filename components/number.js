import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const Number = ({ content,onPress }) => {
    const styles = StyleSheet.create({
        number: {
            alignItems: "center",
            textAlign: "center",
            // padding: 10,
            fontWeight: "300",
            backgroundColor: "white",
            flex: 1,
            justifyContent: 'center',
            borderWidth:1,
            borderColor:"grey",
            
        }
    }
    )
    return (
        <TouchableOpacity style={styles.number} onPress={onPress}>
                <Text style={{ alignSelf: "center", fontSize:40, color:"#A72393"}}>{content}</Text>
        </TouchableOpacity>

    )
}

export default Number
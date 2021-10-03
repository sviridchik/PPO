import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'


const Screen = ({ screenContent, setCursorPos, cursorPos, forbiddenContent }) => {
    const styles = StyleSheet.create({
        screen: {
            backgroundColor: "#68cef2",
            color: "#190d08",
            fontSize: 50,
            padding: 5,
            fontWeight: "300",
            flex: 2,
            justifyContent: 'center',
            alignItems: 'flex-end'
        }
    }
    )

    useEffect(() => {
    //   alert(JSON.stringify(forbiddenContent))  

    })

    const onSelectionChange = (event) => {
        setCursorPos(event.nativeEvent.selection.end)
    }

    return (
        <View style={styles.screen}>
            {/* <TextInput autoFocus onSelectionChange={onSelectionChange} style={{ fontSize: 50 }} selection={{ start: cursorPos }}>{
            ''.concat(...Array(...screenContent).map((el, ind) => {
                if (forbiddenContent.findIndex((el2) => ind >= el2[0] - 1 && ind <= el2[1]) != -1) {
                    return '$'
                } else {
                    return el
                }
            }))
            }</TextInput> */}
            <TextInput autoFocus onSelectionChange={onSelectionChange} style={{ fontSize: 50 }} selection={{ start: cursorPos }}>{screenContent}</TextInput>
        </View>
    )
}

export default Screen
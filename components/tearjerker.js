import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'


const Tearjerker = ({ setGoodMan }) => {
    const styles = StyleSheet.create({
        tear: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const onPress = () => {
        Alert.alert(
            "Дашь деняг?",
            "",
            [
                {
                    text: "Коту не жалко",
                    onPress: () => setGoodMan(true)
                },
                {
                    text: "Не",
                    style: "cancel"
                }]
        );
    }


    return (
        <TouchableOpacity style={styles.tear} onPress={onPress}>
            <Image source={require("../images/cat.jpeg")} />
        </TouchableOpacity>
    )
}

export default Tearjerker
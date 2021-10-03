import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const GroupContainer = ({children}) => {


const styles = StyleSheet.create({
    groupContainer: {
        backgroundColor: "orange",
        // paddingTop: 20,
        // paddingBottom: 10,
        // textAlign: "right",
        fontWeight: "300",
        // minHeight: 18,
        flexDirection: "row",
        flex: 1,
        // direction: "rtl",
        // alignContent:"center",
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 5
        
        }
      
    } 
)
  return (
    <View style={styles.groupContainer}>
      {children}
    </View>
  )
} 

export default GroupContainer
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
function BoldTextComponent({text, isDarkMode}:{isDarkMode: boolean,text:string}) {
    return (
        <View>
            <Text style={[styles.categoryHeaderText,isDarkMode? {fontSize: 20, color:'#fff'}:{color: '#000',fontSize: 20}]}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    categoryHeaderText:{
        fontSize: 20,
        fontWeight:'bold', 
    }
})
export default BoldTextComponent;
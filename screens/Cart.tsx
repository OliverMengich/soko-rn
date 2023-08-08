/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StatusBar, StyleSheet, useColorScheme} from 'react-native';
function Cart() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'#ccc'}
            />
            <Text style={styles.text}>Cart</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {color: '#000'},
});
export default Cart;

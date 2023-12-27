/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet,useColorScheme } from 'react-native';

function ReviewsComponent() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={[styles.container,]}>
            <Text>Product Reviews</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
export default ReviewsComponent;

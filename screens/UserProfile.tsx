/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

function UserProfile() {
    return (
        <View>
            <Text style={styles.textColor}>User Profile</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    textColor:{
        color: '#000',
    },
});
export default UserProfile;

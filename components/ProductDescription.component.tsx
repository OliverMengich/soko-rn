/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
function ProductDescriptionComponent() {
    return (
        <View style={styles.container}>
            <Text>Product Description</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
export default ProductDescriptionComponent;

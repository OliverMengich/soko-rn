import React from 'react';
import { View, Text, StyleSheet,Dimensions, Pressable, Image } from 'react-native';

const {width,height} = Dimensions.get('window');
function BusClientComponent() {
    return (
        <View style={{flex:1, alignItems: 'center'}}> 
            <Image 
                source={require('../assets/quiz.jpg')} 
                style={{width: width*.9, height: width/2, resizeMode: 'contain',}}

                />
            <Text style={styles.boldtext}>How do you plan to use the platform?</Text>
            <View style={styles.row}>
                <Pressable style={styles.pressableBtn}>
                    <Text style={styles.text}>As a business</Text>
                    <Text style={styles.normalText}>You want to sell your products here</Text>
                </Pressable>
                <Pressable onPress={()=>{}} style={styles.pressableBtn}>
                    <Text style={styles.text}>As a customer</Text>
                    <Text style={styles.normalText}>You want to buy products</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    normalText:{
        fontSize:16,
        color: 'black'
    },
    row:{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    boldtext:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    grayedtext:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc'
    },
    pressableBtn:{
        width:'40%',
        borderWidth:3,
        alignItems: 'center',
    },
});
export default BusClientComponent;
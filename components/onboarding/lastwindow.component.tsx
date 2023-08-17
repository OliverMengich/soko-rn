import { View, Text,StyleSheet, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
const {width} = Dimensions.get('window');
export default function LastWindowComponent({navigation}:{navigation:any}) {
    return(
        <View style={{flex: 0.7, width, alignItems: 'center'}}>
            <Image 
                source={require('../../assets/hooray.jpg')}
                style={{width: width*.9, height: width, resizeMode: 'contain', borderRadius: width*.05}}
            />
            <Text style={styles.normalText}>Thank you, information has been recorded, we will get intouch with you within 72 hours, in the meantime register to view our products</Text>
            <View style={{flexDirection: 'row'}}>
                <Pressable onPress={()=>navigation.navigate('LoginScreen')} style={{marginVertical: 20,}}>
                    <Text style={styles.text}>Register as customer</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    normalText:{
        fontSize:16,
        color: '#000',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
    },
})
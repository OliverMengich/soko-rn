/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StatusBar, StyleSheet, useColorScheme, Pressable, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Dimensions } from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabScreen'>;
const {width} = Dimensions.get('window')
function Cart({navigation}: Props) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={{flex:1,position: 'relative'}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'#ccc'}
            />
            <View style={{flexDirection: 'row',marginTop: 20, alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-between'}}>
                <Text style={styles.textColor}>Cart</Text>
                <Pressable onPress={()=>navigation.navigate('NotificationsScreen')} android_ripple={{color: '#f5f5f5'}} style={{position: 'relative'}}>
                    <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                    <View style={{position:'absolute', top: -6, right: 4, backgroundColor: 'red', borderRadius: 15, width: 15, height: 15, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontWeight: 'bold', fontSize: 10}}>8</Text>
                    </View>
                </Pressable>
            </View>
            <View >
                <View style={[styles.row,{backgroundColor: '#fff', marginHorizontal:20,padding:10,borderRadius:10,}]}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={require('../assets/oliverimg.png')} style={{width: 60, height: 60,borderWidth:.5, borderRadius: 30}} />
                        <View >
                            <Text style={{fontWeight: 'bold',color: 'black', fontSize: 18}}>Bananas</Text>
                            <Text style={{color: '#ccc'}}>1kg</Text>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>$ 4.99</Text>
                                
                            </View>
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={()=>{}} android_ripple={{color: '#f5f5f5'}} style={{padding: 5, borderRadius: 5,}}>
                            <Icon name={'delete'} color={'red'} size={20} />
                        </Pressable>
                        <View style={{flexDirection: 'row',padding: 3,borderRadius:15,borderWidth:.5, justifyContent: 'space-between', width:80, backgroundColor:'#f5f5f5', alignItems: 'center'}}>
                            <Pressable onPress={()=>{}} android_ripple={{color: '#f5f5f5'}}>
                                <Icon name={'minus'} size={20} />
                            </Pressable>
                            <Text style={{marginHorizontal: 5, fontWeight:'900'}}>1</Text>
                            <Pressable onPress={()=>{}} android_ripple={{color: '#f5f5f5'}}>
                                <Icon name={'plus'} style={{fontWeight: 'bold'}} size={20} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{position: 'absolute', bottom:0, width, backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', backgroundColor: '#f5f5f5',borderRadius:20,paddingHorizontal:20,marginTop:20, justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
                    <TextInput placeholder='Enter Coupon Code' />
                    <Pressable>
                        <Text style={styles.priceText}>Apply</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row',borderBottomWidth: .5,paddingVertical:5, justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>
                    <Text style={[{fontSize:16, fontWeight: 'bold', color: 'black'}]}>Subtotal</Text>
                    <Text style={[styles.priceText,{fontSize:16}]}>$ 3.99</Text>
                </View>
                <View style={{flexDirection: 'row',borderBottomWidth: .5,paddingVertical:5, justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>
                    <Text style={[{fontSize:16, fontWeight: 'bold', color: 'black'}]}>Shipping</Text>
                    <Text style={[styles.priceText,{fontSize:20}]}>$ 0.99</Text>
                </View>
                <View style={{flexDirection: 'row',paddingVertical:5, justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>
                    <Text style={[{fontSize:16, fontWeight: 'bold', color: 'black'}]}>Total</Text>
                    <Text style={[styles.priceText,{fontSize:20}]}>$ 5.00</Text>
                </View>
                <Pressable onPress={()=>{}} android_ripple={{color: '#f5f5f5'}} style={{backgroundColor: 'red', marginHorizontal: 30, marginVertical: 20, padding: 10, borderRadius: 20, alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Checkout</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textColor:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceText: {fontWeight: 'bold', color: 'red', textTransform: 'uppercase'}
});
export default Cart;

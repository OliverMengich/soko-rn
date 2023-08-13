/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../App';
import type {NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabScreen'>;
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function UserProfile({navigation}: Props) {
    return (
        <View style={{flex:1, marginTop:20}}>
            <View style={{flexDirection: 'row',marginTop: 20, alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-between'}}>
                <Text style={styles.textColor}>Profile</Text>
                <Pressable onPress={()=>navigation.navigate('NotificationsScreen')} android_ripple={{color: '#f5f5f5'}} style={{position: 'relative'}}>
                    <Octicons name={'bell'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                    <View style={{position:'absolute', top: -6, right: 4, backgroundColor: 'red', borderRadius: 15, width: 15, height: 15, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontWeight: 'bold', fontSize: 10}}>8</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20,}}>
                <View style={{flexDirection: 'row',alignItems: 'center' }}>
                    <Image source={require('../assets/oliverimg.png')} style={{width: 60, height: 60,borderWidth:.5, borderRadius: 30}} />
                    <View>
                        <Text>Oliver Kemei</Text>
                        <Text>Account</Text>
                    </View>
                </View>
                <Icon name='chevron-right' size={30}/>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20,}}>
                <Text style={[styles.textColor,]}>Settings</Text>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        <Text>My Orders</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        {/* <Octicons name={'credit-card'} style={{marginHorizontal: 10}} size={23} color={'black'} /> */}
                        <Octicons name={'location'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        {/* <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} /> */}
                        <Text>My Address</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Icon name={'heart'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        <Text>My Wishlist</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Icon name={'comment-multiple-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        <Text>My Reviews</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20,}}>
                <Text style={[styles.textColor,]}>Support</Text>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={'question'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        <Text>Help Center</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
                <View style={[styles.row,{marginVertical: 10,paddingVertical:8, borderBottomWidth:.5}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={'question'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                        <Text>About Us</Text>
                    </View>
                    <Icon name='chevron-right' size={30}/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
export default UserProfile;

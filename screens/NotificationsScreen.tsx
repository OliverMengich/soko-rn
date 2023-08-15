/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { View,StyleSheet,Dimensions,useColorScheme, Text, Pressable, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../App';
const {width} = Dimensions.get('screen');
type Props = NativeStackScreenProps<RootStackParamList, 'NotificationsScreen'>
function NotificationsScreen({navigation}: Props) {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Notifications',
            headerShown: false
        });
    });
    const isDarkMode = useColorScheme()==='dark';
    return (
        <View style={[styles.container,isDarkMode?{backgroundColor:'#0f172a'}:{backgroundColor:'#fff'}]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode?'#0f172a':'#fff'}
            />
            <Text style={[styles.boldText,isDarkMode?{color: '#fff'}:{}]}>Notifications</Text>
            <View style={styles.rowContainer}>
                <Icon style={styles.approvedIcon} name="check" color={'blue'} size={25}  />
                <View style={styles.textContainer}>
                    <Text style={[styles.textStyle,isDarkMode?{color: '#fff'}:{}]}>You order has been approved, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                <Text style={styles.markRead}>MARK AS READ</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Icon style={styles.completedIcon} name="check-all" color={'green'} size={25}  />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>You order has been completed, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable style={{paddingHorizontal:9, paddingVertical: 10,backgroundColor: 'blue', borderWidth: .5, margin: 10, width:width*.2,}}>
                            <Text style={styles.markRead}>MARK AS READ</Text>
                        </Pressable>
                        <Pressable style={{paddingHorizontal:9, paddingVertical: 10,backgroundColor: 'white', borderWidth: .5, margin: 10, width:width*.2,}}>
                            <Text style={[styles.markRead,{color: '#000'}]}>Review</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Icon style={styles.cancelledIcon} name="cancel" color={'red'} size={25}  />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>You order has been cancelled, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                    <Pressable style={{paddingHorizontal:9, paddingVertical: 10,backgroundColor: 'blue', borderWidth: .5, margin: 10, width:width*.2,}}>
                        <Text style={styles.markRead}>MARK AS READ</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical: 30,
    },
    boldText: {fontWeight: 'bold', fontSize: 20, color: '#000', alignSelf: 'center'},
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.5,
        paddingTop: 10,
    },
    normalText:{
        fontSize:16,
        fontWeight: '400',
        // color: 'black',
    },
    approvedIcon:{
        width: 30,
        height: 30,
        borderRadius: 25,
        // color: 'green',
        // backgroundColor: 'blue',
        alignItems: 'center',
    },
    textContainer: {
        maxWidth: width * 0.8,
    },
    markRead :{
        fontWeight: 'bold', 
        color: 'white',
        fontSize: 10,
    },
    textStyle: {color: 'black'},
    completedIcon:{
        width: 30,
        height: 30,
        borderRadius: 25,
        // backgroundColor: 'green',
        alignItems: 'center',
    },
    cancelledIcon:{
        width: 50,
        height: 50,
        borderRadius: 25,
        // backgroundColor: 'red',
    },
});
export default NotificationsScreen;

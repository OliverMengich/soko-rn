/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { View,StyleSheet,Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../App';
const {width} = Dimensions.get('screen');
type Props = NativeStackScreenProps<RootStackParamList, 'NotificationsScreen'>
function NotificationsScreen({navigation}: Props) {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Notifications',
            headerLeft: () => (
                <Icon name="chevron-left" color={'black'} size={25}  />
            ),
        });
    });
    return (
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
            <View style={styles.rowContainer}>
                <Icon style={styles.approvedIcon} name="check" color={'black'} size={15}  />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>You order has been approved, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                </View>
                <Text style={styles.markRead}>MARK AS READ</Text>
            </View>
            <View style={styles.rowContainer}>
                <Icon style={styles.completedIcon} name="check-all" color={'black'} size={25}  />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>You order has been completed, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                </View>
                <Text style={styles.markRead}>MARK AS READ</Text>
            </View>
            <View style={styles.rowContainer}>
                <Icon style={styles.approvedIcon} name="check-all" color={'black'} size={25}  />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>You order has been cancelled, ready for shipping</Text>
                    <Text style={styles.normalText}>{new Date().toDateString()}</Text>
                </View>
                <Text style={styles.markRead}>MARK AS READ</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.5,
        paddingTop: 10,
    },
    normalText:{
        fontSize:16,
        fontWeight: '400',
        color: 'black',
    },
    approvedIcon:{
        width: 30,
        height: 30,
        borderRadius: 25,
        color: 'green',
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    textContainer: {
        maxWidth: width * 0.5,
    },
    markRead :{fontWeight: 'bold', color: 'blue'},
    textStyle: {color: 'black'},
    completedIcon:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cancelledIcon:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});
export default NotificationsScreen;

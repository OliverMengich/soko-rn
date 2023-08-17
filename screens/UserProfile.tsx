/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable,useColorScheme, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../App';
import type {NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabScreen'>;
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';
import { Switch } from 'react-native-switch';
import { StatusBar } from 'react-native';
type SettingItemProp={
    title: string;
    icon: string;
    onPress?: ()=>void;
    isDarkMode: boolean;
}
export const SettingItem =  ({isDarkMode, title, icon}: SettingItemProp)=>{
    return (
        <Pressable style={[styles.row,styles.settingItemStyle,{borderColor: isDarkMode?'#fff':'#000', borderBottomWidth:  .9}]}>
            <View style={{flexDirection: 'row',alignItems: 'center' }}>
                <Icon name={icon} style={[styles.iconStyle,isDarkMode&&{color:'#fff'}]} size={23} color={'black'} />
                <Text style={{color:isDarkMode?'#fff':'#000'}}>{title}</Text>
            </View>
            <Icon color={isDarkMode?'#fff':'#000'} name='chevron-right' size={30}/>
        </Pressable>
    )
}
function UserProfile({navigation}: Props) {
    const isDarkMode = useColorScheme()==='dark';
    return (
        <View style={[{flex:1, paddingTop:20},isDarkMode&&{backgroundColor:COLORS.darkBackground}]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode? '#0f172a':'#ccc'}
            />
            <View style={{flexDirection: 'row',marginTop: 20, alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-between'}}>
                <Text style={[styles.textColor,{color:isDarkMode?'#fff':'#000'}]}>Profile</Text>
                <Pressable onPress={()=>navigation.navigate('NotificationsScreen')} android_ripple={{color: '#f5f5f5'}} style={{position: 'relative'}}>
                    <Octicons name={'bell'} style={{marginHorizontal: 10}} size={23} color={isDarkMode?'#fff':'#000'} />
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
                <Icon color={isDarkMode?'#fff':'#000'} name='chevron-right' size={30}/>
                
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20,}}>
                <Text style={[styles.textColor,{color:isDarkMode?'#fff':'#000'}]}>Settings</Text>
                <SettingItem isDarkMode={isDarkMode} title={'My Orders'} icon={'shopping-outline'} />
                <View style={[styles.row,styles.settingItemStyle,{borderColor: isDarkMode?'#fff':'#000', borderBottomWidth:  .9}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={'location'} style={[styles.iconStyle,isDarkMode&&{color:'#fff'}]} size={23} color={'black'} />
                        {/* <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} /> */}
                        <Text style={{color:isDarkMode?'#fff':'#000'}}>My Address</Text>
                    </View>
                    <Icon color={isDarkMode?'#fff':'#000'} name='chevron-right' size={30}/>
                </View>

                <SettingItem isDarkMode={isDarkMode} title={'My Wishlist'} icon={'heart'} />
                <SettingItem isDarkMode={isDarkMode} title={'My Reviews'} icon={'comment-multiple-outline'} />
                <View style={[styles.row,styles.settingItemStyle,{borderColor: isDarkMode?'#fff':'#000', borderBottomWidth:  .9}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={isDarkMode?'sun':'moon'} style={[styles.iconStyle,isDarkMode&&{color:'#fff'}]} size={23} color={'black'} />
                        <Text style={{color:isDarkMode?'#fff':'#000'}}>Dark mode</Text>
                    </View>
                    <Switch
                        value={isDarkMode}
                        // onValueChange={(val) => console.log(val)}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={20}
                        // barHeight={1}
                        // circleBorderActiveColor={'white'}
                        circleBorderInactiveColor='gray'
                        circleBorderWidth={3}
                        backgroundActive={isDarkMode?'white':COLORS.darkBackground}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#fff'}
                        circleInActiveColor={'#000000'}
                        // renderInsideCircle={() => <Text>Active</Text>} // custom component to render inside the Switch circle (Text, Image, etc.)
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                        outerCircleStyle={{}} // style for outer animated circle
                        renderActiveText={false}
                        renderInActiveText={false}
                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                    />
                </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20,}}>
                <Text style={[styles.textColor,{color:isDarkMode?'#fff':'#000'}]}>Support</Text>
                <View style={[styles.row,styles.settingItemStyle,{borderColor: isDarkMode?'#fff':'#000', borderBottomWidth:  .9}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={'question'} style={[styles.iconStyle,isDarkMode&&{color:'#fff'}]} size={23} color={'black'} />
                        <Text style={{color:isDarkMode?'#fff':'#000'}}>Help Center</Text>
                    </View>
                    <Icon color={isDarkMode?'#fff':'#000'} name='chevron-right' size={30}/>
                </View>
                <View style={[styles.row,styles.settingItemStyle,{borderColor: isDarkMode?'#fff':'#000', borderBottomWidth:  .9}]}>
                    <View style={{flexDirection: 'row',alignItems: 'center' }}>
                        <Octicons name={'info'} style={[styles.iconStyle,isDarkMode&&{color:'#fff'}]} size={23} color={'black'} />
                        <Text style={{color:isDarkMode?'#fff':'#000'}}>About Us</Text>
                    </View>
                    <Icon color={isDarkMode?'#fff':'#000'} name='chevron-right' size={30}/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textColor:{
        fontWeight:'bold',
        fontSize:20
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconStyle:{
        marginHorizontal: 10,
    },
    settingItemStyle:{
        marginVertical: 10,
        paddingVertical:8,
    },
});
export default UserProfile;

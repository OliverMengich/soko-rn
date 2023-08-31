/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-mixed-spaces-and-tabs */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    View,
	Pressable,
	Text,
	TextInput,
    Dimensions,
    StyleSheet,
    StatusBar,
	Image,
	useColorScheme,
} from 'react-native';
import { RootStackParamList } from '../App';
import { COLORS } from '../constants';
const {width,height} = Dimensions.get('window');
interface TextInputProps {
	placeholder: string;
	color: string

}
function CustomTextInput({placeholder, color}:TextInputProps) {
	return (
		<TextInput 
			placeholderTextColor={color} 
			placeholder={placeholder} 
			style={[styles.textInputStyle,{color:color}]}
			accessibilityViewIsModal
		/>
	);
}
type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
function RegistrationScreen({navigation}: Props) {
	const isDarkMode = useColorScheme() === 'dark';
	function handleRegistration(){
		navigation.navigate('HomeTabScreen');
	}
    return (
        <>
            <StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={isDarkMode?COLORS.darkBackground:'red'}
			/>
            <View style={[styles.backgroundContainer,isDarkMode?styles.darkModeStyle:styles.lightModeStyle]}>
				<View style={{position:'absolute',top: -350}}>
					<Image style={styles.imageStyle} source={require('../assets/user-cart.png')} />
					<Text style={styles.sectionTitle}>Soko Supermarket</Text>
					<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'First Name'}/>
					<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Last Name'}/>
					<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Email'}/>
					<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Password'}/>
					<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Confirm Password'}/>
					<Pressable onPress={handleRegistration} style={styles.button}>
						<Text style={styles.buttonText}>Register</Text>
					</Pressable>
				</View>
            </View> 
        </>
    );
}
const styles = StyleSheet.create({
	backgroundContainer:{
		flex:1,
        width,
        // borderTopColor:'red',
        borderTopWidth:height / 2,
        borderRightWidth: width,
        // borderRightColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
	},
	imageStyle: {
		height:200,
		width:200,
		overflow:'hidden',
		alignSelf: 'center',
		borderWidth: 1, 
		borderColor:'#000',
		borderRadius:100
	},
	darkModeStyle:{
		borderRightColor: 'white',
		borderTopColor:COLORS.darkBackground,
	},
	lightModeStyle:{
		borderTopColor:'red',
		borderRightColor:'white',
	},
	redBg:{
		flex: 1,
		backgroundColor: 'red',
		transform: [{ rotateX: '5deg' }],
	},
	whiteBg:{
		flex: 1,
    	backgroundColor: 'white',
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '900',
		textAlign: 'center',
		marginVertical: 1,
		color: 'black',
	},
	textInputStyle:{
		fontWeight: 'bold',
		fontSize: 15,
		borderBottomColor: '#000',
		borderBottomWidth: 2,
		width: width * .8,
		color: 'black',
		// marginTop:4,
	},
	button:{
		backgroundColor:'red',
		width: width * .4,
		// height:55,
		// borderRadius:30,
		marginVertical:20,
		alignItems:'center',
		paddingVertical: 10,
	},
	buttonText:{
		fontWeight:'bold',
		textAlign:'center',
		color:'#fff',
		fontSize:20,
	},
});
export default RegistrationScreen;
/* eslint-disable prettier/prettier */

/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
 
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
	Image,
    View,
	Pressable,
	Text,
	TextInput,
    Dimensions,
    StyleSheet,
    StatusBar,
	useColorScheme,
} from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../constants';
type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
const {width,height} = Dimensions.get('window');
interface TextInputProps {
	placeholder: string;
	color: string
}
function CustomTextInput({placeholder,color}:TextInputProps) {
	return (
		<TextInput 
			placeholderTextColor={color} 
			placeholder={placeholder} 
			style={[styles.textInputStyle,{color:color}]}
			accessibilityViewIsModal
		/>
	);
}
function LoginScreen({navigation}: Props) {

	const isDarkMode = useColorScheme() === 'dark';
	function handleLogin(){
		navigation.navigate('HomeTabScreen');
	}
    return (
        <View style={{flex:1}}>
            <StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={isDarkMode? COLORS.darkBackground: '#fff'}
			/>
            <View style={[styles.backgroundContainer,isDarkMode?styles.darkModeStyle:styles.lightModeStyle]}>
                    <View style={{position:'absolute',top: -350}}>
                        <Image style={{height:200,width:200,overflow:'hidden', alignSelf: 'center', borderWidth: 1, borderColor:'#000',borderRadius:100}} source={require('../assets/user-cart.png')} />
						<Text style={[styles.sectionTitle,isDarkMode?styles.darModeTextColor:styles.lightModeTextColor]}>Soko Supermarket</Text>
						<View style={{marginVertical:30}}>
							<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Email'}/>
							<CustomTextInput color={isDarkMode?'black':'white'} placeholder={'Password'}/>
							<Pressable android_ripple={{color: '#f5f5f5'}} onPress={handleLogin} style={styles.button}>
								<Text style={styles.buttonText}>LOGIN</Text>
							</Pressable>
							<Text style={{color:isDarkMode?'blue':'white', alignSelf: 'center'}}>Forgot password?</Text>
						</View>
                    </View>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({
	backgroundContainer:{
		flex:1,
		width,
		height:0,
		// borderTopColor:'red',
		borderTopWidth:height / 2,
		borderRightWidth: width,
		// borderRightColor:'white',
		alignItems:'center',
		justifyContent:'center',
	},
	darkModeStyle:{
		borderRightColor: 'white',
		borderTopColor:COLORS.darkBackground,
	},
	darModeTextColor:{
		color: COLORS.darkBackground,
	},
	lightModeTextColor:{
		color:'white',
	},
	lightModeStyle:{
		borderTopColor:'white',
		borderRightColor:COLORS.darkBackground,
	},
	redBg:{
		flex: 1,
		// backgroundColor: 'red',
		transform: [{ rotateX: '5deg' }],
	},
	whiteBg:{
		flex: 1,
    	// backgroundColor: 'white',
	},
	textInputStyle:{
		// fontWeight:'bold',
		fontSize:20,
		borderBottomColor:'#000',
		borderBottomWidth:2,
		width: width * .8,
		color: 'black',
		// marginTop:4,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '900',
		textAlign: 'center',
		marginVertical: 15,
		// color: 'black',
	},
	button:{
		backgroundColor:'red',
		width: width * .4,
		marginTop: 50,
		marginBottom: 4,
		alignItems:'center',
		paddingVertical: 10,
		alignSelf:'center',
	},
	buttonText:{
		fontWeight:'bold',
		textAlign:'center',
		color:'#fff',
		fontSize:20,
	},
});
export default LoginScreen;
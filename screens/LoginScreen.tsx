/* eslint-disable prettier/prettier */

/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
 
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
	// Image,
    View,
	Pressable,
	// SafeAreaView,
	// ScrollView,
	// StatusBar,
	Text,
	TextInput,
    Dimensions,
    StyleSheet,
    StatusBar,
	useColorScheme,
	// useColorScheme,
} from 'react-native';
const {width,height} = Dimensions.get('window');
interface TextInputProps {
	placeholder: string;
}
function CustomTextInput({placeholder}:TextInputProps) {
	return (
		<TextInput 
			placeholderTextColor={'white'} 
			placeholder={placeholder} 
			style={styles.textInputStyle}
			accessibilityViewIsModal
		/>
	);
}
function LoginScreen() {

	const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            <StatusBar
				barStyle={isDarkMode ? 'dark-content' : 'light-content'}
				backgroundColor={'red'}
			/>
            <View style={styles.backgroundContainer}>
                    <View style={{position:'absolute',top: -350}}>
                        {/* <Image style={{height:200,width:200,overflow:'hidden', borderWidth:1, borderColor:'#000',borderRadius:100}} source={require('./assets/oliverimg.png')} /> */}
                        <Text style={styles.sectionTitle}>Soko Supermarket</Text>
						<CustomTextInput placeholder={'Email'}/>
						<CustomTextInput placeholder={'Password'}/>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </Pressable>
                        <Text style={{color:'blue', alignSelf: 'center'}}>Forgot password?</Text>
                    </View>
            </View> 
        </>
    );
}
const styles = StyleSheet.create({
	backgroundContainer:{
		flex:1,
		width,
		height:0,
		borderTopColor:'red',
		borderTopWidth:height / 2,
		borderRightWidth: width,
		borderRightColor:'#fff',
		alignItems:'center',
		justifyContent:'center',
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
	textInputStyle:{
		fontWeight:'bold',
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
		marginVertical: 10,
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
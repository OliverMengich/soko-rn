/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
    View,
	Pressable,
	Text,
	TextInput,
    Dimensions,
    StyleSheet,
    StatusBar,
	useColorScheme,
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
function RegistrationScreen() {
	const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            <StatusBar
				barStyle={isDarkMode ? 'dark-content' : 'light-content'}
				backgroundColor={'red'}
			/>
            <View style={styles.backgroundContainer}>
                    <View style={{position:'absolute',top: -350}}>
                        <Text style={styles.sectionTitle}>Soko Supermarket</Text>
						<CustomTextInput placeholder={'First Name'}/>
						<CustomTextInput placeholder={'Last Name'}/>
						<CustomTextInput placeholder={'Email'}/>
						<CustomTextInput placeholder={'Password'}/>
						<CustomTextInput placeholder={'Confirm Password'}/>
						<Pressable style={styles.button}>
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
	sectionTitle: {
		fontSize: 24,
		fontWeight: '900',
		textAlign: 'center',
		marginVertical: 10,
	},
	textInputStyle:{
		fontWeight:'bold',
		fontSize:20,
		borderBottomColor:'#000',
		borderBottomWidth:2,
		width: width * .8,
		color: 'white',
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
import React from 'react';
import { View,Dimensions, TextInput, StyleSheet } from 'react-native';
interface TextInputProps extends React.ComponentProps<typeof TextInput> {
	placeholder: string;
    isDarkMode: boolean;
};
const {width,height} = Dimensions.get('window');
function CustomTextInputComponent({placeholder,value, isDarkMode, onChangeText}:TextInputProps) {
    return (
        <View>
            <TextInput 
                placeholderTextColor={isDarkMode?'white':'black'} 
                placeholder={placeholder} 
                style={styles.textInputStyle}
                accessibilityViewIsModal
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    textInputStyle:{
		// fontWeight:'bold',
		fontSize:20,
		borderBottomColor:'#000',
		borderBottomWidth:2,
		width: width * .8,
		color: 'black',
		// marginTop:4,
	},
})
export default CustomTextInputComponent;
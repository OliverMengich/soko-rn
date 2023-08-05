/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView,StatusBar, useColorScheme} from 'react-native';
import HomeScreen from './screens/HomeScreen';
function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#000' : '#fff',
	};

  return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				// barStyle={'dark-content'}
				// barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			{/* <RegistrationScreen /> */}
			{/* <LoginScreen/> */}
			<HomeScreen/>
			{/* <Text style={styles.sectionTitle}>Hello World</Text> */}
		</SafeAreaView>
  );
}

export default App;

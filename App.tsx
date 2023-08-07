/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme} from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import UserProfile from './screens/UserProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#000' : '#fff',
		flex:1,
	};

	return (
		<NavigationContainer>
			<StatusBar
				// backgroundColor={backgroundStyle.backgroundColor}
			/>
			<SafeAreaView style={backgroundStyle}>
			<Tab.Navigator screenOptions={{headerShown: false}}>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ()=>(<Icon name={'home'} size={23} color={'black'} />),
					}}
				/>
				<Tab.Screen name="Cart"
					component={Cart}
					options={{
						tabBarIcon: ()=><Icon name={'cart'} size={23} color={'black'} />,
					}}
				/>
				<Tab.Screen name="UserProfile"
					options={{
						tabBarIcon: ()=>(<Icon name={'user'} size={23} color={'black'} />),
					}}
					component={UserProfile}
				/>

			</Tab.Navigator>
			</SafeAreaView>
		</NavigationContainer>
  );
}

export default App;

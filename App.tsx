/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, useColorScheme} from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import UserProfile from './screens/UserProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductDetail from './screens/ProductDetail';
import AllCategoriesScreen from './screens/AllCategoriesScreen';
export type RootStackParamList = {
    HomeScreen: undefined;
    CategoryScreen: {id: string};
    LoginScreen: undefined;
	ProductDetail: {id: number};
	AllCategoriesScreen: undefined;
};
type TabStackParamList = {
	HomeScreen: undefined;
	Cart: undefined;
	UserProfile: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const TabBarIcon = ({name, size,focused}:{name: string,focused: boolean,size: number})=> (
	<Icon  name={name} size={size} color={focused ? 'black' : '#ccc'} />
);
function TabNavigator (){
	return (
		<Tab.Navigator screenOptions={{headerShown: false}}>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon:({focused}) => <TabBarIcon focused={focused} name={'home'} size={23} />,
				}}
			/>
			<Tab.Screen name="Cart"
				component={Cart}
				options={{
					tabBarIcon: ({focused})=> <TabBarIcon focused={focused} name={'cart'} size={23} />,
				}}
			/>
			<Tab.Screen name="UserProfile"
				options={{
					tabBarIcon: ({focused})=> <TabBarIcon focused={focused} name={'account'} size={23} />,
				}}
				component={UserProfile}
			/>

		</Tab.Navigator>
	);
}
function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#000' : '#fff',
		flex:1,
	};

	return (
		<NavigationContainer>
			<SafeAreaView style={backgroundStyle}>
					<Stack.Navigator screenOptions={{headerShown: false}}>
						<Stack.Screen name={'HomeScreen'} component={TabNavigator}/>
						<Stack.Screen name={'LoginScreen'} component={LoginScreen}/>
						<Stack.Screen options={{headerShown: false}} name={'CategoryScreen'} component={CategoryScreen}/>
						<Stack.Screen options={{headerShown: true}} name={'ProductDetail'} component={ProductDetail}/>
						<Stack.Screen options={{headerShown: false}} name={'AllCategoriesScreen'} component={AllCategoriesScreen}/>
					</Stack.Navigator>
				</SafeAreaView>
		</NavigationContainer>
  );
}

export default App;

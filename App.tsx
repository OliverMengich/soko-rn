/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import UserProfile from './screens/UserProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductDetail from './screens/ProductDetail';
import AllCategoriesScreen from './screens/AllCategoriesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from './constants';
export type RootStackParamList = {
    HomeTabScreen: undefined;
    CategoryScreen: {id: string};
    LoginScreen: undefined;
	ProductDetail: {id: number};
	AllCategoriesScreen: undefined;
	NotificationsScreen: undefined;
	RegistrationScreen: undefined;
	OnboardingScreen: undefined
};
export type TabStackParamList = {
	HomeScreen: any;
	Cart: undefined;
	UserProfile: undefined;
	Categories: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const TabBarIcon = ({name, size,focused}:{name: string,focused: boolean,size: number})=> (
	(<Icon  name={name} size={size} color={focused ? 'black' : '#ccc'} />)
	// (<MaterialIcons  name={name} size={size} color={focused ? 'black' : '#ccc'} />)
);
function TabNavigator (){
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false,
			// tabBarActiveTintColor: COLORS
			}}>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon:({focused}) => <TabBarIcon focused={focused} name={'home'} size={23} />,
				}}
			/>
			<Tab.Screen 
				name="Categories"
				options={{
					tabBarIcon: ({focused})=> <TabBarIcon focused={focused} name={'menu'} size={23} />,
				}}
				component={AllCategoriesScreen}
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
					<Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen}/>
					<Stack.Screen name={'HomeTabScreen'} component={TabNavigator}/>
					<Stack.Screen options={{headerShown: false}} name={'RegistrationScreen'} component={RegistrationScreen}/>
					<Stack.Screen name={'LoginScreen'} component={LoginScreen}/>
					<Stack.Screen options={{headerShown: false}} name={'CategoryScreen'} component={CategoryScreen}/>
					<Stack.Screen options={{headerShown: true}} name={'ProductDetail'} component={ProductDetail}/>
					<Stack.Screen options={{headerShown: false}} name={'AllCategoriesScreen'} component={AllCategoriesScreen}/>
					<Stack.Screen options={{headerShown: true}} name={'NotificationsScreen'} component={NotificationsScreen}/>
				</Stack.Navigator>
				</SafeAreaView>
		</NavigationContainer>
  );
}

export default App;

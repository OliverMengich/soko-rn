import React from 'react';
import { View, StyleSheet,StatusBar, useColorScheme, } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BusClientComponent from '../components/onboarding/BusClient.component';
import BusinessQuestionsComponent from '../components/onboarding/BusinessQuestions.component';
import LastWindowComponent from '../components/onboarding/lastwindow.component';
import Carousel from '../components/onboarding/Carousel';
import { COLORS } from '../constants';
type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>

function OnboardingScreen({navigation}: Props) {
    const isDarkMode = useColorScheme() === 'dark';
    const [componentToShow, setComponentToShow] = React.useState('A');
    function handleNavigation(){
        navigation.navigate('RegistrationScreen');
    }
    const toggleComponent = () => {
        switch (componentToShow) {
            case 'A':
                setComponentToShow('A');
                break;
            case 'B':
                setComponentToShow('B');
                break;
            case 'C':
                setComponentToShow('C');
                break;
            case 'D':
                setComponentToShow('D');
                break;
            default:
            // Handle unexpected value
        }
    };
    const setNextScreen = (screen: string)=>setComponentToShow(screen)
    const renderComponent = () => {
        switch (componentToShow) {
            case 'A':
                return <Carousel setNextScreen={setNextScreen} />;
            case 'B':
                return <BusClientComponent navigation={navigation} setNextScreen={setNextScreen} isDarkMode={isDarkMode} />;
            case 'C':
                return <BusinessQuestionsComponent navRegister={handleNavigation} />;
            case 'D':
                return <LastWindowComponent navigation={navigation} />;
            default:
                return null;
        }
    };
    return (
        <View style={[styles.container,{backgroundColor: isDarkMode?COLORS.darkBackground:'#f5f5f5'}]}>
            <StatusBar barStyle={isDarkMode?'light-content':"dark-content"}
                backgroundColor={isDarkMode?COLORS.darkBackground:"white"}
            />
            {renderComponent()}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        // backgroundColor:'white'
    },
});
export default OnboardingScreen;
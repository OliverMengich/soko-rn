import React from 'react';
import { View, StyleSheet,FlatList, StatusBar, Image, Text,Dimensions, Pressable, TextInput, ImageSourcePropType} from 'react-native';
const {width,height} = Dimensions.get('window');
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BusClientComponent from '../components/BusClient.component';
import BusinessQuestionsComponent from '../components/BusinessQuestions.component';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>
const LastWindow = ()=>{
    return(
        <View style={{flex: 0.7, width, alignItems: 'center'}}>
            <Image 
                source={require('../assets/hooray.jpg')}
                style={{width: width*.9, height: width, resizeMode: 'contain', borderRadius: width*.05}}
            />
            <Text style={styles.normalText}>Thank you, information has been recorded, we will get intouch with you within 72 hours, in the meantime register to view our products</Text>
            <View style={{flexDirection: 'row'}}>
                <Pressable style={{marginVertical: 20,}}>
                    <Text style={styles.text}>Register as customer</Text>
                </Pressable>
            </View>
        </View>
    )
}
function OnboardingScreen({navigation}: Props) {
    const flatlistRef = React.useRef<FlatList>(null);
    function navRegister(){
        navigation.navigate('RegistrationScreen');
    }
    const [screen, setScreen] =React.useState();
    const renderDotIndicator = () => { 
        return (
            <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                {
                    CAROUSEL.map((item, index) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    width: activeIndex === index ? 20 : 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: 'black',
                                    marginHorizontal: 5
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    const CAROUSEL = [
        {
            id: '1',
            title: 'Welcome',
            image: require('../assets/3005866.jpg'),
            description: 'Welcome to X supermarket online platform'
        },
        {
            id: '2',
            title: 'Shopping',
            image: require('../assets/3776798.jpg'),
            description:'Do your shopping online without stress, we will deliver to your doorstep',
        },
        {
            id: '3',
            title: 'Businesses',
            image: require('../assets/sell-online.jpg'),
            description:'Do you have a business and want to sell your goods online using our platform? Then you are at the right place, register as a business and we will contact you',
        },
        {
            id: '4',
            title: 'Payment and Delivery',
            image: require('../assets/pay.jpg'),
            description:'Pay for your goods online with ease and your goods will be delivered to you',
        },
    ];
    const getItemLayout = (data: unknown, index: number) => {
        return {
            length: width, 
            offset: width * index, 
            index,
        };
    }
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    const handleScroll = (event: any)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    }
    const handleNext = () => {
        if(activeIndex < CAROUSEL.length - 1){
            flatlistRef.current?.scrollToIndex({index: activeIndex + 1});
        }else{

            // screen= LastWindow();
            return;
            // navRegister();

            // setScreen(<BusinessQuestionsComponent/>);
        }
    }
    const handlePrev=(index:number)=>{
        if(activeIndex > 0){
            flatlistRef.current?.scrollToIndex({index: activeIndex - 1});
        }
    }
    const renderItem = ({item}:{item:{id: string,description: string, image: ImageSourcePropType, title: string}}) => {
        return ( 
            <View style={{flex: 0.7, width, alignItems: 'center'}}>
                <Image 
                    source={item.image}
                    style={{width: width*.9, height: width, resizeMode: 'contain', borderRadius: width*.05}}
                />
                <Text style={styles.boldtext}>{item.title}</Text>
                <Text style={styles.normalText}>{item.description}</Text>
            </View>
        )
    }

    function CurrentScreen(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={CAROUSEL}
                    renderItem={renderItem}
                    ref={flatlistRef}
                    getItemLayout={getItemLayout}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                    keyExtractor={item => item.id.toString()}
                    bounces={false}
                />
                {renderDotIndicator()}
                <View style={styles.row1}>
                    <Pressable style={styles.nextBtn} onPress={()=>handlePrev(activeIndex)}>
                        <Text style={styles.text}>Prev</Text>
                    </Pressable>
                    <Pressable style={styles.nextBtn} onPress={handleNext}>
                        <Text style={styles.text}>Next</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
    React.useLayoutEffect(()=>{
        // setScreen(<CurrentScreen/>);
    },[])
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"
                backgroundColor="white"
            />
            {screen}
            {/* {screen.page} */}
            {/* <CurrentScreen/> */}
            {/* <View style={{flex:1}}>
                <FlatList
                    data={CAROUSEL}
                    renderItem={renderItem}
                    ref={flatlistRef}
                    getItemLayout={getItemLayout}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                    keyExtractor={item => item.id.toString()}
                    bounces={false}
                />
                {renderDotIndicator()}
                <View style={styles.row1}>
                    <Pressable style={styles.nextBtn} onPress={()=>handlePrev(activeIndex)}>
                        <Text style={styles.text}>Prev</Text>
                    </Pressable>
                    <Pressable style={styles.nextBtn} onPress={handleNext}>
                        <Text style={styles.text}>Next</Text>
                    </Pressable>
                </View>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        backgroundColor:'white'
    },
    row:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row1:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    boldtext:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    normalText:{
        fontSize:16,
        color: '#000',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    textInputStyle:{
		fontSize:20,
		borderBottomColor:'#000',
		borderBottomWidth:2,
		width: width * .8,
		color: 'black',
		// marginTop:4,
	},
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
    },
    grayedtext:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc'
    },
    pressableBtn:{
        width:'42%',
        marginVertical:20,
        marginHorizontal: 8,
        borderWidth:3,
        padding:4,
    },
    nextBtn:{
        paddingHorizontal: 30,
        marginTop: 50,
        paddingVertical: 5,
        marginBottom: 4,
        alignItems: 'center',
        alignSelf: 'flex-end',
        // borderRadius: 1,
        // borderWidth: 1,
    }
});
export default OnboardingScreen;
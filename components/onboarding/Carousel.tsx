import { StyleSheet, Text,FlatList,Dimensions, View,useColorScheme, ImageSourcePropType, Image, Pressable } from 'react-native'
import React from 'react'
const CAROUSEL = [
    {
        id: '1',
        title: 'Welcome',
        image: require('../../assets/3005866.jpg'),
        description: 'Welcome to X supermarket online platform'
    },
    {
        id: '2',
        title: 'Shopping',
        image: require('../../assets/3776798.jpg'),
        description:'Do your shopping online without stress, we will deliver to your doorstep',
    },
    {
        id: '3',
        title: 'Businesses',
        image: require('../../assets/sell-online.jpg'),
        description:'Do you have a business and want to sell your goods online using our platform? Then you are at the right place, register as a business and we will contact you',
    },
    {
        id: '4',
        title: 'Payment and Delivery',
        image: require('../../assets/pay.jpg'),
        description:'Pay for your goods online with ease and your goods will be delivered to you',
    },
];
const {width} = Dimensions.get('window');
type Props={
    setNextScreen: (screen: string)=>void;
}
export default function Carousel({setNextScreen}: Props) {
    const flatlistRef = React.useRef<FlatList>(null);
    const isDarkMode = useColorScheme() === 'dark';
    const getItemLayout = (data: unknown, index: number) => {
        return {
            length: width, 
            offset: width * index, 
            index,
        };
    }
    const [activeIndex, setActiveIndex] = React.useState(0);
    const renderDotIndicator = (isDarkMode: boolean) => { 
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
                                    backgroundColor: isDarkMode?'white':'black',
                                    marginHorizontal: 5
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    const handleScroll = (event: any)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    }
    const handleNext = () => {
        if(activeIndex < CAROUSEL.length - 1){
            flatlistRef.current?.scrollToIndex({index: activeIndex + 1});
        }else{
            setNextScreen('B');
            return;
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
                <Text style={[styles.boldtext,{color:isDarkMode?'white':'black'}]}>{item.title}</Text>
                <Text style={[styles.normalText,{color:isDarkMode?'white':'black'}]}>{item.description}</Text>
            </View>
        )
    }
    return (
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
                {renderDotIndicator(isDarkMode)}
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

const styles = StyleSheet.create({
    row1:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    boldtext:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    normalText:{
        fontSize:16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    nextBtn:{
        paddingHorizontal: 30,
        marginTop: 50,
        paddingVertical: 5,
        marginBottom: 4,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
    },
})
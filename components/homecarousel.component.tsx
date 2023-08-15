import React from 'react';
import { NativeScrollEvent } from 'react-native';
import { NativeSyntheticEvent } from 'react-native';
import { View, ImageBackground,Pressable, FlatList, Dimensions,StyleSheet, Text } from 'react-native';
const {width} = Dimensions.get('window');
function HomecarouselComponent({isDarkMode}: {isDarkMode: boolean}) {
    const flatlistRef = React.useRef<FlatList>(null);
    const carouselData = [
        {
            id: '1',
            title: 'Healthy Mondays',
            description: 'Get amazing fruits and vegetables at affordable prices',
            image: require('../assets/barner.png'),
            tab:'groceries'
        },
        {
            id: '2',
            title: 'Furniture',
            description: 'Get amazing furniture at affordable prices, 70% off, talk to us today',
            image: require('../assets/quiz.jpg'),
            tab:'furniture'
        },
        {
            id: '3',
            title: 'Electronics',
            description: 'Get amazing electronics at affordable prices, 70%',
            image: require('../assets/sell-online.jpg'),
            tab: 'electronics'
        },
        {
            id:'4',
            title:'Fashion',
            description:'Get amazing clothes, both mean and women clothes',
            tab: 'fashion',
            image: require('../assets/sell-online.jpg'),
        },
        {
            id:'5',
            title:'Bakery',
            description:'Get amazing bread and cakes each and affordable',
            tab: 'bakery',
            image: require('../assets/sell-online.jpg'),
        },
        {
            id: '6',
            title: 'Mother and Kids',
            description: 'Get amazing mother and kids products at affordable prices, 70%',
            tab: 'motherandkids',
            image: require('../assets/sell-online.jpg'),
        }
    ];
    const getItemLayout = (data: any, index: number) => {
        return {
            length: width, 
            offset: width * index, 
            index,
        };
    }
    const [activeIndex, setActiveIndex] = React.useState(0);
    //Render Dot indicators
    React.useEffect(() => {
        const interval = setInterval(() => {
            if(activeIndex < carouselData.length - 1){
                setActiveIndex(activeIndex + 1);
                flatlistRef.current?.scrollToIndex({index: activeIndex + 1, animated: true});
            }else{
                setActiveIndex(0);
                flatlistRef.current?.scrollToIndex({index: 0, animated: true});
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    const renderDotIndicator = () => { 
        return (
            <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                {
                    carouselData.map((item, index) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: activeIndex === index ? 'red' : 'gray',
                                    marginHorizontal: 5
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        console.log(index);
        setActiveIndex(index);
    }
    const renderItem = ({ item }: any) => {
        return(
            <ImageBackground imageStyle={isDarkMode? {backgroundColor:'#0f172a'}:{backgroundColor: '#ccc'}} resizeMode="stretch" style={{height: width*1, paddingTop:10, position: 'relative'}}  source={require('../assets/barner.png')}>
                    <View style={{position: 'absolute', bottom: 10, left:width*.2}}>
                        <Text style={[styles.normalText,{color: '#fff'}]}>Healthy Mondays</Text>
                        <Text style={[styles.boldText,{color: '#fff'}]}>Get Up to 70% off for everything</Text>
                        <Pressable style={styles.button}>
                            <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff'}}>Shop Now</Text>
                        </Pressable>
                        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.notCurrentDiv,isDarkMode&&{backgroundColor:'#fff'}]}>.</Text>
                                <Text style={[styles.notCurrentDiv,isDarkMode&&{backgroundColor:'#fff'}]}>.</Text>
                                <Text style={[styles.notCurrentDiv,isDarkMode&&{backgroundColor:'#fff'},{ width: 20}]}>.</Text>
                                <Text style={[styles.notCurrentDiv,isDarkMode&&{backgroundColor:'#fff'}]}>.</Text>
                                <Text style={[styles.notCurrentDiv,isDarkMode&&{backgroundColor:'#fff'}]}>.</Text>
                        </View>
                    </View>
            </ImageBackground>
        )
    }
    return (
        <View>
            <FlatList
                data={carouselData}
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
        </View>
    );
}
const styles = StyleSheet.create({
    notCurrentDiv:{
        padding: 5,
        marginHorizontal:4,
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor: '#000',
    },
    boldText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        maxWidth: width *.8,
    },
    button:{
		backgroundColor:'red',
		width: width * .3,
		height:45,
		marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
	},
    normalText:{
        fontSize:16,
        fontWeight: '200',
    },
})
export default HomecarouselComponent;
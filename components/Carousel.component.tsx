import React, {useEffect, useRef,} from 'react';
import { NativeScrollEvent, Platform, Pressable } from 'react-native';
import { Text, View, Dimensions,FlatList, ImageBackground, ImageSourcePropType, NativeSyntheticEvent } from 'react-native';
const {width} = Dimensions.get('window');
function CarouselComponent() {
    const flatlistRef = useRef<FlatList>(null);
    const carouselData = [
        {
            id: '1',
            title: 'Title 1',
            image: require('../assets/barner.png')
        },
        {
            id: '2',
            title: 'Title 2',
            image: require('../assets/quiz.jpg')
        },
        {
            id: '3',
            title: 'Title 3',
            image: require('../assets/sell-online.jpg')
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
    const renderItem = ({item}:{item:{ id: string,image: ImageSourcePropType, title: string}}) => {
        return ( 
            <View style={{ borderRadius: 0,marginHorizontal: 2,marginVertical: 5, overflow: Platform.OS ==='android'? 'hidden':'visible'}}>
                <Pressable android_ripple={{color:'#fff'}} style={{alignContent: 'center',position: 'relative', borderRadius: 20, marginLeft:10,width: width*.8}}>
                    <ImageBackground style={{width: width*.8,borderRadius: 20, backgroundColor: 'black', height:200,  alignItems: 'center'}} resizeMode='contain' imageStyle={{width: width*.8, opacity: .5, borderRadius: 20, }} source={item.image} >
                        <View style={{position: 'absolute', top: '35%', left: 10}}>
                            <Text style={{color: 'white', opacity:1,fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={{color: 'white', fontSize: 17,maxWidth: '90%'}}>Lorem ipsum dolor sit amet consectetur.</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
        )
    }
    return (
        <View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 20, width}}>
                <FlatList
                    data={carouselData}
                    renderItem={renderItem}
                    ref={flatlistRef}
                    getItemLayout={getItemLayout}
                    horizontal={true}
                    // pagingEnabled={true}
                    onScroll={handleScroll}
                    keyExtractor={item => item.id}
                    bounces={false}
                />
            </View>
        </View>
    );
}

export default CarouselComponent;
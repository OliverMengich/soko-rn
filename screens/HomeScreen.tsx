/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-floating-decimal */
/* eslint-disable eol-last */
import React from 'react';
import {
    StyleSheet,
	View,
    Dimensions,
    Text,
    Pressable,
    ImageBackground,
    Image,
    useColorScheme,
    StatusBar,
    FlatList,
} from 'react-native';
const {width} = Dimensions.get('window');
import SHOP_DATA from '../assets/data';
interface Item {id: string,imageUrl: string,price: number, title: string}

function HomeScreen(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const POPULAR_ITEMS: Item[] = SHOP_DATA.reduce((acc:Item[], collection) => {
        acc.push({
            imageUrl: collection.items[0].imageUrl,
            title: collection.items[0].name,
            price: collection.items[0].price,
            id: collection.items[0].id.toString(),
        });
        return acc;
    }, []);
    return (
        <View style={{flex:1}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'#ccc'}
            />
                <View>
                    <ImageBackground imageStyle={{backgroundColor: '#ccc'}} resizeMode="stretch" style={{height: width*1.2, position: 'relative'}}  source={require('../assets/barner.png')}>
                        <View style={styles.navContainer}>
                            <Image
                                resizeMode="contain"
                                style={{ alignSelf: 'center',borderRadius: 20, height: 25,width:25}}
                                source={require('../assets/oliverimg.png')}
                            />
                            <View style={styles.rowContainer}>
                                <Text>Cart</Text>
                                <Text>Cart</Text>
                            </View>
                        </View>
                        <View style={{position: 'absolute', bottom: 10, left:width*.2}}>
                            <Text style={styles.normalText}>Healthy Mondays</Text>
                            <Text style={[styles.boldText,{color: '#fff'}]}>Get Up to 70% off for everything</Text>
                            <Pressable style={styles.button}>
                                <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff'}}>Shop Now</Text>
                            </Pressable>
                            <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={styles.notCurrentDiv}>.</Text>
                                    <Text style={styles.notCurrentDiv}>.</Text>
                                    <Text style={[styles.notCurrentDiv,{ width:20 } ]}>.</Text>
                                    <Text style={styles.notCurrentDiv}>.</Text>
                                    <Text style={styles.notCurrentDiv}>.</Text>
                                </View>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.rowContainer,{marginVertical: 15,marginHorizontal: 7}]}>
                        <Text style={[styles.boldText,{fontSize: 20}]}>Categories</Text>
                        <Pressable>
                            <Text style={styles.moreText}>Show all</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                        <FlatList
                            data={SHOP_DATA}
                            renderItem={({item}) => (
                                <View style={{marginRight: width * .1, alignItems: 'center'}}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ alignSelf: 'center',height: 50,width:50}}
                                        source={{
                                            uri: item.imageUrl,
                                            headers:{
                                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                                            },
                                        }}
                                    />
                                    <Text style={{fontSize:15, fontWeight: '600',color:'#000'}}>{item.title}</Text>
                                    {/* <Text style={styles.priceText}>{item.items.length} Categories</Text> */}
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:7}]}>
                        <Text style={[styles.boldText,{fontSize: 20}]}>Popular</Text>
                        <Text style={styles.moreText}>Show all</Text>
                    </View>
                    <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                        <FlatList
                            data={POPULAR_ITEMS}
                            renderItem={({item}) => (
                                <View style={{marginRight: width * .1}}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ alignSelf: 'center',height: 50,width:50}}
                                        source={{
                                            uri: item.imageUrl,
                                            method: 'GET',
                                            width: 50,
                                        }}
                                    />
                                    <Text style={{fontSize:15, fontWeight: '600',color:'#000'}}>{item.title.slice(0,10)}...</Text>
                                    <Text style={styles.normalText}>${item.price}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    navContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:17,
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    button:{
		backgroundColor:'red',
		width: width * .3,
		height:45,
		marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
	},
    boldText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        maxWidth:width *.8,
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        maxWidth:width *.8,
        backgroundColor: '#ff0a0a',
        padding: 5,
    },
    normalText:{
        fontSize:16,
        fontWeight: '200',
    },
    moreText:{
        color:'#FF0A0A',
        fontWeight:'bold',
    },
    itemsContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    item:{
        backgroundColor:'#D9D9D9',
        width: width * .45,
        marginRight: width * .1,
        borderRadius:4,
    },
    notCurrentDiv:{
        padding: 5,
        marginHorizontal:4,
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor: '#000',
    },
});
export default HomeScreen;
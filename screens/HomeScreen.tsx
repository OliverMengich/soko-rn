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
    Platform,
    ScrollView,
} from 'react-native';
const {width} = Dimensions.get('window');
import SHOP_DATA from '../assets/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { RootStackParamList } from '../App';
import type {NativeStackScreenProps } from '@react-navigation/native-stack';
import RatingComponent from '../components/RatingComponent.component';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
interface Item {id: string,imageUrl: string,price: number, title: string}
function HomeScreen({navigation}: Props): JSX.Element {
    // const navigation = useNavigation();
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
    function handleNavigation (id: string){
        navigation.navigate('CategoryScreen',{
            id,
        });
    }
    function handleProductDetailNav(id: number){
        navigation.navigate('ProductDetail',{
            id,
        });
    }
    return (
        <ScrollView style={{flex:1}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'#ccc'}
            />
            <View>
                <ImageBackground imageStyle={{backgroundColor: '#ccc'}} resizeMode="stretch" style={{height: width*1, paddingTop:10, position: 'relative'}}  source={require('../assets/barner.png')}>
                    <View style={styles.navContainer}>
                        <Image
                            resizeMode="contain"
                            style={{ alignSelf: 'center',borderRadius: 20, height: 25,width:25}}
                            source={require('../assets/oliverimg.png')}
                        />
                        <View style={styles.rowContainer}>
                            <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                            <View style={{position: 'relative'}}>
                                <Octicons name={'bell'} style={{marginHorizontal: 10}} size={23} color={'black'} />
                                <View style={{position:'absolute', top: -6, right: 4, backgroundColor: 'red', borderRadius: 15, width: 15, height: 15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{color:'#fff',fontWeight: 'bold', fontSize: 10}}>8</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{position: 'absolute', bottom: 10, left:width*.2}}>
                        <Text style={[styles.normalText,{color: '#fff'}]}>Healthy Mondays</Text>
                        <Text style={[styles.boldText,{color: '#fff'}]}>Get Up to 70% off for everything</Text>
                        <Pressable style={styles.button}>
                            <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff'}}>Shop Now</Text>
                        </Pressable>
                        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.notCurrentDiv}>.</Text>
                                <Text style={styles.notCurrentDiv}>.</Text>
                                <Text style={[styles.notCurrentDiv,{ width: 20}]}>.</Text>
                                <Text style={styles.notCurrentDiv}>.</Text>
                                <Text style={styles.notCurrentDiv}>.</Text>
                            </View>

                        </View>
                </ImageBackground>
            </View>
            <View style={[styles.rowContainer,{marginVertical: 15,marginHorizontal: 17}]}>
                <Text style={[styles.boldText,{fontSize: 20}]}>Categories</Text>
                <Pressable onPress={()=>{navigation.navigate('AllCategoriesScreen');}} android_ripple={{color: '#f5f5f5'}}>
                    <Text style={styles.moreText}>Show all</Text>
                </Pressable>
            </View>
            <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                <FlatList
                    data={SHOP_DATA}
                    renderItem={({item}) => (
                        <View style={{ borderRadius: 50, width: 100, height: 100,overflow: Platform.OS ==='android'? 'hidden':'visible'}}>
                            <Pressable onPress={()=>handleNavigation(item.id)} android_ripple={{color: '#ccc'}} style={{marginRight: width * .1, backgroundColor: '#f5f5f5',padding: 10,borderRadius: 50, width: 100, height: 100, alignItems: 'center'}}>
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
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:17}]}>
                <Text style={[styles.boldText,{fontSize: 20}]}>Popular</Text>
                <Text style={styles.moreText}>Show all</Text>
            </View>
            <View style={[styles.itemsContainer,{marginVertical: 20,marginHorizontal:7}]}>
                <FlatList
                    data={POPULAR_ITEMS}
                    renderItem={({item}) => (
                        <View style={{marginRight: width * .1,width: width*.35, borderRadius: 10, backgroundColor: '#f5f5f5'}}>
                            <Image
                                // resizeMode="contain"
                                style={{height: 100, width: width*.35}}
                                source={{
                                    uri: item.imageUrl,
                                    method: 'GET',
                                    // width: 50,
                                }}
                            />
                            <Text style={{fontSize:15, fontWeight: '600',color:'#000'}}>{item.title.slice(0,10)}...</Text>
                            <Text style={[styles.normalText, {color:'#000'}]}>${item.price}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <FlatList
                data={SHOP_DATA}
                renderItem={({item})=>(
                    <View style={[{marginHorizontal:7, width: '100%'}]}>
                        <View style={[styles.rowContainer,{marginHorizontal:7 }]}>
                            <Text style={[styles.boldText,{fontSize: 20}]}>{item.title}</Text>
                            <Text style={styles.moreText}>Show all</Text>
                        </View>
                        <FlatList
                            data={item.items}
                            renderItem={(val)=>{
                                return (
                                    <Pressable onPress={()=>handleProductDetailNav(val.item.id)} style={{marginRight: width*.1, paddingBottom: 10,borderRadius: 5, backgroundColor: '#f5f5f5', width: width*.35}}>
                                        <Image
                                            // resizeMode="contain"
                                            style={{height: 100,borderTopLeftRadius:10, width: '100%'}}
                                            source={{
                                                uri: val.item.imageUrl,
                                                method: 'GET',
                                            }}
                                        />
                                        <Text style={{fontSize:15, fontWeight: '600',color:'#000'}}>{val.item.name.slice(0,10)}...</Text>
                                        <View >
                                            <RatingComponent rating={4.5} />
                                        </View>
                                        <Text style={[styles.normalText, {color:'#000'}]}>${val.item.price}</Text>
                                    </Pressable>
                                );
                            }}
                            horizontal={true}
                        />
                    </View>
                )}
            />
        </ScrollView>
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
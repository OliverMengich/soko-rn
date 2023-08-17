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
import ProductItemComponent from '../components/ProductItem.component';
import CarouselComponent from '../components/Carousel.component';
import CategoryInfoComponent from '../components/Categories/CategoryInfo.component';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabScreen'>;
interface Item {id: string,imageUrl: string,price: number, title: string}
function HomeScreen({navigation}: Props): JSX.Element {
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
        <ScrollView style={[styles.container,isDarkMode?{backgroundColor:'#0f172a'}:{backgroundColor:'#f5f5f5'}]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode? '#0f172a':'#ccc'}
            />
            <View>
                <View style={[styles.navContainer,{backgroundColor:isDarkMode? '#0f172a':'#ccc'}]}>
                    <Image
                        resizeMode="contain"
                        style={{ alignSelf: 'center',borderRadius: 20, height: 25,width:25}}
                        source={require('../assets/oliverimg.png')}
                    />
                    <View style={styles.rowContainer}>
                        <Icon name={'shopping-outline'} style={{marginHorizontal: 10}} size={23} color={isDarkMode?'#fff':'black'} />
                        <Pressable onPress={()=>navigation.navigate('NotificationsScreen')} android_ripple={{color: '#f5f5f5'}} style={{position: 'relative'}}>
                            <Octicons name={'bell'} style={{marginHorizontal: 10}} size={23} color={isDarkMode?'#fff':'black'} />
                            <View style={{position:'absolute', top: -6, right: 4, backgroundColor: 'red', borderRadius: 15, width: 15, height: 15, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color:'#fff',fontWeight: 'bold', fontSize: 10}}>8</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
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
            </View>
            <View style={[styles.rowContainer,{marginVertical: 15,marginHorizontal: 17}]}>
                <Text style={[styles.boldText,isDarkMode? {fontSize: 20, color:'#fff'}:{fontSize: 20}]}>Categories</Text>
                <Pressable onPress={()=>{navigation.navigate('AllCategoriesScreen');}} android_ripple={{color: '#f5f5f5'}}>
                    <Text style={styles.moreText}>Show all</Text>
                </Pressable>
            </View>
            
            <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                <FlatList
                    data={SHOP_DATA}
                    renderItem={({item}) => (
                        <CategoryInfoComponent
                            handleNavigation={handleNavigation}
                            isDarkMode={isDarkMode}
                            item={item}
                            key={item.id}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:17}]}>
                    <Text style={[styles.boldText,isDarkMode? {fontSize: 20, color:'#fff'}:{fontSize: 16}]}>Featured Categories</Text>
                    <Text style={styles.moreText}>Show all</Text>
                </View>
                <CarouselComponent/>    
            </View>
            <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:17}]}>
                <Text style={[styles.boldText,isDarkMode? {fontSize: 20, color:'#fff'}:{fontSize: 16}]}>Popular</Text>
                <Text style={styles.moreText}>Show all</Text>
            </View>
            <View style={[styles.itemsContainer,{marginVertical: 20,marginHorizontal:7}]}>
                <FlatList
                    data={POPULAR_ITEMS}
                    renderItem={({item}) => (
                        <ProductItemComponent
                            id={item.id}
                            handleProductDetailNav={handleProductDetailNav}
                            imageUrl={item.imageUrl}
                            name={item.title}
                            price={item.price}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    navContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:17,
        paddingTop:6,
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    categoryStyle: {
        marginRight: width * .1, 
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 50, 
        width: 100, height: 100, 
        alignItems: 'center',
    },
    categoryImageStyle: { 
        alignSelf: 'center', 
        height: 50,
        width:50
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
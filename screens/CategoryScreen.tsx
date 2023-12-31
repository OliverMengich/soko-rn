/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet,Dimensions,useColorScheme, View, TextInput } from 'react-native';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList,'CategoryScreen'>;
import SHOP_DATA from '../assets/data';
const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductItemComponent from '../components/ProductItem.component';
import { COLORS } from '../constants';
function CategoryScreen({route, navigation}: Props) {
    const categoryId = route.params.id;
    const isDarkMode = useColorScheme()==='dark';
    const category = SHOP_DATA.find((item)=> item.id === categoryId);
    function handleProductDetailNav(id: number){
        navigation.navigate('ProductDetail',{
            id,
        });
    }
    return (
        <View style={[{flex:1, alignItems:'center'},isDarkMode&&{backgroundColor:COLORS.darkBackground}]}>
            <View style={styles.rowContainer}>
                <Icon name="chevron-left" color={isDarkMode?'white':'black'} onPress={()=>navigation.goBack()} size={30} />
                <View style={styles.inputView}>
                    <TextInput placeholderTextColor={isDarkMode?'black':'black'} style={[styles.input,isDarkMode&&{backgroundColor:'white'}]} placeholder="Search Product" />
                    <Ionicons color={'black'} name="search" size={25}/>
                </View>
                <Entypo color={isDarkMode?'white':'black'} name="sound-mix" size={25} />
                <Icon name="dots-horizontal" color={isDarkMode?'white':'black'} onPress={()=>navigation.goBack()} size={30} />
            </View>
            <FlatList
                data={category?.items}
                renderItem={({item})=> (
                    <ProductItemComponent 
                        key={item.id}
                        isDarkMode={isDarkMode}
                        imageUrl={item.imageUrl}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                        handleProductDetailNav={handleProductDetailNav} 
                    />
                )}
                numColumns={2}
                keyExtractor={(item)=> item.id.toString()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    normalText:{
        fontSize:16,
        fontWeight: '200',
        color:'#000',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputView:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.7,
        alignSelf: 'center',
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingRight: 20,
    },
    input: {
        borderRadius: 40,
        padding: 3,
        backgroundColor: '#fff',
        color: '#000',
        width: width * 0.55,
        paddingLeft: 18,
    },
    itemContainer: {
        marginRight: width * 0.1,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        width: width * 0.35,
    },
    imageStyle: {
        height: 100,
        borderTopLeftRadius:10,
        width: '100%',
    },
    itemName:{
        fontSize:15,
        fontWeight: '600',
        color:'#000',
    },
});
export default CategoryScreen;

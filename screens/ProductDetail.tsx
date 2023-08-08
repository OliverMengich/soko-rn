/* eslint-disable prettier/prettier */
// import { useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {View,StyleSheet,Text, ImageBackground, Dimensions, Pressable} from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList,'ProductDetail'>;
import SHOP_DATA from '../assets/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const NewHeader = (name: string, imageUrl: string)=>{
    return (
        <View style={{backgroundColor: '#fff'}}>
            <ImageBackground imageStyle={styles.headerImage} source={{uri: imageUrl}} >
                <View style={styles.row}>
                    <Icon name="chevron-left" style={{color: '#fff',fontWeight: 'bold'}} size={30} />
                    <Text style={{fontWeight: '900', fontSize: 30, color: '#fff'}}>{name}</Text>
                    <Icon name="dots-vertical" size={30} />
                </View>
            </ImageBackground>
        </View>
    );
};
const {width, height} = Dimensions.get('screen');
function ProductDetail({navigation, route}: Props) {
    const productID = route.params.id;
    const product = SHOP_DATA.map((item)=> item.items).flat().find((item)=> item.id === productID);
    console.log(product);
    useLayoutEffect(()=>{
        navigation.setOptions({
            header: ()=>NewHeader(product?.name ?? '', product?.imageUrl ?? ''),
        });
    });
    return (
       <View style={styles.container}>
            <Text style={styles.boldText}>{product?.name}</Text>
            <View style={styles.descriptionSection}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum animi porro omnis aut voluptatum facere debitis fuga suscipit ratione!</Text>
            </View>
            <View style={[styles.row,{padding: 20}]}>
                <Text style={[styles.boldText,{fontSize: 20}]}>${product?.price}</Text>
            </View>
            <View style={styles.bottomSection}>
                <Icon name="heart-outline" size={20} />
                <Pressable style={styles.cartBtn} onPress={()=>{}}>
                    <Text style={{fontWeight: '900', color: '#fff', textTransform: 'uppercase'}}>Add to cart</Text>
                </Pressable>
            </View>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: height * 0.4,
        backgroundColor: '#fff',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerImage: {
        width: width,
        height: height * 0.40,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    boldText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        // maxWidth:width * 0.8,
    },
    descriptionSection: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#000',
        padding: 10,
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartBtn: {
        backgroundColor: '#ff0a0a',
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '50%',
        alignItems: 'center',
    },
});
export default ProductDetail;

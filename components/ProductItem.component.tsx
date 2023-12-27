/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Pressable,StyleSheet,Dimensions, Image, Text, Platform } from 'react-native';
import RatingComponent from './RatingComponent.component';
type Props={
    imageUrl: string,
    price: number,
    id: number | string,
    name: string,
    isDarkMode: boolean,
    handleProductDetailNav: (id: number)=>void
}
const {width} = Dimensions.get('screen');
function ProductItemComponent({handleProductDetailNav,id,name,price,isDarkMode, imageUrl}: Props) {
    const handlePress=()=>{handleProductDetailNav(typeof id === 'string' ? parseInt(id) : id)};
    return (
        <View style={{ borderRadius: 0,marginHorizontal: 2,marginVertical: 5, overflow: Platform.OS ==='android'? 'hidden':'visible'}}>
            <Pressable android_ripple={{color:'#ccc'}} onPress={handlePress} style={[styles.itemContainer,isDarkMode &&{borderColor:'#304d5d', backgroundColor: '#000'}]}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: imageUrl,
                        method: 'GET',
                    }}
                />
                <Text style={[styles.name,isDarkMode?{color:'#fff'}:{color:'#000'}]}>{name.slice(0,10)}...</Text>
                <View >
                    <RatingComponent rating={4.5} />
                </View>
                <Text style={[styles.normalText,isDarkMode?{color:'#fff'}:{color:'#000'}]}>${price}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    name: {fontSize:15, fontWeight: '600'},
    normalText:{
        fontSize:16,
        fontWeight: '400',
    },
    imageStyle: {
        height: 130,
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        width: '100%',
    },
    itemContainer: {
        marginRight: width * 0.1,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        width: width * 0.35,
    },
});
export default ProductItemComponent;

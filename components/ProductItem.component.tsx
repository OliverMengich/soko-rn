/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Pressable,StyleSheet,Dimensions, Image, Text } from 'react-native';
import RatingComponent from './RatingComponent.component';
type Props={
    imageUrl: string,
    price: number,
    id: number | string,
    name: string
    handleProductDetailNav: (id: number)=>void
}
const {width} = Dimensions.get('screen');
function ProductItemComponent({handleProductDetailNav,id,name,price, imageUrl}: Props) {
    return (
        <Pressable onPress={()=>handleProductDetailNav(typeof id === 'string' ? parseInt(id) : id)} style={styles.itemContainer}>
            <Image
                style={styles.imageStyle}
                source={{
                    uri: imageUrl,
                    method: 'GET',
                }}
            />
            <Text style={styles.name}>{name.slice(0,10)}...</Text>
            <View >
                <RatingComponent rating={4.5} />
            </View>
            <Text style={[styles.normalText]}>${price}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    name: {fontSize:15, fontWeight: '600',color:'#000'},
    normalText:{
        color: '#000',
        fontSize:16,
        fontWeight: '200',
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
        backgroundColor: '#ccc',
        width: width * 0.35,
    },
});
export default ProductItemComponent;

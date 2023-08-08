/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Text,Image,StyleSheet,Dimensions, View } from 'react-native';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList,'CategoryScreen'>;
import SHOP_DATA from '../assets/data';
const {width} = Dimensions.get('screen')
function CategoryScreen({route}: Props) {
    const categoryId = route.params.id;
    const category = SHOP_DATA.find((item)=> item.id === categoryId);
    return (
        <View>
            <Text>Hello, this is Catrgory screen</Text>
            <FlatList
                data={category?.items}
                renderItem={({item})=> (
                    <View  style={{marginRight: width*.1, paddingBottom: 10,borderRadius: 5, backgroundColor: '#f5f5f5', width: width*.35}}>
                        <Image
                            // resizeMode="contain"
                            style={{height: 100,borderTopLeftRadius:10, width: '100%'}}
                            source={{
                                uri: item.imageUrl,
                                method: 'GET',
                            }}
                        />
                        <Text style={{fontSize:15, fontWeight: '600',color:'#000'}}>{item.name.slice(0,10)}...</Text>
                        <Text style={[styles.normalText, {color:'#000'}]}>${item.price}</Text>
                    </View>
                )}
                numColumns={2}
                // keyExtractor={(item)=> item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    normalText:{
        fontSize:16,
        fontWeight: '200',
    },
})
export default CategoryScreen;

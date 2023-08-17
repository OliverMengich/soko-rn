import React from 'react';
import { FlatList, Image, Pressable,Dimensions,useColorScheme, Platform, StyleSheet, Text, View } from 'react-native';
import CarouselComponent from '../Carousel.component';
import { COLORS } from '../../constants';
const {width} = Dimensions.get('window');
export interface CategoryType{
    id: number;
    name: string;
    imageUrl: string;
    featured: boolean;
    subCategories: string[];
}
interface Props{
    category: string;
    categoryData: CategoryType[];
}
function TabElementComponent({categoryData}:Props) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={[styles.container, {backgroundColor:isDarkMode?COLORS.darkBackground:'#fff'}]}>
            <View>
                <FlatList
                    data={categoryData}
                    renderItem={({item}) => (
                        <View style={styles.viewContainer}>
                            <Pressable android_ripple={{color: '#ccc'}} style={styles.itemStyle}>
                                <Image
                                    resizeMode="contain"
                                    style={styles.imageStyle}
                                    source={{
                                        uri: item.imageUrl,
                                    }}
                                />
                                <Text style={styles.titleText}>{item.name}</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                    numColumns={4}
                />
                <View style={styles.row}>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'},{ width: 20}]}>.</Text>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'}]}>.</Text>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'}]}>.</Text>
                </View>
            </View>
            <View style={{marginTop: 40, marginHorizontal: 20}}>
                <Text style={[styles.categoryHeaderText,isDarkMode? {fontSize: 20, color:'#fff'}:{fontSize: 20}]}>Hot Categories</Text>
            </View>
            <CarouselComponent/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notCurrentDiv:{
        padding: 5,
        marginHorizontal:4,
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor: '#000',
    },
    imageStyle:{
        alignSelf: 'center',
        height: 50,
        width:50,
    },
    titleText:{
        fontSize:15,
        fontWeight: '600',
        color:'#ff0a0a',
    },
    itemStyle:{
        marginRight: width * 0.1,
        backgroundColor: '#f5f5f5',
        padding: 10,borderRadius: 50,
        width: 100, height: 100,
        alignItems: 'center',
    },
    viewContainer: {
        borderRadius: 50,
        width: 100, height: 100,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    categoryHeaderText:{
        fontSize: 20,
        fontWeight:'bold', 
    }
});
export default TabElementComponent;
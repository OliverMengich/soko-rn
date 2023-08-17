import React from 'react';
import { View,Image,Dimensions, Pressable,Platform,StyleSheet, Text } from 'react-native';
type Props={
    isDarkMode: boolean;
    item: any
    handleNavigation: (id: string)=> void;
}
const {width} = Dimensions.get('screen');
function CategoryInfoComponent({isDarkMode,handleNavigation, item}: Props) {
    return (
        <View style={{ borderRadius: 50,marginHorizontal: 2,marginVertical: 5, width: 100, height: 100,overflow: Platform.OS ==='android'? 'hidden':'visible'}}>
            <Pressable onPress={()=>handleNavigation(item.id)} android_ripple={{color: '#ccc'}} style={[styles.categoryStyle, isDarkMode &&{borderColor:'#304d5d', backgroundColor: '#000'}]}>
                <Image
                    resizeMode="contain"
                    style={[styles.categoryImageStyle,isDarkMode &&{tintColor: '#fff'}]}
                    source={{
                        uri: item.imageUrl,
                        headers:{
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                        },
                    }}
                />
                <Text style={isDarkMode? {fontSize:15, fontWeight: '600',color:'#fff'}:{fontSize:15, fontWeight: '600',color:'#000'}}>{item.title}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    categoryImageStyle: { 
        alignSelf: 'center', 
        height: 50,
        width:50
    },
    categoryStyle: {
        marginRight: width * .1, 
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 50, 
        width: 100, height: 100, 
        alignItems: 'center',
    },
})
export default CategoryInfoComponent;
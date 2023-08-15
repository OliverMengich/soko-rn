/* eslint-disable prettier/prettier */
// import { useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {View,StyleSheet,Text, ImageBackground, Dimensions, Pressable, useWindowDimensions, PressableAndroidRippleConfig, StyleProp, TextStyle, ViewStyle} from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList,'ProductDetail'>;
import SHOP_DATA from '../assets/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RatingComponent from '../components/RatingComponent.component';
import { TabView,TabBar, SceneMap, NavigationState, Route, SceneRendererProps, TabBarIndicatorProps, TabBarItemProps} from 'react-native-tab-view';
import { Scene, Event } from 'react-native-tab-view/lib/typescript/src/types';
import ReviewsComponent from '../components/Reviews.component';
import ProductDescriptionComponent from '../components/ProductDescription.component';
const NewHeader = (name: string, imageUrl: string)=>{
    return (
        <View>
            <ImageBackground imageStyle={styles.headerImage} source={{uri: imageUrl}} >
                <View style={styles.row}>
                    <Icon name="chevron-left" style={styles.headerIconStyle} size={30} />
                    <Text style={styles.productNameStyle}>{name}</Text>
                    <Icon style={styles.headerIconStyle} name="dots-vertical" size={30} />
                </View>
            </ImageBackground>
        </View>
    );
};
const {width, height} = Dimensions.get('screen');

const renderTabBar = (props: React.JSX.IntrinsicAttributes & SceneRendererProps & { navigationState: NavigationState<Route>; scrollEnabled?: boolean | undefined; bounces?: boolean | undefined; activeColor?: string | undefined; inactiveColor?: string | undefined; pressColor?: string | undefined; pressOpacity?: number | undefined; getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined; getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined; getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined; getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined; renderLabel?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderIcon?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined; renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined; renderTabBarItem?: ((props: TabBarItemProps<Route> & { key: string; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined; onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined; onTabLongPress?: ((scene: Scene<Route>) => void) | undefined; tabStyle?: StyleProp<ViewStyle>; indicatorStyle?: StyleProp<ViewStyle>; indicatorContainerStyle?: StyleProp<ViewStyle>; labelStyle?: StyleProp<TextStyle>; contentContainerStyle?: StyleProp<ViewStyle>; style?: StyleProp<ViewStyle>; gap?: number | undefined; testID?: string | undefined; android_ripple?: PressableAndroidRippleConfig | undefined; }) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={{ backgroundColor: '#fff' }}
        activeColor="black"
        inactiveColor="black"
    />
);
const renderScene = SceneMap({
    first: ProductDescriptionComponent,
    second: ReviewsComponent,
});
function ProductDetail({navigation, route}: Props) {
    const productID = route.params.id;
    const product = SHOP_DATA.map((item)=> item.items).flat().find((item)=> item.id === productID);
    console.log(product);
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'DESCRIPTION' },
        { key: 'second', title: 'REVIEWS' },
    ]);
    useLayoutEffect(()=>{
        navigation.setOptions({
            header: ()=>NewHeader(product?.name ?? '', product?.imageUrl ?? ''),
        });
    });
    return (
       <View style={styles.container}>
            <Text style={styles.instockText}>In stock</Text>
            <View style={styles.rowEl}>
                <View>
                    <Text style={styles.boldText}>{product?.name}</Text>
                </View>
                <Icon name="heart-outline" color={'red'} size={30} />
            </View>
            <View style={styles.descriptionSection}>
                <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum animi porro omnis aut voluptatum facere debitis fuga suscipit ratione!</Text>
            </View>
            <View style={[styles.row,{paddingVertical: 5, paddingHorizontal: 20}]}>
                <Text style={[styles.boldText,{fontSize: 20}]}>${product?.price}</Text>
                <View>
                    <RatingComponent rating={5} />
                    <Text>3000 reviews</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                swipeEnabled={false}
            />
            <View style={styles.bottomSection}>
                <View style={styles.addQuantity}>
                    <Icon style={styles.iconStyle} name="minus" size={30} />
                    <Text style={styles.quantityText}>1</Text>
                    <Icon style={styles.iconStyle} name="plus" size={30} />
                </View>
                <Pressable style={styles.cartBtn} onPress={()=>{}}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </Pressable>
            </View>
       </View>
    );
}
const styles = StyleSheet.create({
    headerIconStyle: {color: '#fff',fontWeight: 'bold'},
    container: {
        flex: 1,
        position: 'relative',
        marginTop: height * 0.31,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    instockText:{
        backgroundColor: '#32CD32',
        color: '#fff',
        padding: 5,
        // borderRadius: 5,
        width: 100,
        marginHorizontal: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    productNameStyle:{fontWeight: '900', fontSize: 30, color: '#fff'},
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowEl:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    descriptionText:{
        color: 'black',
    },
    headerImage: {
        width: width,
        height: height * 0.35,
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
        justifyContent: 'center',
    },
    addQuantity:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '50%',
        justifyContent: 'space-around',
    },
    iconStyle:{
        backgroundColor: 'red',
        color:'#fff',
    },
    buttonText: {
        fontWeight: '900',
        color: '#fff',
        textTransform: 'uppercase',
    },
    quantityText: {
        fontWeight: '900',
        color: '#000',
        textTransform: 'uppercase',
        fontSize: 30,
    },
});
export default ProductDetail;

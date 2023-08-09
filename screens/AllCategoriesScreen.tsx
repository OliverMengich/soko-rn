/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text, StyleSheet,useWindowDimensions, Dimensions, FlatList, Image, Platform, Pressable, PressableAndroidRippleConfig, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SHOP_DATA from '../assets/data';
const {width} = Dimensions.get('window');
import { TabView,TabBar, SceneMap, NavigationState, Route, SceneRendererProps, TabBarIndicatorProps, TabBarItemProps } from 'react-native-tab-view';
import { Scene, Event } from 'react-native-tab-view/lib/typescript/src/types';
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const renderTabBar = (props: React.JSX.IntrinsicAttributes & SceneRendererProps & { navigationState: NavigationState<Route>; scrollEnabled?: boolean | undefined; bounces?: boolean | undefined; activeColor?: string | undefined; inactiveColor?: string | undefined; pressColor?: string | undefined; pressOpacity?: number | undefined; getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined; getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined; getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined; getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined; renderLabel?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderIcon?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined; renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined; renderTabBarItem?: ((props: TabBarItemProps<Route> & { key: string; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined; onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined; onTabLongPress?: ((scene: Scene<Route>) => void) | undefined; tabStyle?: StyleProp<ViewStyle>; indicatorStyle?: StyleProp<ViewStyle>; indicatorContainerStyle?: StyleProp<ViewStyle>; labelStyle?: StyleProp<TextStyle>; contentContainerStyle?: StyleProp<ViewStyle>; style?: StyleProp<ViewStyle>; gap?: number | undefined; testID?: string | undefined; android_ripple?: PressableAndroidRippleConfig | undefined; }) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={{ backgroundColor: '#f5f5f5' }}
        activeColor="black"
        inactiveColor="black"
    />
);
type Props = NativeStackScreenProps<RootStackParamList, 'AllCategoriesScreen'>;
const AllCategoriesTab = () => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={SHOP_DATA}
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
                                <Text style={styles.titleText}>{item.title}</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={4}
                    // horizontal={true}
                />
                <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[styles.notCurrentDiv,{ width: 20}]}>.</Text>
                    <Text style={styles.notCurrentDiv}>.</Text>
                    <Text style={styles.notCurrentDiv}>.</Text>
                </View>
            </View>
            <View style={{marginTop: 40, marginHorizontal: 20}}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Hot Categories</Text>
            </View>
        </View>
    );
};
const renderScene = SceneMap({
    first: AllCategoriesTab,
    second: SecondRoute,
    third: ThirdRoute,
});
function AllCategoriesScreen({navigation}: Props) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All Categories' },
        { key: 'second', title: 'Fashion' },
        { key: 'third', title: 'Electronics'},
    ]);

  return (
    <>
        <View style={styles.row}>
            <Icon color={'black'} name="chevron-left" style={styles.iconStyle} size={30} onPress={()=>navigation.goBack()} />
            <Text style={styles.boldText}>All Categories</Text>
            <Icon color={'black'} style={styles.iconStyle} name="magnify" size={30} />
        </View>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
            swipeEnabled={false}
        />
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: Platform.OS === 'android' ? 20 : 0,
    },
    notCurrentDiv:{
        padding: 5,
        marginHorizontal:4,
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor: '#000',
    },
    boldText:{
        fontWeight: '900',
        fontSize: 20,
        color: '#000',
        textTransform: 'uppercase',
    },
    imageStyle:{
        alignSelf: 'center',
        height: 50,
        width:50,
    },
    inputView:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.8,
        alignSelf: 'center',
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingRight: 20,
    },
    input: {
        borderRadius: 40,
        padding: 5,
        backgroundColor: '#fff',
        color: '#000',
        width: width * 0.7,
        paddingLeft: 20,
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
    iconStyle:{fontWeight: '900'},
});
export default AllCategoriesScreen;

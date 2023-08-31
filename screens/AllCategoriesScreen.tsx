/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text, StyleSheet,useWindowDimensions, useColorScheme, Dimensions, FlatList, Image, Platform, Pressable, PressableAndroidRippleConfig, StyleProp, TextStyle, ViewStyle, Animated } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SHOP_DATA from '../assets/data';
const {width} = Dimensions.get('window');
import { TabView,TabBar, SceneMap, NavigationState, Route, SceneRendererProps, TabBarIndicatorProps, TabBarItemProps } from 'react-native-tab-view';
import { Scene, Event } from 'react-native-tab-view/lib/typescript/src/types';
import TabElementComponent from '../components/Categories/TabElement.component';
import { CATEGORY, SUBCATEGORY } from '../assets/newData';
import { CategoryType } from '../components/Categories/TabElement.component';
import CategoryInfoComponent from '../components/Categories/CategoryInfo.component';
import { COLORS } from '../constants';



const generatedTabComponents = (tabData:CategoryType[], isDarkMode: boolean)=>{
    const tabComponents: {[key: string]: React.FC} = {
        first: ()=>AllCategoriesTab(isDarkMode),
    };
    tabData.forEach((tab: CategoryType,idx: number)=>{
        tabComponents[tab.name] = () => <TabElementComponent categoryData={CATEGORY} key={idx} category={tab.name}  />
    });
    return SceneMap(tabComponents);
}
type Props = NativeStackScreenProps<RootStackParamList, 'AllCategoriesScreen'>;
const AllCategoriesTab = (isDarkMode: boolean) => {
    console.log('ISDARKMODE PASSED VALUE: ',isDarkMode);
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={SHOP_DATA}
                    renderItem={({item}) => (
                        <CategoryInfoComponent
                            key={item.id}
                            item={item}
                            isDarkMode={isDarkMode}
                            handleNavigation={()=>{}}
                        />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={4}
                />
                <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'},{ width: 20}]}>.</Text>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'}]}>.</Text>
                    <Text style={[styles.notCurrentDiv,true&&{backgroundColor:'#fff'}]}>.</Text>
                </View>
            </View>
            <View style={{marginTop: 40, marginHorizontal: 20}}>
                <Text style={[styles.categoryHeaderText,isDarkMode? {fontSize: 20, color:'#fff'}:{color: '#000',fontSize: 20}]}>Hot Categories</Text>
            </View>
        </View>
    );
};
function AllCategoriesScreen({navigation}: Props) {
    const layout = useWindowDimensions();
    const renderTabBar = (props: React.JSX.IntrinsicAttributes & SceneRendererProps & { navigationState: NavigationState<Route>; scrollEnabled?: boolean | undefined; bounces?: boolean | undefined; activeColor?: string | undefined; inactiveColor?: string | undefined; pressColor?: string | undefined; pressOpacity?: number | undefined; getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined; getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined; getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined; getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined; renderLabel?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderIcon?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined; renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined; renderTabBarItem?: ((props: TabBarItemProps<Route> & { key: string; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined; onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined; onTabLongPress?: ((scene: Scene<Route>) => void) | undefined; tabStyle?: StyleProp<ViewStyle>; indicatorStyle?: StyleProp<ViewStyle>; indicatorContainerStyle?: StyleProp<ViewStyle>; labelStyle?: StyleProp<TextStyle>; contentContainerStyle?: StyleProp<ViewStyle>; style?: StyleProp<ViewStyle>; gap?: number | undefined; testID?: string | undefined; android_ripple?: PressableAndroidRippleConfig | undefined; }) => {
        console.log('PROPS TO RENDER TAB BAR: ',props.style)
        return(
            <TabBar
                {...props}
                indicatorStyle={isDarkMode?{backgroundColor: '#fff',}:{backgroundColor: COLORS.darkBackground}}
                style={{backgroundColor: isDarkMode?COLORS.darkBackground: '#f5f5f5',}}
                tabStyle={props.tabStyle}
                scrollEnabled={true}
                activeColor={isDarkMode?'#fff':'black'}
                inactiveColor={isDarkMode?'#fff':'black'}
            />
        )
    };
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All Categories' },
        ...CATEGORY.map((cat: CategoryType)=>({key: cat.name, title: cat.name}))
    ]);
    console.log(routes);
    const isDarkMode = useColorScheme() === 'dark';
    const renderScene = generatedTabComponents(CATEGORY, isDarkMode);
    return (
        <View style={[{flex:1, },isDarkMode&&{backgroundColor: '#0f172a'}]}>
            <View style={styles.row}>
                <Icon color={isDarkMode? '#fff':'black'} name="chevron-left" style={styles.iconStyle} size={30} onPress={()=>navigation.goBack()} />
                <Text style={[styles.boldText,isDarkMode?{color: '#fff'}:{color: '#000'}]}>All Categories</Text>
                <Icon color={isDarkMode? '#fff':'black'} style={styles.iconStyle} name="magnify" size={30} />
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                style={{backgroundColor: isDarkMode?'#0f172a':'#fff'}}
                swipeEnabled={false}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 15,
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
        width: 100, 
        height: 100,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    iconStyle:{fontWeight: '900'},
    categoryHeaderText:{
        fontSize: 20,
        fontWeight:'bold', 
    }
});
export default AllCategoriesScreen;

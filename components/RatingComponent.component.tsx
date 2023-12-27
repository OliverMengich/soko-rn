/* eslint-disable prettier/prettier */
type Props={
    rating: number
}
import { View, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function RatingComponent({rating}: Props) {
    const ratingArr = [1,4,5,7,9];
    // console.log(rating % 2 === 0);
    return (
        <View style={styles.container}>
            {
                ratingArr.slice(0,rating).map((_,i)=>{
                    return (
                        <Icon name="star" color="#E46B26" size={15} key={i} />
                    );
                })
            }
        {
            rating % 1 !== 0 ? (
                <View>
                    <Icon name="star-half-full" color="#E46B26" size={15} />
                    {
                        ratingArr.slice(rating + 1,ratingArr.length).map((_,i)=>{
                            return (
                                <Icon name="star-outline" color="#E46B26" size={15} key={i} />
                            );
                        })
                    }
                </View>
            ) : (
                ratingArr.slice(rating,ratingArr.length).map((_,i)=>{
                    console.log(rating);
                    return (
                        <Icon name="star-outline" color="#E46B26" size={15} key={i} />
                    );
                })
            )
        }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // marginHorizontal: 20,
    },
});
export default RatingComponent;

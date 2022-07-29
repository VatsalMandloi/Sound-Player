
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type iconProps={
    type: string,
}

export default function Icon ({type}:iconProps)  {
    return (
        <View style={styles.icon}>
         <AnimatedCircularProgress
                size={70}
                width={2}
                fill={80}
                rotation={0}
                 tintColor="white"
                backgroundColor="transparent">
                {(fill) => (<Text>{type}</Text>)}
            </AnimatedCircularProgress>  
        </View>
    )
};

const styles = StyleSheet.create({
    icon: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center",    
    },
});
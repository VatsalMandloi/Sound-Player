import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { soundExist } from './soundExist';
import { downloadSound } from './downloadSound';

type iconProps={
    type: string,
}


export default function Icon({ type }: iconProps) {

    const [progress, setProgress] = useState(60); 
   
    if (  soundExist(type)) {
        //file exist  setUri(function uri of file)

    } else {
        //file not exist  fire caching function retrun a progress and uri
            
    }
    
    return (
        <View style={styles.icon}>

            <AnimatedCircularProgress
                size={70}
                lineCap={'round'}
                width={2}
                fill={progress}
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


import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { soundExist } from './soundExist';
import { downloadSound } from './downloadSound';
import * as FileSystem from 'expo-file-system';
import data from '../data/data.json';

type iconProps={
    type: string,
}

export default function Icon({ type }: iconProps) {

    const [progress, setProgress] = useState(0); 

    const callback = (downloadProgress: { totalBytesWritten: number; totalBytesExpectedToWrite: number; }) => {
        const p =downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
       
        setProgress(p*100);
        console.log(progress)
        if (progress >= 1 || progress < 0) {
         // setProgress(60);
        }
      };
      
     

    const downloadSound = async() => {
       
            const downloadResumable = FileSystem.createDownloadResumable(
              'https://drive.google.com/uc?export=download&id=1H-y7CRcIcedFy-Q0E5NKhxERtPa22be-',
              FileSystem.documentDirectory + type,
              {},
              callback
            );
           
        
            try {
              const  uri  = await downloadResumable.downloadAsync();
             // setProgress(100)
              
              
            } catch (e) {
              console.error(e);
            }
         
    }
    
    // if (  soundExist(type)) {
    //     //file exist  setUri(function uri of file)
    //     console.log("if")
    //    //setProgress(100)
    // } else {
    //     //file not exist  fire caching function retrun a uri and update progress
    //     console.log("else")
    //     downloadSound();
    // }
  downloadSound();
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


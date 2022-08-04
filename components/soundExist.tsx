import * as FileSystem from 'expo-file-system';
export const soundExist =  (type: any) => {
       
    const getFileInfo =  FileSystem.getInfoAsync(FileSystem.documentDirectory + type, { size: true });
   //getFileInfo.exists
    if (!( getFileInfo)) {
        console.log("false");
        return true;
       
    } else {
    
        return false;

    }
 
};

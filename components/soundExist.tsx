import * as FileSystem from 'expo-file-system';
export const soundExist = (type: any) => {
       
    const getFileInfo =  FileSystem.getInfoAsync(FileSystem.documentDirectory + type, { size: true });
    if (!getFileInfo) {
        console.log("false");
        return true;
       
    } else {
        console.log(getFileInfo);
        return false;

    }
 
};

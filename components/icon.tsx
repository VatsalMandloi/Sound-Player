import { StyleSheet, Text, View } from 'react-native';

export default function Icon() {
    return (
        <View style={styles.icon}>
            <Text>i</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        margin: 4,
        padding: 8,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems:"center",
        borderColor: "white",
        borderRadius: 100,
        borderWidth:2,
    },
});
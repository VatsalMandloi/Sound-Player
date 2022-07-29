import { StyleSheet, Text, View } from 'react-native';
import Icon from './icon';

export default function Icons() {
    return (
        <View style={styles.iconContainer}>
            <Icon type={ "rain"} />
            <Icon type={ "mist"}/>
            <Icon type={ "thunder"}/>
            <Icon type={ "wind"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        marginBottom:25,
    },
});
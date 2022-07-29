import { StyleSheet, Text, View } from 'react-native';
import Icon from './icon';

export default function Icons() {
    return (
        <View style={styles.iconContainer}>
            <Icon />
            <Icon />
            <Icon />
            <Icon/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
      alignContent:"center"
    },
});
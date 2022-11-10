import { View, StyleSheet } from "react-native";

const FlexBoxLayout = () => {
    return (
        <View style={styles.container}>
            <View style={[ styles.box, styles.boxRed ]}></View>
            <View style={[ styles.box, styles.boxGreen ]}></View>
            <View style={[ styles.box, styles.boxBlue ]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%', // full height of screen
        flexDirection: 'column',
        justifyContent: 'space-between' // children are spaced out
    },
    box: {
        width: 100,
        height: 100
    },
    boxRed: {
        backgroundColor: 'red'
    },
    boxGreen: {
        backgroundColor: 'green'
    },
    boxBlue: {
        backgroundColor: 'blue'
    }
});
 
export default FlexBoxLayout;
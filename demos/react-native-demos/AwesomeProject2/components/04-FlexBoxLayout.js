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
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    box: {
        // decides the proportion in which the main axis dimensions should be set. Since all box elements have flex: 1, they will all have equal width.
        flex: 1,
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
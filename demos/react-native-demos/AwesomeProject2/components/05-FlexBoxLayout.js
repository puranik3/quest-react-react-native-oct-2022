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
        // flex decides the proportion in which the main axis dimensions should be set. So width will be in ratio 1:2:3
        height: 100
    },
    boxRed: {
        flex: 1,
        backgroundColor: 'red'
    },
    boxGreen: {
        flex: 2,
        backgroundColor: 'green'
    },
    boxBlue: {
        flex: 3,
        backgroundColor: 'blue'
    }
});
 
export default FlexBoxLayout;
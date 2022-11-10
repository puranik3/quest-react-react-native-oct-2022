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
        // main axis is horizontal
        flexDirection: 'row',
        
        // controls alignment along main axis
        justifyContent: 'flex-end', // 'space-around' | 'center' | 'space-between' | 'space-evenly',
        
        // controls alignment perpendicular to main axis (cross axis)
        
        // when using stretch, please remove the fixed boxes - because children have to flexibly stretch to fill the height of the parent
        alignItems: 'center' // 'stretch', | 'center' | 'flex-start' | 'flex-end'
    },
    box: {
        width: 100,
        // height: 100
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
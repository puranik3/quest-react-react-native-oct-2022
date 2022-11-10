import { View, StyleSheet } from "react-native";

const FlexBoxLayout = () => {
    /* flexbox ocntainer / parent (row direction) */
     {/* flex box parent (column direction)*/}
    return (
        <View style={styles.container}>
            <View style={[ styles.boxRed ]}></View>
            <View style={[ styles.boxGreen ]}>
                <View style={[ styles.vbox, styles.odd ]}></View>
                <View style={[ styles.vbox, styles.even ]}></View>
                <View style={[ styles.vbox, styles.odd, styles.third ]}>
                    <View style={[ styles.hbox1 ]}></View>
                    <View style={[ styles.hbox2 ]}></View>
                    <View style={[ styles.hbox3 ]}></View>
                </View>
                <View style={[ styles.vbox, styles.even ]}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row', // we want to arrange children horizontally
        alignItems: 'stretch'
    },
    boxRed: {
        flex: 1,
        backgroundColor: 'red',
        margin: 10
    },
    boxGreen: {
        flex: 2,
        flexDirection: 'column', // we want to arrange the children vertically
        backgroundColor: 'green'
    },
    vbox: {
        flex: 1, // equal height for all vbox elements
        margin: 10
    },
    odd: {
        backgroundColor: 'lightgray'
    },
    even: {
        backgroundColor: 'darkgray'
    },
    third: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    hbox1: {
        flex: 1,
        backgroundColor: 'blue'
    },
    hbox2: {
        flex: 2
    },
    hbox3: {
        flex: 1,
        backgroundColor: 'blue'
    }
});
 
export default FlexBoxLayout;
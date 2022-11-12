import { TouchableOpacity, Text, StyleSheet, Animated, Easing } from "react-native";

const Animations = () => {
    // animated width and height
    const aw = new Animated.Value( 200 );
    const ah = new Animated.Value( 100 );

    const animate = () => {
        Animated.sequence([
            Animated.timing( aw, {
                toValue: 220,
                duration: 200,
                easing: Easing.elastic(2)
            }),
            Animated.timing( aw, {
                toValue: 200,
                duration: 200,
                easing: Easing.elastic(2)
            })
        ]).start();
        Animated.sequence([
            Animated.timing( ah, {
                toValue: 110,
                duration: 200,
                easing: Easing.elastic(2)
            }),
            Animated.timing( ah, {
                toValue: 100,
                duration: 200,
                easing: Easing.elastic(2)
            })
        ]).start();
    };

    return (
        <TouchableOpacity onPress={animate} style={[ styles.touchable ]}>
            <Animated.View style={[ { ...styles.box, width: aw, height: ah } ]}>
                <Text style={[ styles.text ]}>
                    Animated view
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 100,
        padding: 30,
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
 
export default Animations;
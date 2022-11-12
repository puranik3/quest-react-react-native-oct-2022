import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Animations = () => {
    const animate = () => {
        alert( 'animation will be done' );
    };

    return (
        <TouchableOpacity onPress={animate} style={[ styles.touchable ]}>
            <View style={[ styles.box ]}>
                <Text style={[ styles.text ]}>Animated view</Text>
            </View>
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
    }
});
 
export default Animations;
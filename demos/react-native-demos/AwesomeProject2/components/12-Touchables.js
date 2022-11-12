import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

const randomHexColor = () => {
    return "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
};

const Touchables = () => {
    const [rippleColor, setRippleColor] = useState(randomHexColor());
    const [rippleOverflow, setRippleOverflow] = useState(false);

    const handlePress = () => {
        alert( 'view pressed' );
    };

    return (
        <View style={[ styles.touchablesContainer ]}>
            <TouchableOpacity onPress={handlePress} style={[ styles.touchable ]} activeOpacity={0.75}>
                <Text>Touchable opacity</Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={handlePress} style={[ styles.touchable ]} activeOpacity={0.5} underlayColor="lightblue">
                <Text>Touchable highlight</Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={[ styles.touchable ]}>
                    <Text>Touchable without feedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback 
                onPress={() => {
                    setRippleColor(randomHexColor());
                    setRippleOverflow(!rippleOverflow);
                }}
                background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
            >
            <View style={[ styles.touchable ]}>
                    <Text>Touchable without feedback</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    touchablesContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'crimson'
    },
    touchable: {
        margin: 20,
        padding: 20,
        fontSize: 20,
        alignItems: 'center',
        backgroundColor: 'lightgray',
    }
})
 
export default Touchables;
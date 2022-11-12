import { TouchableHighlight, StyleSheet } from "react-native";

const AppButton = ( { children, ...otherProps } ) => {
    return (
        <TouchableHighlight
            {...otherProps}
            style={[ styles.touchable ]}
            activeOpacity={0.5}
            underlayColor="rebeccapurple">
                {children}
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    touchable: {
        margin: 20,
        padding: 20,
        fontSize: 20,
        alignItems: 'center',
        backgroundColor: 'purple',
    }
});
 
export default AppButton;
import { TouchableHighlight, StyleSheet } from "react-native";

const AppButton = ( props ) => {
    const { children, ...otherProps } = props;

    return (
        <TouchableHighlight
            {...otherProps}
            style={[ styles.touchable ]}
            activeOpacity={0.5}
            underlayColor="blue">
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
        backgroundColor: 'lightblue',
    }
});
 
export default AppButton;
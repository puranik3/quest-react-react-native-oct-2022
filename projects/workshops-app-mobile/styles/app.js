import { StyleSheet } from "react-native"

const BannerStyles = StyleSheet.create({
    text: {
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center'
    }
});

const Utils = StyleSheet.create({
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
});

export {
    BannerStyles,
    Utils
};
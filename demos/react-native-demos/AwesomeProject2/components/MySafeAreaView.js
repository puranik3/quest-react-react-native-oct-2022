import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const MySafeAreaView = ( { children } ) => {
    return (
        <SafeAreaView style={[ styles.saview ]}>{children}</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    saview: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1, /* sa view is also full height */
        width: '100%' /* sa view is also full width */
    },
});
 
export default MySafeAreaView;
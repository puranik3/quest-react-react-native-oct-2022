import { Alert, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const MyAlert = () => {
    const showAlert = () => {

    };

    return (
        <View style={[ styles.container ]}>
            <TouchableHighlight onPress={showAlert} underlayColor="lightgray" style={[ styles.touchable ]}>
                <Text style={styles.text}>Show alert</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'purple'
    },
    touchable: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'darkgray'
    },
    text: {
        color: 'white'
    }
})
 
export default MyAlert;
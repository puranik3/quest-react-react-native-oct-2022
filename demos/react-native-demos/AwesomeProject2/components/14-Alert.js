import { useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const MyAlert = () => {
    const [ message, setMessage ] = useState( '' );

    const showAlert = () => {
        Alert.alert(
            'Confirm',
            'Are you sure you want to delete this item?',
            [
                {
                    text: 'Cancel',
                    onPress() {
                        setMessage( 'Item has been deleted' );
                    }
                },
                {
                    text: 'OK',
                    onPress() {
                        setMessage( 'Nothing to worry, the item is not deleted' );
                    }
                }
            ]
        )
    };

    return (
        <View style={[ styles.container ]}>
            <TouchableHighlight
                onPress={showAlert}
                underlayColor="lightgray"
                style={[ styles.touchable ]}>
                    <Text style={styles.text}>Show alert</Text>
            </TouchableHighlight>
            <Text style={[ styles.text ]}>{message}</Text>
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
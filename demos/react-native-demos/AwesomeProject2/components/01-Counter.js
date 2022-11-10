import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

// sfc
const Counter = () => {
    const [ counter, setCounter ] = useState( 0 );

    return (
        <View style={styles.container}>
            <Button title="-" onPress={() => setCounter( c => c - 1 )} />
            <Text style={styles.textLarge}>{counter}</Text>
            <Button title="+" onPress={() => setCounter( c => c + 1 )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row', // the children should appear next to each other
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textLarge: {
        fontSize: 30
    }
});

export default Counter;
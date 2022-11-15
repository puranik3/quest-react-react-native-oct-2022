import React, { useState } from "react"; // import from react
import { Window, App, StyleSheet, Button, Text } from "proton-native"; // import the proton-native components

const Application = () => {
    const [ count, setCount ] = useState( 0 );

    return (
        <App>
            <Window style={styles.window}>
                <Button
                    title="Click me"
                    onPress={() => setCount( c => c + 1 )}
                />
                <Text>You clicked {count} times</Text>
            </Window>
        </App>
    );
};

const styles = StyleSheet.create({
    window: {
        width: 300,
        height: 300,
        color: 'white',
        backgroundColor: "blue",
    },
});

export default Application;

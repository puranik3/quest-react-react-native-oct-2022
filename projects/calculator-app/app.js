import React, { useState } from "react"; // import from react
import { Window, App, StyleSheet } from "proton-native"; // import the proton-native components
import Calculator from "./Calculator";

const Application = () => {
    const [ count, setCount ] = useState( 0 );

    return (
        <App>
            <Window style={styles.window}>
                <Calculator />
            </Window>
        </App>
    );
};

const styles = StyleSheet.create({
    window: {
        width: 300,
        height: 450,
        padding: 20,
        color: 'white',
        backgroundColor: "#444",
    },
});

export default Application;

import { useState } from 'react';
import { StatusBar, Button } from "react-native";

const MyStatusBar = () => {
    const [ show, setShow ] = useState( true );

    const toggle = () => setShow( s => !s );

    return (
        <>
            <StatusBar
                barStyle="dark-content" // dark text (good if your app background is light)
                backgroundColor="purple" // only on Android
                hidden={show}
                translucent={false} // only on Android
            />

            <Button onPress={toggle} title="Toggle Status bar" />
        </>
    );
}
 
export default MyStatusBar;
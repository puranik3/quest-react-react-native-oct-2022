import { useState } from 'react';
import { View, TextInput, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

/**
 * SafeAreaView is only for ios (to avoid status bar area)
 * For Android we manage avoiding this area using StatusBar.currentHeight property (available only for Android) as margin top 
 */
const Inputs = () => {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const login = () => {
        alert( `Email = ${email} and Password = ${password}` ); // information dialog box shown
    };

    /* autoCapitalize = 'characters' | 'words' | 'none' */
    return (
        <SafeAreaView style={[ styles.saview ]}>
            <View style={[ styles.container ]}>
                <TextInput
                    style={[ styles.input ]}
                    placeholder="Email"
                    placeholderTextColor="#0000ff"
                    autoCapitalize="words"
                    onChangeText={( text ) => setEmail( text )}
                />
                <Text>{email}</Text>
                <TextInput
                    style={[ styles.input ]}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Text>{password}</Text>
                <TextInput
                    style={[ styles.input ]}
                    placeholder="mobile"
                    keyboardType="number-pad"
                />
                <Text>{password}</Text>
                <Button title="Login" onPress={login} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    saview: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1, /* sa view is also full height */
        width: '100%' /* sa view is also full width */
    },
    container: {
        width: '100%',
        paddingTop: 24,
        flexDirection: 'column', /* the inputs should come vertically below each other */
        flex: 1, /* container fills the full height */
        justifyContent: 'flex-start' /* children appear on the top (actually this is the default value and not needed to be set explicitly) */
    },
    input: {
        height: 40,
        padding: 5,
        margin: 15,
        borderColor: '#ccccff',
        borderWidth: 1
    }
});

export default Inputs;
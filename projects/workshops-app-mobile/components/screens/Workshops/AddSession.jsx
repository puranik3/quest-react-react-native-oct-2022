import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Divider } from 'react-native-paper';
import { BannerStyles, Utils } from '../../../styles/app';

const AddSession = () => {
    const [ name, setName ] = useState( '' );

    return (
        <View style={ [ Utils.container, styles.container ]}>
            <Text style={BannerStyles.text}>Add a session</Text>
            <Divider />
            <TextInput
                label="Session name"
                value={name}
                onChangeText={name => setName(name)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
 
export default AddSession;
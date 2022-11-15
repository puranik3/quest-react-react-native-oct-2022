import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Divider, SegmentedButtons, Button } from 'react-native-paper';
import { BannerStyles, Utils } from '../../../styles/app';
import { useWorkshop } from '../../../contexts/WorkshopContext';
import { addSession as addSessionSvc } from '../../../services/sessions';


// Reference: How to use react-hook-form for validations
// https://snack.expo.dev/@bluebill1049/react-hook-form-v7---controller
const AddSession = ( { navigation, route } ) => {
    const { workshopName, id } = useWorkshop();

    const [ sequenceId, setSequenceId ] = useState( '' );
    const [ name, setName ] = useState( '' );
    const [ speaker, setSpeaker ] = useState( '' );
    const [ duration, setDuration ] = useState( '' );
    const [ level, setLevel ] = useState( 'Basic' );
    const [ abstract, setAbstract ] = useState( '' );

    const addSession = async () => {
        // we need to do some kind of form validation ourselves or using a library like react-hook-form...

        // ...after validation
        const session = {
            workshopId: +id,
            upvoteCount: 0,
            sequenceId: +sequenceId.trim(),
            name: name.trim(),
            speaker: speaker.trim(),
            level: level.trim(),
            duration: +duration.trim(),
            abstract: abstract.trim()
        };

        try {
            const updatedSession = await addSessionSvc( session );
            navigation.navigate( 'sessions-list', {
                refresh: updatedSession
            });
        } catch( error ) {
            alert( error.message );
        }
    };

    return (
        <View style={ [ Utils.container, styles.container ]}>
            <Text style={BannerStyles.text}>Add a session</Text>
            <Divider />
            <TextInput
                label="Sequence ID"
                value={sequenceId}
                onChangeText={sequenceId => setSequenceId(sequenceId)}
                style={styles.input}
            />
            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                style={styles.input}
            />
            <TextInput
                label="Speaker"
                value={speaker}
                onChangeText={speaker => setSpeaker(speaker)}
                style={styles.input}
            />
            <TextInput
                label="Duration"
                value={duration}
                onChangeText={setDuration}
                style={styles.input}
            />
            <SegmentedButtons
                value={level}
                onValueChange={setLevel}
                buttons={[
                    {
                        value: 'Basic',
                        label: 'Basic',
                    },
                    {
                        value: 'Intermediate',
                        label: 'Intermediate',
                    },
                    {
                        value: 'Advanced',
                        label: 'Advanced',
                    }
                ]}
                style={styles.group}
            />
            <TextInput
                label="Abstract"
                value={abstract}
                onChangeText={setAbstract}
                style={styles.input}
            />
            <Button mode="contained" onPress={addSession}>
                Press me
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        marginVertical: 10
    }
});
 
export default AddSession;
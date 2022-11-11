import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MySafeAreaView from './MySafeAreaView';

import axios from 'axios';

// We can use either fetch() API or a third-party library like axios to fetch data
const WorkshopsList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ workshops, setWorkshops ] = useState( [] );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getWorkshops( page );
                    setWorkshops( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            }

            helper();
        },
        []
    );

    return (
        <MySafeAreaView>
            <View style={[ styles.container ]}>
                <Text style={[ styles.heading ]}>List of workshops</Text>
            </View>
        </MySafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        paddingVertical: 16,
        fontSize: 24
    }
});

export default WorkshopsList;
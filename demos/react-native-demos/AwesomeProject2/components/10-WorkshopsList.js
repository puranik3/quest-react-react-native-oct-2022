import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import MySafeAreaView from './MySafeAreaView';

import { getWorkshops } from '../services/workshops';

// Pull out item which is passed to the item renderer, but call the variable workshop
const renderWorkshopItem = ( { item : workshop } ) => {
    return (
        <View style={[ styles.workshopsListItem ]} key={workshop.id}>
            <Text style={[ styles.workshopName ]}>
                {workshop.name}
            </Text>
        </View>
    );
};

// We can use either fetch() API or a third-party library like axios to fetch data
const WorkshopsList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ workshops, setWorkshops ] = useState( [] );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getWorkshops();
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
                {
                    loading === true && (
                        <View style={[ styles.aiWrapper ]}>
                            <ActivityIndicator
                                size="large"
                                color="#0000ff"
                                style={[ styles.ai ]}
                            />
                        </View>
                    )
                }
                {
                    loading === false && error && (
                        <View style={[ styles.errorMessage ]}>
                            <Text style={[ styles.errorMessageText ]}>{error.message}</Text>
                        </View>
                    )
                }
                {
                    loading === false && !error && (
                        <FlatList
                            data={workshops}
                            renderItem={renderWorkshopItem}
                        />
                    )
                }
            </View>
        </MySafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10
    },
    heading: {
        paddingVertical: 16,
        fontSize: 24
    },
    aiWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ai: {
        width: 30
    },
    errorMessage: {
        padding: 20,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'crimson'
    },
    errorMessageText: {
        fontSize: 20,
        color: 'white'
    },
    workshopsListItem: {
        padding: 10,
        marginVertical: 2,
        backgroundColor: 'lightgray'
    },
    workshopName: {
        fontSize: 16
    }
});

export default WorkshopsList;
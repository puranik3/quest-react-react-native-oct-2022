import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useWorkshop } from '../../../contexts/WorkshopContext';
import { getWorkshopById } from '../../../services/workshops';
import { Utils } from '../../../styles/app';

const WorkshopDetails = () => {
    const { workshopName, id } = useWorkshop();

    const [ loading, setLoading ] = useState( true );
    const [ workshop, setWorkshop ] = useState( null );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getWorkshopById( id );
                    setWorkshop( data );
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
        <View style={[ styles.container ]}>
            <Text style={[ styles.heading ]}>{workshopName}</Text>
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
                    <View style={Utils.fullHeight}>
                        <Text>{workshop.location.city}, </Text>
                        <Text>{workshop.location.state}</Text>
                    </View>
                )
            }
        </View>
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
    workshopName: {
        fontSize: 16
    }
});
 
export default WorkshopDetails;
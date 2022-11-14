import { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableHighlight, StyleSheet } from 'react-native';
import { getWorkshops } from '../../../services/workshops';
import { ListHeaderStyles, ListItemStyles, Utils } from '../../../styles/app';

// Pull out item which is passed to the item renderer, but call the variable workshop
const WorkshopListItem = ( { item : workshop } ) => {
    return (
        <TouchableHighlight
            underlayColor="#4488ff"
            activeOpacity={0.8}
            onPress={() => {}}
        >
            <Text style={ListItemStyles.container}>
                <Image
                    source={{ uri: workshop.imageUrl }}
                    style={ListItemStyles.image}
                />
                <View style={ListItemStyles.text}>
                    <Text style={ListItemStyles.mainTitle}>
                        {workshop.name}
                    </Text>
                    <Text style={ListItemStyles.subTitle}>
                        {workshop.location.city},
                        {workshop.location.state}
                    </Text>
                </View>
            </Text>
        </TouchableHighlight>
    );
};

// We can use either fetch() API or a third-party library like axios to fetch data
const WorkshopsList = ( { route, navigation } ) => {
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
                    <View style={Utils.fullHeight}>
                        <FlatList
                            data={workshops}
                            renderItem={WorkshopListItem}
                            keyExtractor={workshop => workshop.id}
                        />
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


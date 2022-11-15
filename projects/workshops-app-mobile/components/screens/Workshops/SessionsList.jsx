import { useState, useEffect } from 'react';
import { View, Text,  FlatList, ActivityIndicator, TouchableHighlight, StyleSheet } from 'react-native';
import { useWorkshop } from '../../../contexts/WorkshopContext';
import { ListHeaderStyles, ListItemStyles, Utils } from '../../../styles/app';
import { getSessionsForWorkshop } from '../../../services/sessions';

const getLevelBadge = level => {
    const bg = {
        Basic: 'primary',
        Intermediate: 'info',
        Advanced: 'warning',
    };

    return bg[level];
};

const SessionsListItem = ( { item : session } ) => {
    return (
        <View>
            <Text style={ListItemStyles.container}>
                <View style={ListItemStyles.text}>
                    <Text style={ListItemStyles.mainTitle}>
                        {session.name}
                    </Text>
                    <Text style={{ ...ListItemStyles.subTitle, flexDirection: 'column' }}>
                        <Text style={styles[getLevelBadge( session.level )]}>{session.level}</Text>
                        <Text style={styles.votes}>
                            Votes = {session.upvoteCount}
                        </Text>
                    </Text>
                </View>
            </Text>
        </View>
    );
};


const SessionsList = ( { route } ) => {
    const { workshopName, id } = useWorkshop();
    const { refresh } = route.params;

    const [ loading, setLoading ] = useState( true );
    const [ sessions, setSessions ] = useState( [] );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getSessionsForWorkshop( id );
                    setSessions( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            }

            helper();
        },
        [ refresh ]
    );

    return (
        <View style={[ styles.container ]}>
            <Text style={[ styles.heading ]}>List of sessions</Text>
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
                            data={sessions}
                            renderItem={SessionsListItem}
                            keyExtractor={session => session.id}
                        />
                    </View>
                )
            }
        </View>
    );
}

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
    },
    primary: {
        color: 'green'
    },
    info: {
        color: 'yellow'
    },
    warning: {
        color: 'crimson'
    },
    votes: {
        marginLeft: 20
    }
});
 
export default SessionsList;
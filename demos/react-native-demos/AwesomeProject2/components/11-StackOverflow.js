import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import MySafeAreaView from './MySafeAreaView';

import { getQuestions } from '../services/stackoverflow';

// Pull out item which is passed to the item renderer, but call the variable question
const renderQuestion = ( { item : question } ) => {
    return (
        <View style={[ styles.question ]}>
            <Text style={[ styles.questionTitle ]}>
                {question.title}
            </Text>
        </View>
    );
};

const QuestionsList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ questions, setQuestions ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ refreshing, setRefreshing ] = useState( false );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getQuestions();
                    setQuestions( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                    setRefreshing( false );
                }
            }

            if( loading || refreshing ) { // when refreshing changes from false to true
                helper();
            }
        },
        [ refreshing ]
    );

    return (
        <MySafeAreaView>
            <View style={[ styles.container ]}>
                <Text style={[ styles.heading ]}>Latest questions</Text>
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
                            data={questions}
                            renderItem={renderQuestion}
                            keyExtractor={question => question.question_id}
                            refreshing={refreshing}
                            onRefresh={() => setRefreshing( true )}
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
    question: {
        padding: 10,
        marginVertical: 2,
        backgroundColor: 'lightgray'
    },
    questionTitle: {
        fontSize: 16
    }
});

export default QuestionsList;
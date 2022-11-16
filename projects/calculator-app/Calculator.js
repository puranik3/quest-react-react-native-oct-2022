import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'proton-native';

const Calculator = () => {
    const [ result, setResult ] = useState( 0 );
    const [ number1, setNumber1 ] = useState( 0 );
    const [ number2, setNumber2 ] = useState( 0 );
    const [ operator, setOperator ] = useState( '' );
    const [ step, setStep ] = useState( 1 ); 

    const reset = () => {
        setNumber1( 0 );
        setNumber2( 0 );
        setOperator( '' );
    };

    /**
     * Step 1: Select number1
     * Step 2: Select operator
     * Step 3: Select number2
     */
    const numberClick = ( number ) => {
        if( step === 1 ) {
            setNumber1( number );
            setResult( number );
            setStep( 2 );
        }

        if( step === 3 ) {
            setNumber2( number );
            setResult( `${number1} ${operator} ${number2}` );
        }
    };
    
    const operatorClick = ( operator ) => {
        setOperator( operator );
        setResult( `${number1} ${operator}` );
        setStep( 3 );
    };
    
    const evaluateClick = () => {
        const number1Int = parseInt( number1 );
        const number2Int = parseInt( number2 );

        switch( operator ) {
            case '+':
                setResult( number1Int + number2Int );
                break;
            case '-':
                setResult( number1Int - number2Int );
                break;
            case 'x':
                setResult( number1Int * number2Int );
                break;
            case '+':
                setResult( number1Int + number2Int );
                break;
        }

        reset();
    };
    
    const cancelClick = () => {
        setResult( '' );
        reset();
    };

    return (
        <View style={styles.calculator}>
            <Text>Simple Calculator</Text>
            <Text style={styles.resultBox}>{result}</Text>
            <View style={styles.buttonsGrid}>
                <View style={styles.buttonsRow}>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 7 )}
                    >
                        <Text>7</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 8 )}
                    >
                        <Text>8</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 9 )}
                    >
                        <Text>9</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => operatorClick( '+' )}
                    >
                        <Text>+</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonsRow}>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 4 )}
                    >
                        <Text>4</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 5 )}
                    >
                        <Text>5</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 6 )}
                    >
                        <Text>6</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => operatorClick( '-' )}
                    >
                        <Text>-</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonsRow}>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 1 )}
                    >
                        <Text>1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 2 )}
                    >
                        <Text>2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 3 )}
                    >
                        <Text>3</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => operatorClick( 'x' )}
                    >
                        <Text>x</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonsRow}>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnNumber }}
                        onPress={() => numberClick( 0 )}
                    >
                        <Text>0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => evaluateClick( '=' )}
                    >
                        <Text>=</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => cancelClick( 'C' )}
                    >
                        <Text>C</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#999"
                        style={{ ...styles.btn, ...styles.btnAction }}
                        onPress={() => operatorClick( '/' )}
                    >
                        <Text>/</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    calculator: {
        fontSize: 20
    },
    resultBox: {
        alignSelf: 'flex-end',
        padding: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderStyle: 'solid'
    },
    buttonsGrid: {
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnAction: {
        backgroundColor: 'gold',
        color: 'black'
    },
    btnNumber: {
        backgroundColor: '#777',
    }
});
 
export default Calculator;
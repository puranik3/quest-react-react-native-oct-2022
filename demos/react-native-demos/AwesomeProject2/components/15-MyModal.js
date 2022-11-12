import { useState } from 'react';
import { View, Text, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import MySafeAreaView from './MySafeAreaView';

const MyModal = () => {
    const [ visible, setVisible ] = useState( false );

    const showModal = () => setVisible( true );
    const hideModal = () => setVisible( false );

    return (
        <MySafeAreaView>
            <View style={[ styles.container ]}>
                <Modal
                    visible={visible}
                    animationType="slide"
                >
                    <MySafeAreaView>
                        <View style={[ styles.modal ]}>
                            <TouchableHighlight
                                style={[ styles.close ]}
                                underlayColor="darkgray"
                                onPress={hideModal}
                            >
                                <Text style={[ styles.closeText ]}>&times;</Text>
                            </TouchableHighlight>

                            <Text style={[ styles.text ]}>Text inside the modal</Text>

                            <TouchableHighlight
                                underlayColor="darkgray"
                                onPress={hideModal}
                                style={[ styles.touchable ]}
                            >
                                <Text style={[ styles.text ]}>Hide modal</Text>
                            </TouchableHighlight>
                        </View>
                    </MySafeAreaView>
                </Modal>

                <TouchableHighlight
                    underlayColor="darkgray"
                    onPress={showModal}
                    style={[ styles.touchable ]}
                >
                    <Text style={[ styles.text ]}>Open modal</Text>
                </TouchableHighlight>
            </View>
        </MySafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    touchable: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'darkgray'
    },
    modal: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    closeText: {
        fontSize: 30
    }
});
 
export default MyModal;
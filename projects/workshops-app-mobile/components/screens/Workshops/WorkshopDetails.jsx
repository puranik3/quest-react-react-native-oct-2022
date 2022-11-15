import { useState, useEffect } from "react";
import { ScrollView, View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Avatar, Card, Text as RNPText, Paragraph, Button } from "react-native-paper";
import { useWorkshop } from "../../../contexts/WorkshopContext";
import { getWorkshopById } from "../../../services/workshops";
import { Utils } from "../../../styles/app";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const WorkshopDetails = () => {
    const { workshopName, id } = useWorkshop();

    const [loading, setLoading] = useState(true);
    const [workshop, setWorkshop] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const helper = async () => {
            try {
                const data = await getWorkshopById(id);
                setWorkshop(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        helper();
    }, []);

    return (
        <View style={[styles.container]}>
            {loading === true && (
                <View style={[styles.aiWrapper]}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={[styles.ai]}
                    />
                </View>
            )}
            {loading === false && error && (
                <View style={[styles.errorMessage]}>
                    <Text style={[styles.errorMessageText]}>
                        {error.message}
                    </Text>
                </View>
            )}
            {loading === false && !error && (
                <ScrollView style={Utils.fullHeight}>
                    <Card>
                        <Card.Title
                            title={workshop.name}
                            subtitle={workshop.location.address + ', ' + workshop.location.city + ', '  + workshop.location.state}
                            left={LeftContent}
                        />
                        <Card.Cover
                            source={{ uri: workshop.imageUrl }}
                            style={{ width: '80%', padding: 20, marginVertical: 20, alignSelf: 'center' }}
                            resizeMode="contain"
                        />
                        <Card.Content>
                            <Paragraph>
                                <RNPText variant="bodyLarge">
                                    {workshop.description}
                                </RNPText>
                            </Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button buttonColor="crimson" textColor="white" onPress={() => alert( 'todo' )}>Delete</Button>
                            <Button onPress={() => alert( 'todo' )}>Edit</Button>
                        </Card.Actions>
                    </Card>
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        padding: 10,
    },
    heading: {
        paddingVertical: 16,
        fontSize: 24,
    },
    aiWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ai: {
        width: 30,
    },
    errorMessage: {
        padding: 20,
        borderRadius: 5,
        textAlign: "center",
        backgroundColor: "crimson",
    },
    errorMessageText: {
        fontSize: 20,
        color: "white",
    },
    workshopName: {
        fontSize: 16,
    },
});

export default WorkshopDetails;

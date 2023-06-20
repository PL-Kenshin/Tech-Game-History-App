import React from 'react';
import { Document, Page, Text, StyleSheet, View, Font } from '@react-pdf/renderer';
import font from '../fonts/Roboto-Regular.ttf'

Font.register({
    family: "Roboto",
    src:font
});

const MyDoc = (props) => {
    return (
        <Document>
            <Page size="A5" orientation="landscape" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text style={styles.container}>Congratulations</Text>
                    <Text style={styles.text}>You have finished the quiz with {props.points}/{props.maxPoints} points</Text>
                    <Text style={styles.title}>{props.quiz.topic}</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text>Your answers</Text>
                    <View style={styles.table}>
                        {props.answers.map((elem, key) => {
                            return (
                                <View key={key}>
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableColQuestion}><Text style={styles.tableCell}>{props.quiz.questions[key].question}</Text></View>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableCol}><Text style={styles.tableCell}>{elem.content}</Text></View>
                                        <View style={styles.tableCol}><Text style={styles.tableCell}>{elem.isCorrect ? "correct" : "wrong"}</Text></View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </Page>
        </Document>
    )
};


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        paddingVertical:25,

    },
    container: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 44,
    },
    title: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 14,
    },
    section: {
        margin: 10,
        padding: 10,
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBottom:5,
        fontFamily: "Roboto"
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        justifyContent:"center"
    },
    tableColQuestion: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        justifyContent:"center",
        backgroundColor:"#DDDDDD"
    },
    tableCell: {
        textAlign:"center",
        fontSize: 10,
        marginVertical:5
    }
});

export default MyDoc;
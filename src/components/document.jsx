import React from 'react';
import { Document, Page, Text, StyleSheet, View, } from '@react-pdf/renderer';


const MyDoc = (props) => {
    return (
    <Document>
        <Page size="A4" style={stylesPdf.page}>
            <View style={stylesPdf.section}>
                <Text style={stylesPdf.container}>Congratulations you have passed the quiz:</Text>
                <Text style={stylesPdf.container}>{props.quiz.topic}</Text>
            </View>
        </Page>
        <Page size="A4" style={stylesPdf.page}>
            <View style={stylesPdf.section}>
                {props.answers.map((elem, key) => {
                    return(<Text key={key}>{elem.content} | {elem.isCorrect.toString()}</Text>)
                })}
            </View>
        </Page>
    </Document>
    )
};


const stylesPdf = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
    container: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        //flexGrow: 1,
        fontWeight: "bold",
        fontSize: 50,
    },
    title: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontWeight: "bold",
        fontSize: 14,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default MyDoc;
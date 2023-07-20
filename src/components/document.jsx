import React, { useEffect } from 'react';
import { Document, Page, Text, StyleSheet, View, Font, Image } from '@react-pdf/renderer';
import font from '../fonts/Roboto-Regular.ttf'
import strings from '../locale/strings';

Font.register({
    family: "Roboto",
    src:font
});

const MyDoc = (props) => {

    strings.setLanguage(localStorage.getItem("language"))
    
    useEffect(() => {
        strings.setLanguage(props.language)
    },[props.language])

    return (
        <Document>
            <Page size="A5" orientation="landscape" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text style={styles.container}>{strings.congratulations}</Text>
                    <Text style={styles.text}>{strings.passed} {props.points}/{props.maxPoints} {strings.points}</Text>
                    <Text style={styles.title}>{props.quiz.topic}</Text>
                </View>
                <View style={styles.between}>
                        <Image src="/logo.png" style={{width:37, height:30}}></Image>
                        <Image src="/erasmus_plus.png" style={{width:141, height:30}}></Image>
                </View>
            </Page>
            <Page size="A4" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text>{strings.yourAnswers}</Text>
                    <View style={styles.table}>
                        {props.answers.map((elem, key) => {
                            return (
                                <View key={key}>
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableColQuestion}><Text style={styles.tableCell}>{elem[0]}</Text></View>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableCol}><Text style={styles.tableCell}>{elem[1].content}</Text></View>
                                        <View style={styles.tableCol}><Text style={styles.tableCell}>{elem[1].isCorrect ? strings.corrShort : strings.wrongShort}</Text></View>
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
        fontFamily: "Roboto"
    },
    container: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 44,
        fontFamily: "Roboto"
    },
    title: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Roboto"
    },
    text: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        fontWeight: "bold",
        fontSize: 14,
        fontFamily: "Roboto"
    },
    section: {
        margin: 10,
        padding: 10,
        flex:10,
        fontFamily: "Roboto"
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
        flexDirection: "row",
        fontFamily: "Roboto"
    },
    tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        justifyContent:"center",
        fontFamily: "Roboto"
    },
    tableColQuestion: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        justifyContent:"center",
        backgroundColor:"#DDDDDD",
        fontFamily: "Roboto"
    },
    tableCell: {
        textAlign:"center",
        fontSize: 10,
        marginVertical:5,
        fontFamily: "Roboto"
    },
    between: {
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        marginHorizontal:40,
        fontFamily: "Roboto"
    }
});

export default MyDoc;
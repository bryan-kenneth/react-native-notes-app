import * as React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { FAB, Snackbar } from 'react-native-paper';

const NoteEdit = ({ navigation, route }) => {

    const { callBack, oldNote } = route.params;
    
    const [note, setNote] = React.useState(oldNote ? oldNote : {title: '', content: ''})

    const handleChange = (b) => {
        return (text) => {
            const noteCopy = {...note}
            b ? noteCopy.title = text : noteCopy.content = text
            setNote(noteCopy)
        }
    }

    const [visible, setVisible] = React.useState(false)

    const showSnackBar = () => setVisible(true)

    const dismissSnackBar = () => setVisible(false)

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput
                    style={styles.title}
                    onChangeText={handleChange(true)}
                    value={note.title}
                    placeholder='What shall we title this note?'
                />
                <TextInput
                    style={styles.content}
                    onChangeText={handleChange(false)}
                    value={note.content}
                    placeholder='Enter your new note here!'
                    numberOfLines='8'
                    multiline={true}
                />
            </View>
            <FAB
                style={styles.fab}
                animated
                small
                color='grey'
                theme={{colors:{accent: 'darkseagreen'}}}
                icon='check'
                onPress={() => {
                    if (note.content.length == 0) {
                        showSnackBar()
                    } else {
                        callBack(note);
                        navigation.navigate('Notes');
                    }
                }}
            />
            <Snackbar
                visible={visible}
                onDismiss={dismissSnackBar}
                duration='3000'
                style={{marginRight: 75, margin: 15}}
            >
                Note cannot be empty.
            </Snackbar>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 75
    },
    title: {
        backgroundColor: 'wheat',
        padding: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: 'bold',
        fontSize: 16

    },
    content: {
        flex: 1,
        backgroundColor: 'lightgrey',
        padding: 5,
        borderColor: 'darkgrey',
        borderWidth: 1,
        borderRadius: 5
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default NoteEdit;
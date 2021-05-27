import * as React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import { FAB, IconButton} from 'react-native-paper';

const Notes = ({ navigation }) => {

    const [notes, setNotes] = React.useState(
        [{title: 'Note #1', content: 'example note'}, {title: 'Note #2', content: 'second example note'}]
    )

    const addNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    const editNote = (index) => {
        return (newNote) => {
            let notesCopy = [...notes]
            notesCopy[index] = newNote
            setNotes(notesCopy)
        }
    }

    const removeNote = (index) => {
        let notesCopy = [...notes]
        notesCopy.splice(index, 1)
        setNotes(notesCopy)
    }

    return (
        <View style={{flex: 1}}>
            {(notes.length == 0) && <Text style={{margin: 15, color: 'grey'}}>You don't have any notes!</Text>}
            <FlatList
                data={notes}
                renderItem={({ item, index }) => 
                    <View style={notes.length-1 == index ? [styles.note, {marginBottom: 10}] : styles.note}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                        <IconButton
                            style={styles.removeButton}
                            icon='delete'
                            onPress={() => removeNote(index)}
                        />
                        <IconButton
                            style={styles.editButton}
                            icon='pencil'
                            onPress={() => navigation.navigate('Note Edit', {callBack: editNote(index), oldText: item})}
                        />
                    </View>
                }
            />
            <FAB
                style={styles.fab}
                animated
                small
                color='grey'
                theme={{colors:{accent: 'darkseagreen'}}}
                icon='plus'
                onPress={() => navigation.navigate('Note Edit', {callBack: addNote})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        backgroundColor: 'lightgrey',
        padding: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'darkgrey',
        borderWidth: 1,
        borderRadius: 5
    },
    title: {
        paddingLeft: 5,
        fontWeight: 'bold',
        fontSize: 16,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'darkgrey',
        marginRight: 56,
        marginBottom: 8

    },
    content: {
        paddingLeft: 5
    },
    removeButton: {
        position: 'absolute',
        top: -1,
        right: 0,
        width: 25,
        height: 25,
        borderLeftWidth: 1,
        borderRadius: 0
    },
    editButton: {
        position: 'absolute',
        top: -1,
        right: 24,
        width: 30,
        height: 25,
        borderRightWidth: 1,
        borderRadius: 0
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})


export default Notes;
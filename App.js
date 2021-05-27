import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from './Screens/Notes';
import NoteEdit from './Screens/NoteEdit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={Notes}/>
        <Stack.Screen name="Note Edit" component={NoteEdit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

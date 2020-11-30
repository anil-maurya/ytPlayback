import React from 'react';
import {} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import PlaybackScreen from './PlaybackScreen';

const Stack = createStackNavigator();

function RootNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Playback" component={PlaybackScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
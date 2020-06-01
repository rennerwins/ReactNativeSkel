import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, PostScreen } from '.';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

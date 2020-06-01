import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'papayawhip',
          height: '100%',
        }}
      >
        <Text>Home Page</Text>
        <Button
          title="open post"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue',
          height: '100%',
        }}
      >
        <Text>Search Page</Text>
      </View>
    </SafeAreaView>
  );
};

const NotificationsScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'khaki',
          height: '100%',
        }}
      >
        <Text>Notification Page</Text>
      </View>
    </SafeAreaView>
  );
};

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'plum',
          height: '100%',
        }}
      >
        <Text>Chat Page</Text>
      </View>
    </SafeAreaView>
  );
};

const Home: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default Home;

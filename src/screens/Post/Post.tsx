import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Post: React.FC = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'FloralWhite',
          height: '100%',
        }}
      >
        <Text>Post Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Post;

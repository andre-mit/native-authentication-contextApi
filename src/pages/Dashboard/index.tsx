import React, { useContext } from 'react';

import { View, Button, StyleSheet } from 'react-native';

import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  function hadleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Button title="Sign out" color="black" onPress={hadleSignOut} />
    </View>
  );
}

export default Dashboard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
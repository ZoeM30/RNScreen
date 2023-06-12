import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type SignUpScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
  };
  const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = () => {
      // Handle sign up logic here
    };
  
    return (
      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} />
  
        <Text>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry />
  
        <Text>Confirm Password</Text>
        <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
  
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    );
  };

  export default SignUpScreen;


// const App: FunctionComponent = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Sign up</Text>
//         </View>
//     )
// }

// export default App;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: "center"
//     }
// })
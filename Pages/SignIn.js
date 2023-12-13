import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TextInput, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/admins/login', {
        admin_correo: email,
        admin_contrasena: password,
      });

      if (response.data.code === 200) {
        console.log('Login successful');
        
        // Store the token in AsyncStorage
        await AsyncStorage.setItem('token', response.data.message);

        // Retrieve the token key
        const tokenKey = 'token';

        // Get the token from AsyncStorage
        const storedToken = await AsyncStorage.getItem(tokenKey);

        console.log('Retrieved Token:', storedToken);

        navigation.navigate('HomePage');
      } else {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'WARNING',
          textBody: 'Login failed. Please check your credentials.',
        });
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data, '1');
        // console.log(error.response.status, '2');
        // console.log(error.response.headers, '3');

      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#4B1400' barStyle='light-content' />

      <View>
        <AlertNotificationRoot />
      </View>

      <View style={styles.header}>
        <Image
          source={require('../assets/img/signinimg.jpg')}
          style={styles.logo}
          resizeMode='stretch'
        />
      </View>

      <View style={styles.MidleContent}>
        <View style={styles.btncontainer}>
          <TextInput
            style={styles.TextInput}
            placeholder='  Email'
            placeholderTextColor='#fff'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder='  Password'
            placeholderTextColor='#fff'
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

      </View>

      <View style={styles.btncontainer}>
        <Pressable style={styles.buttonText} onPress={handleSignIn}>
          <Text style={styles.Text}>Sign In</Text>
        </Pressable>

        <View style={styles.bottomText}>
          <Text style={{ color: '#fff',fontWeight:'500',fontSize:15 }}>Don't Have An Account?
            <TouchableOpacity onPress={() => { navigation.navigate('HomePage') }}>
              <Text style={{
                color: '#000',
                fontWeight:'500',
                fontSize:15 
              }}>Login here</Text>
            </TouchableOpacity>
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  header: {
    flex: 3.5,
    alignItems: 'center',
  },
  MidleContent: {
    flex: 1.5,
  },
  btncontainer: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: '#3C4043',
    height: 50,
    width: 300,
    borderRadius: 5,
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  buttonText: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5C123',
  },
  Text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  logo: {
    // Your logo styles here
  },
  bottomText: {
    flex: 1,
    flexDirection: 'row',
  }
});




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, StatusBar, TextInput, Pressable } from 'react-native';
// import axios from 'axios';

// export default function SignIn({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       let response = await axios.post('http://10.0.2.2:3000/admins/login', {
//         admin_correo: "admin",
//         admin_contrasena: "admin",
//       })
//       console.log(response.data);

//       if (response.data.success) {
//         navigation.navigate('HomePage');
//       } else {

//         console.log('Login failed');
//       }

//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data, "1");
//         console.log(error.response.status, "2");
//         console.log(error.response.headers, "3");
//       }
//     }
//   };


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, StatusBar, TextInput, Pressable, Alert } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// export default function SignIn({ navigation }) {
//   // const correctEmail = 'hello@gmail.com';
//   // const correctPassword = '111222';

//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleSignIn = () => {
//   //   if (email === correctEmail && password === correctPassword) {
//   //     navigation.navigate('ComingSoon');
//   //   } else {
//   //     Alert.alert('Incorrect Input', 'Please check your email and password and try again.');
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#281400" barStyle="light-content" />

//       <View style={styles.header}>
//         <Animatable.Image
//           animation="bounceIn"
//           duraton="1800"
//           source={require('../assets/img/signinimg.jpg')}
//           style={styles.logo}
//           resizeMode="stretch"
//         />
//       </View>

//       <Animatable.View style={styles.MidleContent} animation="fadeInUpBig">
//         <View style={styles.btncontainer}>
//           <View>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="  Email"
//               placeholderTextColor="#fff"
//               // onChangeText={(text) => setEmail(text)}
//               value={email}
//               color="#fff"
//             />
//           </View>
//           <View>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="  Password"
//               placeholderTextColor="#fff"
//               secureTextEntry
//               // onChangeText={(text) => setPassword(text)}
//               value={password}
//               color="#fff"
//             />
//           </View>
//         </View>
//       </Animatable.View>

//       <View style={styles.btncontainer}>
//         <Pressable style={styles.buttonText} onPress={handleSignIn}>
//           <Text style={styles.Text}>
//             <Text>Sign In</Text>
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#BDBDBD'
//     },
//     errorMessage: {
//         color: 'red',
//         marginTop: 10,
//         textAlign: 'center',
//       },
//     header: {
//         flex: 3.5,
//         alignItems: 'center',

//     },
//     MidleContent: {
//         flex: 1.5,

//     },
//     btncontainer: {
//         flex: 1,
//         gap: 10,
//         alignItems: 'center',

//     },
//     btnarea: {
//         flex: 1,
//         alignItems: 'center',

//     },
//     TextInput: {
//         backgroundColor: '#3C4043',
//         height: 50,
//         width: 300,
//         borderRadius: 5,
//         fontSize: 20,
//         color:'#fff'
//     },
//     buttonText: {
//         width: 200,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: '#E5C123',
//     },
//     Text: {
//         fontWeight: '600',
//         fontSize: 20,
//         color: "#000",
//     },
//     buttonText: {
//         width: 200,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: '#E5C123',
//     },
// });
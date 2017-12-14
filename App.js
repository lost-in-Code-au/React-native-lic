import React from 'react'
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  }
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
})

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


// //////// HELLO WORLD APP //////////
// import React from 'react'
// import {
//   StyleSheet,
//   AppRegistry,
//   View,
//   Text,
//   StatusBar
// } from 'react-native'
//
// import {
//   StackNavigator,
// } from 'react-navigation';
//
// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// })
//
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   }
//   render() {
//     const { navigate } = this.props.navigation
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', { name: 'Jane' })
//         }
//       />
//     )
//   }
// }
// export default HomeScreen
//
// // class App extends React.Component {
//
//   render() {
//     return (
//       <View style={styles.viewBackground}>
//       <StatusBar hidden={false} />
//         <Text style={styles.defaultText}>
//           Hello james
//         </Text>
//         <Text style={styles.defaultText}>
//           Hello billy
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   defaultText: {
//     fontSize: 22
//   },
//   viewBackground: {
//     backgroundColor: '#444'
//   }
// })

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// export default class App extends Component<{}> {
//   render() {
//
//
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hello World
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

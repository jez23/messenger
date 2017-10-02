import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'

class HomeScreen extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
          <View style={styles.container}>
            <Text style={styles.heroText}>Welcome to Messenger</Text>
            <Button title="Log In" onPress={() => navigate('Login')} />
            <Button title="Register" onPress={() => navigate('Register')} />
          </View>
        )
      }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 50
    }
  })

  HomeScreen.navigationOptions = {
    title: 'Messenger'
  }  
    
export default HomeScreen
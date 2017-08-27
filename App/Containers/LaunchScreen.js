import React, { Component } from 'react'
import { View, Button } from 'react-native'
// import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.navigate = this.props.navigation.navigate
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Button title={'Go To Music View'} onPress={() => this.navigate('MusicScreen')} />
      </View>
    )
  }
}

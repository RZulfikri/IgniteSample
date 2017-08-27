import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import MusicAction from '../Redux/MusicRedux'
// Styles
import styles from './Styles/MusicScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

class MusicScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      music: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Trucker Radio',
  });

  componentDidMount () {
    this.props.getMusic()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.music.payload) {
      Reactotron.log(nextProps.music.payload)
      this.setState({music: nextProps.music.payload})
    }
  }

  getTime (time) {
    let minute = Math.floor(time / 60).toString()
    let second = (time - minute * 60).toString()
    Reactotron.log(second)
    if (minute.length === 1) {
      minute = '0' + minute
    }
    if (second.length === 1) {
      second = '0' + second
    }

    return minute + ':' + second
  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.containerCover}>
          <Image source={{uri: this.state.music.cover}} style={styles.imageCover} />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerInfoItem} >
            <Text style={styles.textTitle}>{this.state.music.title || '-'}</Text>
            <Text style={styles.textArtist}>{this.state.music.artist || '-'}</Text>
          </View>
        </View>
        <View style={styles.containerProgress}>
          <View style={styles.containerProgressTime}>
            <Text>{this.getTime(0)}</Text>
            <Text>{this.getTime(this.state.music.duration || 0)}</Text>
          </View>
          <View style={styles.containerProgressBar}>
            <View style={styles.progressBar} />
          </View>
        </View>
        <View style={styles.containerAction}>
          <View style={styles.containerActionItem} />
          <View style={styles.containerActionItem}>
            <TouchableOpacity>
              <Icon
                name={'step-backward'}
                style={styles.iconFowardBackward}
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerActionItem} >
            <TouchableOpacity>
              <Icon
                name={'play'}
                style={styles.iconPlay}
                size={30}
                color={'gray'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerActionItem}>
            <TouchableOpacity>
              <Icon
                name={'step-forward'}
                style={styles.iconFowardBackward}
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.containerActionItem, styles.row]}>
            <TouchableOpacity onPress={this.props.likeMusic}>
              <Icon
                name={'thumbs-o-up'}
                style={styles.iconLike}
                size={18}
                color={this.state.music.is_liked ? 'blue' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{this.state.music.likes || 0}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMusic: () => dispatch(MusicAction.getMusicRequest()),
    likeMusic: () => dispatch(MusicAction.likeMusic())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicScreen)

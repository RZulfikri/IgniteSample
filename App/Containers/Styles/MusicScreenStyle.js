import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: 20,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white'
  },
  containerCover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenWidth * 0.7
  },
  containerInfo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInfoItem: {
    width: Metrics.screenWidth * 0.7
  },
  containerProgress: {
    padding: 10
  },
  containerProgressTime: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerProgressBar: {
    flexDirection: 'row'
  },
  containerAction: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  containerActionItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  imageCover: {
    width: Metrics.screenWidth * 0.7,
    height: Metrics.screenWidth * 0.7
  },

  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textArtist: {
    textAlign: 'center'
  },

  iconForwardBackward: {

  },
  iconPlay: {

  },
  iconLike: {

  },

  row: {
    flexDirection: 'row'
  },

  progressBarNotFill: {
    height: 2,
    flex: 1,
    backgroundColor: 'gray'
  },
  progressBarFill: {
    height: 2,
    flex: 1,
    backgroundColor: 'blue'
  }
})

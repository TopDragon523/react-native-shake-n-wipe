import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  containerInner: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
    flex: 1,
    minHeight: scale(610),
    marginHorizontal: scale(27)
  },
  loginMessageWrapper: {
    marginBottom: scale(30)
  },
  loginMessage: {
    fontSize: scale(16),
    fontWeight: 'bold'
  },
  inputForm: {
    // marginTop: scale(86)
  },
  divider: {
    height: scale(19)
  },
  noteWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(47)
  },
  continueMessageWrapper: {
    marginTop: scale(20)
  },
  noteText: {
    fontFamily: Fonts.EpilogueBold,
    fontSize: 15,
    color: Colors.primaryColor
  },
  loginWrapper: {
    width: '100%',
    marginTop: scale(26),
    marginBottom: scale(46)
  },
  forgetWrapper: {
    // marginTop: scale(24),
    width: '100%',
    alignItems: 'center',
  }
});

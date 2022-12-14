import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  logo: {
    // width: 200,
    color: Colors.primaryColor,
    fontSize: scale(50),
    fontWeight: 'bold'
  }
});

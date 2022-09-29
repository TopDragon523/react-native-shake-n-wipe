import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';
import { textScale } from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(40),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: scale(1),
    // borderRadius: scale(25),
    borderBottomColor:Colors.greyColor,
    // padding: scale(10)
  },
  icon: {
    width: scale(18),
  },
  authInput: {
    color: Colors.textInputColor,
    fontFamily: Fonts.EpilogueBold,
    fontWeight: '400',
    fontSize: textScale(14),
    height: scale(45),
    flex: 1,
    padding: 0,
    margin: 0,
    // marginLeft: scale(19),
    marginRight: scale(8),
  }
});

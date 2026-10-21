import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { CAMPUS } from '@/constants/colors';

// Minimal decorative paper texture. Never intercepts taps.
export default function CampusBackground() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg height="100%" width="100%" preserveAspectRatio="xMidYMin slice" viewBox="0 0 390 850">
        <Rect width="390" height="850" fill={CAMPUS.bg} />
        <Circle cx="378" cy="32" r="150" fill="#F0EBFF" />
        <Circle cx="-38" cy="628" r="115" fill="#FFF1E6" />
        <Path d="M265 0L390 128M287 0L390 105M309 0L390 81" stroke="#E4DCFF" strokeWidth="1" />
      </Svg>
    </View>
  );
}

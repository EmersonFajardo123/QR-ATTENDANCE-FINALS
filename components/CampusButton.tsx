import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CAMPUS } from '@/constants/colors';

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
};

export default function CampusButton({ title, icon, onPress, variant = 'secondary', disabled = false }: Props) {
  const primary = variant === 'primary';
  const danger = variant === 'danger';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [styles.base, primary ? styles.primary : styles.secondary, danger && styles.danger, pressed && styles.pressed, disabled && styles.disabled]}
    >
      <View style={[styles.icon, primary && styles.primaryIcon, danger && styles.dangerIcon]}>
        <Ionicons name={icon} size={21} color={primary ? '#FFFFFF' : danger ? CAMPUS.danger : CAMPUS.primary} />
      </View>
      <Text style={[styles.title, primary && styles.primaryTitle, danger && styles.dangerTitle]}>{title}</Text>
      <Ionicons name={primary ? 'arrow-forward' : 'arrow-up-outline'} size={19} color={primary ? '#FFFFFF' : danger ? CAMPUS.danger : CAMPUS.textMuted} style={!primary ? { transform: [{ rotate: '45deg' }] } : undefined} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  base: { flexDirection: 'row', alignItems: 'center', minHeight: 64, paddingHorizontal: 16, gap: 13, borderRadius: 20 },
  primary: { backgroundColor: CAMPUS.primary, shadowColor: CAMPUS.primary, shadowOpacity: 0.21, shadowRadius: 14, shadowOffset: { width: 0, height: 7 }, elevation: 3 },
  secondary: { backgroundColor: '#FFFFFF', borderColor: CAMPUS.border, borderWidth: 1 },
  danger: { backgroundColor: CAMPUS.dangerBg, borderColor: CAMPUS.dangerBorder },
  pressed: { opacity: 0.84, transform: [{ scale: 0.985 }] },
  disabled: { opacity: 0.45 },
  icon: { width: 39, height: 39, borderRadius: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F1EDFF' },
  primaryIcon: { backgroundColor: 'rgba(255,255,255,0.18)' },
  dangerIcon: { backgroundColor: '#FFE0E5' },
  title: { color: CAMPUS.text, fontSize: 15, fontWeight: '700', flex: 1 },
  primaryTitle: { color: '#FFFFFF' },
  dangerTitle: { color: CAMPUS.danger },
});

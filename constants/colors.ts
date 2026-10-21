import { Platform } from 'react-native';

// Original app colors (unchanged) -- used by the existing screens.
export const COLORS = {
  primary: '#2E7D5B',
  background: '#F7F6F2',
  card: '#FFFFFF',
  textPrimary: '#14181F',
  textSecondary: '#5D6B7A',
  textOnPrimary: '#FFFFFF',
  surface: '#EFF3F0',
  border: '#DADFE3',
  shadow: '#14181F',
  warning: '#C97A2B',
  success: '#2E7D5B',
  danger: '#B3261E',
} as const;

// "Modern Campus Tech" palette: deep navy, electric blue + cyan accents,
// glass-style surfaces. Use this on screens that get the new look.
export const CAMPUS = {
  // Paper & ink: a completely new light editorial attendance UI.
  bg: '#F7F5F1',
  bgDeep: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceStrong: '#F0EBE5',
  inputBg: '#F4F1EC',
  border: '#E6E1DA',
  primary: '#6246EA',
  primaryDeep: '#4933B7',
  accent: '#6246EA',
  mint: '#148C71',
  text: '#1C1B27',
  textMuted: '#666575',
  textFaint: '#9995A3',
  danger: '#CD4258',
  dangerBg: '#FFF0F1',
  dangerBorder: '#F6CBD1',
  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  }) as string,
} as const;

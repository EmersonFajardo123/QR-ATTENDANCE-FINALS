import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import CampusBackground from '@/components/CampusBackground';
import { CAMPUS } from '@/constants/colors';

// Dashboard redesign only. All navigation routes are unchanged.
export default function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <CampusBackground />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View style={styles.logo}><Ionicons name="grid" size={20} color="#FFFFFF" /></View>
          <View style={styles.topTitleWrap}><Text style={styles.brand}>presence<Text style={styles.brandDot}>.</Text></Text><Text style={styles.brandSub}>SMART ATTENDANCE</Text></View>
          <Pressable style={styles.profileIcon} onPress={() => router.push('/profile')} accessibilityLabel="Open profile"><Ionicons name="person-outline" size={21} color={CAMPUS.text} /></Pressable>
        </View>
        <View style={styles.welcome}><Text style={styles.kicker}>YOUR ATTENDANCE HUB  /  01</Text><Text style={styles.heading}>Show up.{"\n"}<Text style={styles.headingAccent}>Stand out.</Text></Text><Text style={styles.subtitle}>A simpler way to mark your presence, track your activity, and stay connected.</Text></View>
        <Pressable style={styles.scanCard} onPress={() => router.push('/scan')} accessibilityRole="button" accessibilityLabel="Scan QR Code">
          <View style={styles.cardTop}><View style={styles.livePill}><View style={styles.liveDot}/><Text style={styles.liveText}>READY TO SCAN</Text></View><Ionicons name="arrow-up-outline" size={23} color="#FFFFFF" style={{ transform: [{ rotate: '45deg' }] }} /></View>
          <View style={styles.artRow}><View style={styles.cardCopy}><Text style={styles.scanHeading}>Scan &{"\n"}check in.</Text><Text style={styles.scanSubtitle}>One quick scan is all it takes.</Text></View><View style={styles.qrArt}><Svg width="118" height="118" viewBox="0 0 118 118"><Rect x="0" y="0" width="118" height="118" rx="20" fill="#FFFFFF"/><Path d="M18 43V18H43M75 18H100V43M100 75V100H75M43 100H18V75" fill="none" stroke="#6246EA" strokeWidth="8" strokeLinecap="round"/><Rect x="29" y="29" width="18" height="18" rx="3" fill="#6246EA"/><Rect x="70" y="29" width="18" height="18" rx="3" fill="#6246EA"/><Rect x="29" y="70" width="18" height="18" rx="3" fill="#6246EA"/><Path d="M63 63h12v12H63zM79 79h12v12H79zM62 84h9" stroke="#6246EA" strokeWidth="6" fill="none"/></Svg></View></View>
          <View style={styles.scanAction}><Ionicons name="scan-outline" size={20} color={CAMPUS.primary}/><Text style={styles.scanActionText}>OPEN QR SCANNER</Text><Ionicons name="arrow-forward" size={20} color={CAMPUS.primary}/></View>
        </Pressable>
        <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Explore</Text><Text style={styles.sectionCaption}>QUICK SHORTCUTS</Text></View>
        <View style={styles.tileRow}>
          <Pressable style={[styles.tile, styles.historyTile]} onPress={() => router.push('/history')} accessibilityRole="button"><View style={styles.tileIcon}><Ionicons name="calendar-outline" size={25} color="#A24630" /></View><Ionicons name="arrow-forward" size={17} color="#A24630" style={styles.tileArrow}/><Text style={styles.tileTitle}>My history</Text><Text style={styles.tileDesc}>Review your past check-ins</Text></Pressable>
          <Pressable style={[styles.tile, styles.profileTile]} onPress={() => router.push('/profile')} accessibilityRole="button"><View style={[styles.tileIcon, { backgroundColor: '#E2F2EC' }]}><Ionicons name="person-outline" size={25} color="#227E60" /></View><Ionicons name="arrow-forward" size={17} color="#227E60" style={styles.tileArrow}/><Text style={styles.tileTitle}>My profile</Text><Text style={styles.tileDesc}>Account & personal details</Text></Pressable>
        </View>
        <View style={styles.footer}><Ionicons name="shield-checkmark-outline" size={16} color={CAMPUS.textMuted}/><Text style={styles.footerText}>Secure, easy and contactless attendance</Text></View>
        <Text style={styles.credit}>QR Attendance · Developed by Emerson Fajardo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
 root: { flex: 1, backgroundColor: CAMPUS.bg },
 content: { width: '100%', maxWidth: 550, alignSelf: 'center', paddingHorizontal: 22, paddingTop: 18, paddingBottom: 45 },
 topbar: { flexDirection: 'row', alignItems: 'center', marginBottom: 38 },
 logo: { width: 41, height: 41, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: CAMPUS.primary, marginRight: 10 },
 topTitleWrap: { flex: 1 }, brand: { fontSize: 23, fontWeight: '900', letterSpacing: -1.3, color: CAMPUS.text }, brandDot: { color: CAMPUS.primary }, brandSub: { fontSize: 8, letterSpacing: 2, fontWeight: '800', color: CAMPUS.textFaint, marginTop: 2 },
 profileIcon: { width: 43, height: 43, borderRadius: 15, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: CAMPUS.border, alignItems: 'center', justifyContent: 'center' },
 welcome: { marginBottom: 26 }, kicker: { fontSize: 10, fontWeight: '900', color: CAMPUS.primary, letterSpacing: 2, marginBottom: 13 }, heading: { color: CAMPUS.text, fontWeight: '900', fontSize: 43, letterSpacing: -2, lineHeight: 48 }, headingAccent: { color: CAMPUS.primary }, subtitle: { fontSize: 14, lineHeight: 23, maxWidth: 360, color: CAMPUS.textMuted, marginTop: 13 },
 scanCard: { borderRadius: 29, padding: 21, backgroundColor: CAMPUS.primary, marginBottom: 31, overflow: 'hidden' }, cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, livePill: { backgroundColor: 'rgba(255,255,255,.17)', paddingHorizontal: 11, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', gap: 7, borderRadius: 50 }, liveDot: { width: 7, height: 7, borderRadius: 5, backgroundColor: '#C4FFDC' }, liveText: { fontSize: 9, fontWeight: '900', color: '#FFFFFF', letterSpacing: 1.25 },
 artRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 31, gap: 4 }, cardCopy: { flex: 1 }, scanHeading: { color: '#FFFFFF', fontSize: 32, fontWeight: '900', letterSpacing: -1, lineHeight: 36 }, scanSubtitle: { color: '#E7E1FF', fontSize: 12, lineHeight: 18, marginTop: 11, maxWidth: 155 }, qrArt: { transform: [{ rotate: '8deg' }] }, scanAction: { borderRadius: 15, backgroundColor: '#FFFFFF', minHeight: 53, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15, gap: 11 }, scanActionText: { color: CAMPUS.primary, flex: 1, fontSize: 12, fontWeight: '900', letterSpacing: 1.05 },
 sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }, sectionTitle: { fontSize: 23, fontWeight: '900', color: CAMPUS.text, letterSpacing: -.6 }, sectionCaption: { color: CAMPUS.textFaint, fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, tileRow: { flexDirection: 'row', gap: 12 }, tile: { flex: 1, minHeight: 173, borderRadius: 23, padding: 15 }, historyTile: { backgroundColor: '#FBE9DB' }, profileTile: { backgroundColor: '#E3F3ED' }, tileIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#F9DCC6', justifyContent: 'center', alignItems: 'center' }, tileArrow: { position: 'absolute', top: 21, right: 17 }, tileTitle: { color: CAMPUS.text, fontSize: 16, fontWeight: '900', marginTop: 24 }, tileDesc: { color: CAMPUS.textMuted, fontSize: 11, lineHeight: 17, marginTop: 5 }, footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 29 }, footerText: { color: CAMPUS.textMuted, fontSize: 11 }, credit: { marginTop: 23, textAlign: 'center', color: CAMPUS.textFaint, fontSize: 9 },
});

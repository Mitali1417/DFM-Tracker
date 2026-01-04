import { View, Text, StyleSheet } from 'react-native';
import { formatDate, formatDuration } from '../utils/date';

interface Props {
  date: string;
  durationSeconds: number;
}

export default function RecordCard({ date, durationSeconds }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.time}>{formatDuration(durationSeconds)} mins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#d6d4d4ff',
    borderWidth: 1,
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
  },
});

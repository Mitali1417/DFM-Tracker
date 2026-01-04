import AsyncStorage from '@react-native-async-storage/async-storage';
import { DFMRecord } from '../types/dfm';

const STORAGE_KEY = 'DFM_RECORDS';

export async function getRecords(): Promise<DFMRecord[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading records', error);
    return [];
  }
}

export async function saveRecord(record: DFMRecord) {
  try {
    const existing = await getRecords();
    const updated = [record, ...existing];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving record', error);
  }
}

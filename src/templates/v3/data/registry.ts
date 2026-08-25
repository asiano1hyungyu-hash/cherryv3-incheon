import { RegionData } from '@/src/types/index';
import { incheonData } from './incheonData';

export const regionRegistry: Record<string, RegionData> = {
  incheon: incheonData,
};

export function getRegionData(code: string = 'incheon'): RegionData {
  return regionRegistry[code] || incheonData;
}






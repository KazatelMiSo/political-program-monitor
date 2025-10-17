/**
 * Define an interface for the theme tokens used throughout the application.
 * Each party will have its own primary, secondary and accent colors. Additional
 * tokens (e.g. fonts) can be added later.
 */
export interface ThemeTokens {
  primary: string;
  secondary: string;
  accent: string;
}

// Type to represent the keys (slugs) for each party. Extend when new parties are added.
export type PartyKey = 'ods' | 'ano' | 'pirati' | 'spd' | 'top09' | 'stan' | 'cssd' | 'kdu' | 'default';

/**
 * Define theme tokens for each party.
 * Colors are placeholders based on publicly available branding guidelines and may need adjustment.
 * Use hex codes or CSS variable references for flexibility.
 */
export const partyThemes: Record<PartyKey, ThemeTokens> = {
  ods: {
    primary: '#005CA9',
    secondary: '#00ADEF',
    accent: '#F3F4F6'
  },
  ano: {
    primary: '#552583',
    secondary: '#FDB927',
    accent: '#F3F4F6'
  },
  pirati: {
    primary: '#000000',
    secondary: '#78BE20',
    accent: '#F3F4F6'
  },
  spd: {
    primary: '#004080',
    secondary: '#DA291C',
    accent: '#F3F4F6'
  },
  top09: {
    primary: '#E40046',
    secondary: '#00A0E3',
    accent: '#F3F4F6'
  },
  stan: {
    primary: '#00853F',
    secondary: '#00A95C',
    accent: '#F3F4F6'
  },
  cssd: {
    primary: '#F39200',
    secondary: '#00A9E0',
    accent: '#F3F4F6'
  },
  kdu: {
    primary: '#00468B',
    secondary: '#FFCB00',
    accent: '#F3F4F6'
  },
  default: {
    primary: '#2563EB',
    secondary: '#4F46E5',
    accent: '#F3F4F6'
  }
};

import { Bodoni_Moda, Manrope, Cinzel } from 'next/font/google';

export const display = Bodoni_Moda({ subsets:['latin'], weight:['400','500'], style:['normal','italic'], variable:'--kx-display', display:'swap' });
export const sans = Manrope({ subsets:['latin'], weight:['300','400','500','600'], variable:'--kx-sans', display:'swap' });
export const mark = Cinzel({ subsets:['latin'], weight:['400','500','600'], variable:'--kx-mark', display:'swap' });

/**
 * name: fonts.ts
 * author: Deve
 * date: 2024-06-12
 */

 import {Inter, Lusitana } from 'next/font/google';

 export const inter = Inter({subsets:['latin']})
 export const lusitana = Lusitana({
     weight: ['400', '700'],
     subsets:['latin']
 })

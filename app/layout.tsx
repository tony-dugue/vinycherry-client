import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Provider from "@/store/provider";
import { Toast } from '@/components/utils';

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'], 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'VinyCherry',
  description: 'Gestion de collection musicale',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body>
        <Provider>
          <Toast />
          {children}
        </Provider>
        </body>
    </html>
  );
}

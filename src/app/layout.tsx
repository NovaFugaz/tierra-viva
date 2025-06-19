import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeRegistry from './ThemeRegistry';
import { ThemeModeProvider } from './theme/ThemeModeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TierraViva',
  description: 'Plataforma educativa TierraViva',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeModeProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </ThemeModeProvider>
      </body>
    </html>
  );
}

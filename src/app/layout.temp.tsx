import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './ThemeRegistry';

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
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

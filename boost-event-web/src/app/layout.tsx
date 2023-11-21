import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { FC, ReactNode } from 'react';

import { AuthProvider } from '@/core/shared/context/auth-provider';
import { ThemeProvider } from '@/core/theme/theme-provider';

type Props = {
  children: ReactNode;
}

const lexend = Lexend({ subsets: ['latin'] });

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={lexend.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Digital Mark - Boost Event',
  description: 'Eleve a estratégia de marketing para seus eventos.',
  icons: [
    {
      rel: 'icon',
      url: '../../public/favicon.ico',
    }
  ]
};

export default RootLayout;

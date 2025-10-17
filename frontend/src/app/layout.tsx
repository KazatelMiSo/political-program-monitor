import '../app/globals.css';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { partyThemes, PartyKey, ThemeTokens } from '../theme/partyThemes';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const router = useRouter();
  const [theme, setTheme] = useState<ThemeTokens>(partyThemes.default);
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const path = window.location.pathname.split('/');
    const slug = path[1] as PartyKey;
    if (slug && (partyThemes as any)[slug]) {
      setTheme((partyThemes as any)[slug]);
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(mql.matches);
    const listener = (e: MediaQueryListEvent) => setDark(e.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [router]);

  return (
    <html lang="cs" className={dark ? 'dark' : ''}>
      <head>
        <title>Political Program Monitor</title>
      </head>
      <body
        style={{
          '--color-primary': theme.primary,
          '--color-secondary': theme.secondary,
          '--color-accent': theme.accent
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}

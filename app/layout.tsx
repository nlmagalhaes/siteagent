import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'Met Museum Clone',
  description: 'Site de cultura e arte inspirado no The Met Museum',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

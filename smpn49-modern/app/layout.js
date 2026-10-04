import './globals.css';

export const metadata = {
  title: 'SMP Negeri 49 Makassar — School & Developer Profile',
  description: 'Website profil modern SMP Negeri 49 Makassar dan portofolio pengembang.',
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}

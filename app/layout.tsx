import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heards Apartments',
  description: 'Luxury apartments in Interlaken, Switzerland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

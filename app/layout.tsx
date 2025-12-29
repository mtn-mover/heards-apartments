import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEART Apartments Interlaken',
  description: 'Luxury apartments in Interlaken, Switzerland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

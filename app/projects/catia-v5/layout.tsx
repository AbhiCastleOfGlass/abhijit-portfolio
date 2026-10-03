import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CATIA V5 Tools Reference',
  description: 'Comprehensive visual reference covering all 12 CATIA V5 workbenches.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
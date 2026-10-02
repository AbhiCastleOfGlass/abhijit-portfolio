import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tolerance Stack-Up Analysis | Abhijit Ghosh',
  description: 'Interactive tolerance chain analysis tool for mechanical engineering and dimensional management.',
};

export default function StackupAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
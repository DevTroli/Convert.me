import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Converte.me - Conversor de arquivos ilimitados', description: 'Chega de frustração! O Conversor Universal te ajuda a converter qualquer tipo de arquivoem segundos, de forma rápida, fácil e gratuita.',
  creator: 'Pablo Troli',
  keywords:
    'image converter, Conversor de iamgem, video converter, conversor de video, audio converter, conversor de audio, conversor ilimitado de imagem, conversor de video ilimitado',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className=" bg-slate-900 pt-4 container max-w-6xl">
          {children}
        </div>
      </body>
    </html>
  );
}

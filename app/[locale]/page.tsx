import Dropzone from '@/components/dropzone';
import { useTranslations } from 'next-intl'

export default function Home() {

  const t = useTranslations('home')

  return (
    <div className="space-y-8 bg-slate-900">
      <div className="space-y-4">
        <h1 className="text-white/90 text-3xl md:text-5xl font-medium text-center">
          {t('title')}
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          {t('text')}
        </p>
      </div>
      <Dropzone />
    </div>
  );
}

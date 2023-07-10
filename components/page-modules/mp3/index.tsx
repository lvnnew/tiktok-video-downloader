'use client';

import { Downloader } from '@/components/common/downloader';
import { Fastest } from '@/components/page-modules/mp3/components/fastest';
import { Mp3Accordion } from './components/mp3-accordion';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function Mp3() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <Downloader title={t('download-tiktok-page')} />

      <Fastest />

      <Mp3Accordion />
    </div>
  );
}

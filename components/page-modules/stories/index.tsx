'use client';

import { Downloader } from '@/components/common/downloader';
import { StoriesAccordion } from './components/stories-accordion';
import { Fastest } from './components/fastest';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function Stories() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <Downloader title={t('download-tiktok-series')} />

      <Fastest />

      <StoriesAccordion />
    </div>
  );
}

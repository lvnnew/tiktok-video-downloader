'use client';

import { Downloader } from '@/components/common/downloader';
import { Features } from '@/components/page-modules/home/components/features';
import { WithoutWatermark } from '@/components/page-modules/home/components/watermark';
import { OnMobile } from '@/components/page-modules/home/components/on-mobile';
import { HomeAccordion } from '@/components/page-modules/home/components/home-accordion';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function Home() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <Downloader title={t('tiktok-downloader')} />

      <Features />

      <WithoutWatermark />

      <OnMobile />

      <HomeAccordion />
    </div>
  );
}

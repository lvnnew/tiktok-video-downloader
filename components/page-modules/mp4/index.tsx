'use client';

import { useTranslation } from '@/app/i18n/client';
import { Downloader } from '@/components/common/downloader';
import { OnMobile } from '@/components/page-modules/mp4/components/on-mobile';
import { useParams } from 'next/navigation';

export function Mp4() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <Downloader title={t('tow-to-save-video-without-watermark')} />

      <OnMobile />
    </div>
  );
}

'use client';

import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

export function Fastest() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1170px] mx-auto py-10 px-4'>
      <h2 className='text-[32px] font-bold text-[#252e69] leading-[32px]'>
        {t('fastest-header-text')}
      </h2>

      <div className='py-8 flex flex-col gap-4'>
        <p className='text-[#252e69] text-[18px] text-semibold'>
          {t('faster-content-1-text')}
        </p>

        <p className='text-[#252e69] text-[18px] text-semibold'>
          {t('faster-content-2-text')}
        </p>
      </div>

      <div className='relative'>
        <div className='lg:w-[950px] mx-auto rounded-3xl bg-[#5940f1] shadow-2xl shadow-[#5940f1] p-8 md:p-16 mt-[77px]'>
          <div className='flex flex-col gap-16 pt-14 pl-6'>
            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                1
              </div>
              <h5 className='text-white font-bold text-[20px]'>
                {t('tiktok-story-1-header')}
              </h5>
              <p className='text-white text-[22px] mt-4'>
                {t('tiktok-story-1-content')}
                <br />
                <br />
                {t('tiktok-story-2-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                2
              </div>
              <h5 className='text-white font-bold text-[20px]'>
                {t('paste-story-1-header')}
              </h5>
              <p className='text-white text-[22px] mt-4'>
                {t('paste-story-1-content')}
                <br />
                <br />
                {t('paste-story-2-content')}
                <br />
                <br />
                {t('paste-story-3-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                3
              </div>
              <h5 className='text-white font-bold text-[20px]'>
                {t('download-story-1-header')}
              </h5>
              <p className='text-white text-[22px] mt-4'>
                {t('download-story-1-content')}
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

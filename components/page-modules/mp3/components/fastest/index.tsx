'use client';

import { useTranslation } from '@/app/i18n/client';
import infoArrow from '@/assets/images/info-arrow.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export function Fastest() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1170px] mx-auto py-10 px-4'>
      <h2 className='text-[32px] font-bold text-[#252e69] leading-[32px]'>
        {t('easiest-way')}
      </h2>

      <div className='py-8'>
        <p className='text-[#252e69] text-[18px] text-semibold'>
          {t('easiest-way-content')}
        </p>
      </div>

      <div className='relative'>
        <h4 className='text-[#ce00ff] text-[24px] leading-[120%]'>
          {t('so-simple-can')}
        </h4>

        <div className='absolute left-[45%] -translate-1/2'>
          <Image src={infoArrow} alt='info arrow' />
        </div>

        <div className='lg:w-[950px] mx-auto rounded-3xl bg-[#5940f1] shadow-2xl shadow-[#5940f1] p-8 md:p-16 mt-[77px]'>
          <div className='flex flex-col gap-16 pt-14 pl-6'>
            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                1
              </div>
              <h5 className='text-white font-bold text-[20px]'>{t('that-you-want')}</h5>
              <p className='text-white text-[22px] mt-4'>
                {t('that-you-want-1-content')}
                <br />
                <br />
                {t('that-you-want-2-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                2
              </div>
              <h5 className='text-white font-bold text-[20px]'>{t('paste-link')}</h5>
              <p className='text-white text-[22px] mt-4'>
                {t('paste-link-1-content')}
                <br />
                <br />
                {t('paste-link-2-content')}
                <br />
                <br />
                {t('paste-link-3-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                3
              </div>
              <h5 className='text-white font-bold text-[20px]'>
                {t('download-mp3-music')}
              </h5>
              <p className='text-white text-[22px] mt-4'>
                {t('download-mp3-music-1-content')}
                <br />
                <br />
                {t('download-mp3-music-2-content')}

                <br />
                <br />
                {t('download-mp3-music-3-content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

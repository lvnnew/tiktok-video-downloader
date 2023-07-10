import infoArrow from '@/assets/images/info-arrow.png';
import download from '@/assets/images/download.png';
import video from '@/assets/images/video.png';
import iphone from '@/assets/images/iphone.png';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function OnMobile() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1170px] mx-auto py-10 px-4'>
      <div className='relative'>
        <h4 className='text-[#ce00ff] text-[24px] leading-[120%]'>{t('so-simple')}</h4>

        <div className='absolute left-[45%] -translate-1/2'>
          <Image src={infoArrow} alt='info arrow' />
        </div>

        <div className='flex flex-col gap-8 mt-[77px]'>
          <div className='flex justify-between items-center gap-12 flex-col xl:flex-row'>
            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
                {t('video-on-mobile')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-mobile-1-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-mobile-2-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-mobile-3-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-mobile-4-content')}
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image src={download} alt='download' />
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center gap-12 flex-col-reverse xl:flex-row'>
            <div>
              <Image className='object-contain' src={video} alt='download' />
            </div>

            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
                {t('video-without-watermark')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                  {t('video-without-watermark-1-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-without-watermark-2-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-without-watermark-3-content')}
                </p>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center gap-12 flex-col xl:flex-row'>
            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
                {t('video-on-ipad')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-ipad-1-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-ipad-2-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-ipad-3-content')}
                </p>

                <p className='text-[#252e69] text-[18px]'>
                  {t('video-on-ipad-4-content')}
                </p>
              </div>
            </div>
            <div>
              <Image className='object-contain' src={iphone} alt='download' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

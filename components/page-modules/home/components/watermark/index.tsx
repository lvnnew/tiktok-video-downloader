import infoArrow from '@/assets/images/info-arrow.png';
import link from '@/assets/images/link.png';
import price from '@/assets/images/price.png';
import gallery from '@/assets/images/gallery.png';
import power from '@/assets/images/power.png';
import music from '@/assets/images/music.png';
import tv from '@/assets/images/tv.png';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function WithoutWatermark() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1170px] mx-auto py-10 px-4'>
      <h2 className='text-center text-[32px] font-bold text-[#252e69]'>
        {t('no-watermark-content')}
      </h2>

      <div className='py-8'>
        <p className='text-[#252e69] text-[18px] text-semibold'>
          {t('tiktok-video-download-without-watermark-content')}
        </p>
      </div>

      <div className='relative'>
        <h4 className='text-[#ce00ff] text-[24px] leading-[120%]'>{t('you-can-save')}</h4>

        <div className='absolute left-[45%] top-[3%]'>
          <Image src={infoArrow} alt='info arrow' />
        </div>

        <div className='lg:w-[950px] mx-auto rounded-3xl bg-[#5940f1] shadow-2xl shadow-[#5940f1] p-8 md:p-16 mt-[100px]'>
          <h3 className='text-white font-bold text-[24px]'>
            {t('how-to-download-watermark?')}
          </h3>

          <div className='flex flex-col gap-16 pt-14 pl-6'>
            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                1
              </div>
              <h5 className='text-white font-bold text-[20px]'>{t('find-a-tt')}</h5>
              <p className='text-white text-[20px] font-semibold'>
                {t('find-a-tt-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                2
              </div>

              <h5 className='text-white font-bold text-[20px]'>{t('copy-link')}</h5>
              <p className='text-white text-[20px] font-semibold'>
                {t('copy-link-content')}
              </p>
            </div>

            <div className='relative'>
              <div className='absolute -left-[33px] -top-[67px] text-black text-opacity-20 font-bold text-[80px]'>
                3
              </div>
              <h5 className='text-white font-bold text-[20px]'>{t('download-tiktok')}</h5>
              <p className='text-white text-[20px] font-semibold'>
                {t('download-tiktok-content')}
              </p>
            </div>
          </div>
        </div>

        <div className='lg:w-[750px] mx-auto text-[18px] py-12'>
          <p className='text-[#252e69]'>{t('most-popular-content')}</p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 py-10'>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={link} alt='link' />
              <p>{t('no-trademark')}</p>
            </div>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={price} alt='price' />
              <p>{t('its-free')}</p>
            </div>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={gallery} alt='gallery' />
              <p>{t('username-isnt-required')}</p>
            </div>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={power} alt='power' />
              <p>{t('tiktok-high-speed')}</p>
            </div>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={music} alt='music' />
              <p>{t('without-mp3-mp4')}</p>
            </div>
            <div className='flex flex-col gap-4 items-center text-center'>
              <Image src={tv} alt='tv' />
              <p>{t('downloader-works')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

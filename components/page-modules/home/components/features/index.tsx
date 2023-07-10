import { useTranslation } from '@/app/i18n/client';
import audio from '@/assets/images/audio.png';
import endless from '@/assets/images/endless.png';
import nowatermark from '@/assets/images/no-watermark.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export function Features() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1100px] mx-auto px-4'>
      <div className='flex gap-10 md:gap-3 md:flex-row flex-col justify-between py-10'>
        <div className='flex flex-col items-center gap-10 text-center'>
          <Image src={endless} alt='audio' />

          <div className='flex flex-col gap-4 justify-between h-full'>
            <h3 className='text-[24px] font-bold text-[#252e69] leading-[28px]'>
              {t('unlimited-downloads')}
            </h3>
            <p className='text-[#252e69]'>{t('unlimited-downloads-content')}</p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-10 text-center'>
          <Image src={nowatermark} alt='nowatermark' />

          <div className='flex flex-col gap-4 justify-between h-full'>
            <h3 className='text-[24px] font-bold text-[#252e69] leading-[28px]'>
              {t('no-watermark')}
            </h3>
            <p className='text-[#252e69]'>{t('no-watermark-content')}</p>
          </div>
        </div>

        <div className='flex flex-col items-center  text-center md:gap-10'>
          <Image src={audio} alt='audio' />

          <div className='flex flex-col gap-4 justify-between h-full'>
            <h3 className='text-[24px] font-bold text-[#252e69] leading-[28px]'>
              {t('mp4-and-mp3-supported')}
            </h3>
            <p className='text-[#252e69]'>{t('mp4-and-mp3-supported-content')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

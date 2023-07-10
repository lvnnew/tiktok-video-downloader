import infoArrow from '@/assets/images/info-arrow.png';
import download from '@/assets/images/download.png';
import video from '@/assets/images/video.png';
import iphone from '@/assets/images/iphone.png';

import Image from 'next/image';
import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

export function OnMobile() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[1170px] mx-auto py-10 px-4'>
      <h2 className='text-[24px] font-bold text-[#252e69] leading-[32px]'>
        {t('fastest')}
      </h2>

      <div className='py-8'>
        <p className='text-[#252e69] text-[20px] text-semibold'>{t('fatest-content')}</p>
      </div>

      <div className='relative'>
        <h4 className='text-[#ce00ff] text-[24px] leading-[120%]'>
          {t('here-are-some')}
        </h4>

        <div className='absolute left-[45%] -translate-1/2'>
          <Image src={infoArrow} alt='info arrow' />
        </div>

        <div className='flex flex-col gap-8 mt-[77px]'>
          <div className='flex justify-between items-center gap-12 flex-col xl:flex-row'>
            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
                {t('mobile-watermark-on')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                  {t('mobile-watermark-on-content')}
                </p>

                {/* <p className='text-[#252e69] text-[18px]'>Please, make sure that:</p>

                <ul className='list-disc text-[#252e69] text-[18px]'>
                  <li className='ml-[24px]'>You copy a full link;</li>
                </ul> */}
              </div>
            </div>
            <div className=''>
              <div className='-mr-[3  0px]'>
                <Image className='object-contain' src={download} alt='download' />
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center gap-12 flex-col-reverse xl:flex-row'>
            <div>
              <div>
                <Image className='object-contain' src={video} alt='download' />
              </div>
            </div>

            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
               {t('on-pc')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                 {t('on-pc-content')}
                </p>

                {/* <p className='text-[#252e69] text-[18px]'>Please make sure that:</p>

                <ul className='list-disc text-[#252e69] text-[18px]'>
                  <li className='ml-[24px]'>You copy a full link;</li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center gap-12 flex-col xl:flex-row'>
            <div className='xl:w-1/2'>
              <h2 className='text-[#252e69] font-bold text-[32px] leading-[34px]'>
              {t('tow-to-save-video-without-watermark')}
              </h2>

              <div className='flex flex-col gap-4 py-8'>
                <p className='text-[#252e69] text-[18px]'>
                 {t('how-to-save-video')}
                </p>

                {/* <p className='text-[#252e69] text-[18px]'>Here is what you can do:</p>

                <ul className='list-disc text-[#252e69] text-[18px]'>
                  <li className='ml-[24px]'>
                    Install 'Documents by Readdle' app from the AppStore;
                  </li>
                  <li className='ml-[24px]'>
                    Open 'Documents by Readdle' and tap a browser icon;
                  </li>
                  <li className='ml-[24px]'>
                    Visit our website www.ssstik.io using the browser built in
                    'Documents';
                  </li>
                  <li className='ml-[24px]'>
                    Follow the instructions above for Android.
                  </li>
                </ul> */}
              </div>
            </div>
            <div className=''>
              <div>
                <Image className='object-contain' src={iphone} alt='download' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

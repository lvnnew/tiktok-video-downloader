'use client';

import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

export function Privacy() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <div className='lg:w-[900px] mx-auto py-10 px-4'>
        <div>
          <h1 className='text-[24px] lg:text-[32px] font-bold'>{t('privacy-policy')}</h1>
        </div>

        <div>
          <ol className='list-decimal p-8 text-[15px]'>
            <li>{t('privacy-policy-content-1')}</li>
            <li>{t('privacy-policy-content-2')}</li>
            <li>{t('privacy-policy-content-3')}</li>
            <li>{t('privacy-policy-content-4')}</li>
            <li>{t('privacy-policy-content-5')}</li>
            <li>{t('privacy-policy-content-6')}</li>
            <li>{t('privacy-policy-content-7')}</li>
            <li>{t('privacy-policy-content-8')}</li>
          </ol>

          {/* <div className='flex flex-col gap-4 py-4 text-[15px]'>
            <h3 className='font-bold text-[18px]'>Video Downloader App</h3>
            <p>
              SSSTik built the video downloader app as an Ad Supported app. This SERVICE
              is provided by SSSTik at no cost and is intended for use as is.
            </p>

            <p>
              This page is used to inform visitors regarding our policies with the
              collection, use, and disclosure of Personal Information if anyone decided to
              use our Service.
            </p>

            <p>
              If you choose to use our Service, then you agree to the collection and use
              of information in relation to this policy. The Personal Information that we
              collect is used for providing and improving the Service. we will not use or
              share your information with anyone except as described in this Privacy
              Policy.
            </p>

            <p>
              The terms used in this Privacy Policy have the same meanings as in our Terms
              and Conditions, which is accessible at SSS Video Downloader for TikTok
              unless otherwise defined in this Privacy Policy.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

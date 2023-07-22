'use client'
import { FaqAccordion } from './components/faq-accordion';
import {useParams} from 'next/navigation';
import {useTranslation} from '@/app/i18n/client';

export function Faq() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#F1F1F1]'>
      <div className='lg:w-[900px] mx-auto py-10 px-4'>
        <h1 className='text-[32px] font-bold text-center'>{t('faq-header-text')}</h1>

        <FaqAccordion />
      </div>
    </div>
  );
}

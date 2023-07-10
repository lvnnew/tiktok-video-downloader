'use client';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

export function Mp3Accordion() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[950px] mx-auto py-10 px-4'>
      <Accordion activeIndex={0}>
        <AccordionTab header={t('mp3-accordion-tab-header-1')}>
          <p className='m-0'>
            {t('mp3-accordion-tab-content-1')}
          </p>
        </AccordionTab>
        <AccordionTab header={t('mp3-accordion-tab-header-2')}>
          <p className='m-0'>
            {t('mp3-accordion-tab-content-2')}
          </p>
        </AccordionTab>
        <AccordionTab header={t('mp3-accordion-tab-header-3')}>
          <p className='m-0'>
            {t('mp3-accordion-tab-content-3')}
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

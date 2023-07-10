'use client';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function StoriesAccordion() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[950px] mx-auto py-10 px-4'>
      <Accordion activeIndex={0}>
        <AccordionTab header={t('story-accordion-tab-header-1')}>
          <p className='m-0'>{t('story-accordion-tab-content-1')}</p>
        </AccordionTab>
        <AccordionTab header={t('story-accordion-tab-header-2')}>
          <p className='m-0'>{t('story-accordion-tab-content-2')}</p>
        </AccordionTab>
        <AccordionTab header={t('story-accordion-tab-header-1')}>
          <p className='m-0'>{t('story-accordion-tab-content-3')}</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

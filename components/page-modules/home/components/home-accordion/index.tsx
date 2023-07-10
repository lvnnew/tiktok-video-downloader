'use client';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function HomeAccordion() {
  const params = useParams();
  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[950px] mx-auto py-10 px-4'>
      <Accordion activeIndex={0}>
        <AccordionTab header={t('home-accordion-tab-header-1')}>
          <p className='m-0'>{t('home-accordion-tab-content-1')}</p>
        </AccordionTab>
        <AccordionTab header={t('home-accordion-tab-header-2')}>
          <p className='m-0'>{t('home-accordion-tab-content-2')}</p>
        </AccordionTab>
        <AccordionTab header={t('home-accordion-tab-header-3')}>
          <p className='m-0'>{t('home-accordion-tab-content-3')}</p>
        </AccordionTab>

        <AccordionTab header={t('home-accordion-tab-header-4')}>
          <p className='m-0'>{t('home-accordion-tab-content-4')}</p>
        </AccordionTab>

        <AccordionTab header={t('home-accordion-tab-header-5')}>
          <p className='m-0'>{t('home-accordion-tab-content-5')}</p>
        </AccordionTab>
        <AccordionTab header={t('home-accordion-tab-header-6')}>
          <p className='m-0'>{t('home-accordion-tab-content-6')}</p>
        </AccordionTab>

        <AccordionTab header={t('home-accordion-tab-header-7')}>
          <p className='m-0'>{t('home-accordion-tab-content-7')}</p>
        </AccordionTab>

        <AccordionTab header={t('home-accordion-tab-header-8')}>
          <p className='m-0'>{t('home-accordion-tab-content-8')}</p>
        </AccordionTab>

        <AccordionTab header={t('home-accordion-tab-header-9')}>
          <p className='m-0'>{t('home-accordion-tab-content-9')}</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

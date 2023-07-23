'use client';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {t} from 'i18next';

export function FaqAccordion() {
  return (
    <div className='lg:w-[950px] mx-auto py-10 px-4'>
      <Accordion activeIndex={0}>
        <AccordionTab header={t('faq-accordion-tab-header-1')}>
          <p className='m-0'>{t('faq-accordion-tab-content-1')}</p>
          <ul className='list-disc pl-8 py-4'>
            <li>
              <b>{t('faq-accordion-tab-bold-content-1')} </b>{t('faq-accordion-tab-standard-content-1')}
            </li>
            <li>
              <b>{t('faq-accordion-tab-bold-content-2')} </b>{t('faq-accordion-tab-standard-content-2')}
            </li>
            <li>
              <b>{t('faq-accordion-tab-bold-content-3')} </b>{t('faq-accordion-tab-standard-content-3')}
            </li>
            <li>
              <b>{t('faq-accordion-tab-bold-content-4')} </b>{t('faq-accordion-tab-standard-content-4')}
            </li>
          </ul>
        </AccordionTab>
        <AccordionTab header={t('faq-accordion-tab-header-2')}>
          <p className='m-0'>{t('faq-accordion-tab-content-2')}
            <br />
            <br />
            {t('faq-accordion-tab-br-content-2')}
          </p>
        </AccordionTab>
        <AccordionTab header={t('faq-accordion-tab-header-3')}>
          <p className='m-0'>{t('faq-accordion-tab-content-3')}</p>
        </AccordionTab>

        <AccordionTab header={t('faq-accordion-tab-header-4')}>
          <p className='m-0'>{t('faq-accordion-tab-content-4')}</p>
        </AccordionTab>

        <AccordionTab header={t('faq-accordion-tab-header-5')}>
          <p className='m-0'>{t('faq-accordion-tab-content-5')}</p>
        </AccordionTab>

        <AccordionTab header={t('faq-accordion-tab-header-6')}>
          <p className='m-0'>{t('faq-accordion-tab-content-6')}</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

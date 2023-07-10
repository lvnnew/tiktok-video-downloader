'use client';

import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function Footer() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='bg-[#252e69] py-[40px]'>
      <div className='container flex justify-between flex-col items-center gap-8'>
        <div></div>
        <div className='flex flex-col gap-8 items-center'>
          <ul className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12'>
          <li className='text-white'>
              <Link
                href={`/${params.lng}/contacts`}
                as={`/${params.lng}/contacts`}
                locale={params.lng}
              >
                {t('contacts')}
              </Link>
            </li>
            <li className='text-white'>
              <Link
                href={`/${params.lng}/privacy`}
                as={`/${params.lng}/privacy`}
                locale={params.lng}
              >
                {t('privacy-policy')}
              </Link>
            </li>
            {/* <li className='text-white'>
              <Link locale={params.lng} href='/apk'>APK</Link>
            </li> */}
            <li className='text-white'>
              <Link
                href={`/${params.lng}/stories`}
                as={`/${params.lng}/stories`}
                locale={params.lng}
              >
                {t('stories')}
              </Link>
            </li>
            <li className='text-white'>
              <Link
                href={`/${params.lng}/faq`}
                as={`/${params.lng}/faq`}
                locale={params.lng}
              >
                {t('faq')}
              </Link>
            </li>
          </ul>

          <p className='text-white font-bold text-center'>{t('footer-text')}</p>

          <span className='hidden md:inline-block text-white text-opacity-20'>
            Copyright 2018-2023
          </span>
        </div>
        <div className='relative group'>
          <div className='flex gap-2 cursor-pointer'>
            <span className='text-white'>{params.lng.toLocaleUpperCase()}</span>
            <BiChevronDown size={20} color='#ce00ff' />
          </div>
          <div className='absolute bottom-[100%] bg-white z-20 px-4 py-6 w-[200px] hidden group-hover:block'>
            <ul>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/id' lang='id' className='pure-menu-link inline-block w-full'>
                  🇮🇩&nbsp;Bahasa&nbsp;Indonesia&#x202C;
                </a>
              </li>

              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/de' lang='de' className='pure-menu-link inline-block w-full'>
                  🇩🇪&nbsp;Deutsh
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/es' lang='es' className='pure-menu-link inline-block w-full'>
                  🇪🇸&nbsp;Español
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/en' lang='en' className='pure-menu-link inline-block w-full'>
                  🇬🇧&nbsp;English
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/fr' lang='fr' className='pure-menu-link inline-block w-full'>
                  🇫🇷&nbsp;Français
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/ja' lang='ja' className='pure-menu-link inline-block w-full'>
                  🇯🇵&nbsp;日本語
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/ko' lang='ko' className='pure-menu-link inline-block w-full'>
                  🇰🇷&nbsp;한국어
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/pt' lang='pt' className='pure-menu-link inline-block w-full'>
                  🇵🇹&nbsp;Português&nbsp;(Brasil)
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/ru' lang='ru' className='pure-menu-link inline-block w-full'>
                  🇷🇺&nbsp;Русский
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/tr' lang='tr' className='pure-menu-link inline-block w-full'>
                  🇹🇷&nbsp;Türkçe&#x202C;&#x202C;
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/vi' lang='vi' className='pure-menu-link inline-block w-full'>
                  🇻🇳&nbsp;Tiếng&nbsp;Việt
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/ar' lang='ar' className='pure-menu-link inline-block w-full'>
                  🇦🇪&nbsp;العربية
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/th' lang='th' className='pure-menu-link inline-block w-full'>
                  🇹🇭&nbsp;ไทย
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/it' lang='it' className='pure-menu-link inline-block w-full'>
                  🇮🇹&nbsp;Italiano
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/pl' lang='pl' className='pure-menu-link inline-block w-full'>
                  🇵🇱&nbsp;Polskie
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/ms' lang='ms' className='pure-menu-link inline-block w-full'>
                  🇲🇾&nbsp;Malaysian
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/uk' lang='uk' className='pure-menu-link inline-block w-full'>
                  🇺🇦&nbsp;Ukrainian
                </a>
              </li>
              <li className='text-[12px] text-black p-1 cursor-pointer transition hover:bg-gray-200'>
                <a href='/nl' lang='nl' className='pure-menu-link inline-block w-full'>
                  🇳🇱&nbsp;Nederlands
                </a>
              </li>
            </ul>
          </div>
        </div>

        <span className='inline-block md:hidden text-white text-opacity-20'>
          Copyright 2018-2023
        </span>
      </div>
    </div>
  );
}

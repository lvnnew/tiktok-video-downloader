'use client';

import React from 'react';
import Image from 'next/image';

import logo from '@/public/logo.png';
import Link from 'next/link';

import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { classNames } from 'primereact/utils';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const params = useParams();
  const { t } = useTranslation(params.lng);

  function triggerMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className='fixed left-0 top-0 bg-white z-50 w-full'>
      <div className='px-6 flex justify-between h-[60px] items-center'>
        <Link locale={params.lng} href='/' className='flex gap-2 text-black items-center'>
          <Image src={logo} alt='logo' />
          <span className='text-[17.59px] font-bold'>SSSTIK</span>
        </Link>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-16'>
            <li>
              <Link
                className='text-[#252E68] transition hover:text-[#8e55d8]'
                href={`/${params.lng}/mp4`}
                as={`/${params.lng}/mp4`}
                locale={params.lng}
              >
                {t('how-to-save')}
              </Link>
            </li>
            <li>
              <Link
                className='text-[#252E68] transition hover:text-[#8e55d8]'
                href={`/${params.lng}/mp3`}
                as={`/${params.lng}/mp3`}
                locale={params.lng}
              >
                {t('download-tiktok-mp3')}
              </Link>
            </li>
          </ul>
        </div>
        <div></div>

        <div className='cursor-pointer block md:hidden'>
          {isOpen ? (
            <CgClose size={30} onClick={triggerMenu} />
          ) : (
            <FaBars size={22} onClick={triggerMenu} />
          )}
        </div>
      </div>
      <div className='flex justify-between relative'>
        <div className='h-[1.5px] w-[50%] bg-[#0057B7]'></div>
        <div className='h-[1.5px] w-[50%] bg-[#FFDD00]'></div>

        <div
          className={classNames(
            'absolute w-full bg-white top-[1.5px] transition duration-200',
            {
              'block left-0': isOpen,
              'hidden -left-full': !isOpen,
            },
          )}
        >
          <ul className='flex flex-col justify-center items-center gap-8 py-8'>
            <li>
              <Link
                href={`/${params.lng}/mp4`}
                as={`/${params.lng}/mp4`}
                locale={params.lng}
                className='text-[#252E68] transition hover:text-[#8e55d8]'
              >
                {t('how-to-save')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${params.lng}/mp3`}
                as={`/${params.lng}/mp3`}
                locale={params.lng}
                className='text-[#252E68] transition hover:text-[#8e55d8]'
              >
                {t('download-tiktok-mp3')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { FormEvent } from 'react';

import { BiPaste } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

import { Button } from 'primereact/button';

import { useVideo } from './hooks/useVideo';

import { Toaster, toast } from 'react-hot-toast';

import { usePasteOnButtonClick } from '@/hooks/usePasteOnButtonClick';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
}

export function Downloader(props: Props) {
  const [url, setUrl] = React.useState('');

  const { error, loading, video, data } = useVideo();
  const { handleClick } = usePasteOnButtonClick(setUrl);

  const params = useParams();
  const { t } = useTranslation(params.lng);

  React.useEffect(() => {
    if (error) notify();
  }, [error]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!url.includes('tiktok.com') || !url) return;

    await video(url);
  };

  const clearInputValue = () => {
    setUrl('');
  };

  const notify = () => toast.error(error.message || error);

  return (
    <div className='w-full py-10 gradient px-4'>
      <div className='md:w-[752px] justify-center mx-auto flex flex-col items-baseline md:items-center gap-6'>
        <h1 className='text-white text-[32px] font-bold text-center w-full'>
          {props.title}
        </h1>

        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex border items-center border-white bg-[#E8D6FF] h-[64px] w-full rounded-lg'>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type='text'
              className='bg-transparent outline-none w-full px-6'
              placeholder={t('just-insert-a-link')}
            />

            <div className='flex items-center gap-2 pr-2'>
              {url ? (
                <div
                  onClick={clearInputValue}
                  className='flex items-center gap-1 p-2 my-3 bg-white text-[#8e55d8] font-semibold text-[14px] cursor-pointer'
                >
                  <CgClose size={20} /> {t('clear')}
                </div>
              ) : (
                <div
                  onClick={handleClick}
                  className='flex items-center gap-1 p-2 my-3 bg-white text-[#8e55d8] font-semibold text-[14px] cursor-pointer'
                >
                  <BiPaste size={20} /> {t('paste')}
                </div>
              )}

              <div className='hidden md:block'>
                <Button loading={loading} disabled={loading}  label={t('download')} />
              </div>
            </div>
          </div>

          <div className='md:hidden w-full border-2 rounded-lg border-white mt-4'>
            <Button
              loading={loading}
              disabled={loading}
              label={t('download')}
              className='w-full'
              size='large'
            />
          </div>
        </form>

        {data?.withoutWatermark && (
          <div className='w-full flex md:flex-row flex-col gap-6 justify-between shadow bg-[#665896] p-6'>
            

            <div className='w-full flex flex-col gap-2'>
              <a
                href={data.withWatermark.url}
                target='_blank'
                className='flex text-center items-center justify-center bg-[#4CA8E6] transition hover:bg-[#489CD5]  h-[40px] w-full'
              >
                With Watermark
              </a>

              <a
                href={data.withoutWatermark.url}
                target='_blank'
                className='flex text-center items-center justify-center bg-[#4CA8E6] transition hover:bg-[#489CD5]  h-[40px] w-full'
              >
                Without Watermark
              </a>

              <a
                href={data.audio.url}
                target='_blank'
                className='flex text-center items-center justify-center bg-[#4CA8E6] transition hover:bg-[#489CD5]  h-[40px] w-full'
              >
                Download MP3
              </a>
            </div>
          </div>
        )}
      </div>

      <Toaster />
    </div>
  );
}

import React from 'react';
import {BiPaste} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import {Button} from 'primereact/button';
import {useVideo} from './hooks/useVideo';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {usePasteOnButtonClick} from '@/hooks/usePasteOnButtonClick';
import {useParams} from 'next/navigation';
import {useTranslation} from 'react-i18next';

export function Downloader(props: {title: string}) {
  const [url, setUrl] = React.useState('');

  const {loading, loadVideo, data} = useVideo();
  const {handleClick} = usePasteOnButtonClick(setUrl);
  const params = useParams();
  const {t} = useTranslation(params.lng);
  function handleSubmit() {
    if (url.includes('tiktok.com')) return loadVideo(url);

    toast.error(t('invalid-link'));
  }

  const clearInputValue = () => setUrl('');

  return (
    <div className='w-full py-10 gradient px-4'>
      <div className='md:w-[752px] justify-center mx-auto flex flex-col items-baseline md:items-center gap-6'>
        <h1 className='text-white text-[32px] font-bold text-center w-full'>
          {props.title}
        </h1>

        <div className='w-full'>
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
                <Button loading={loading} disabled={loading} label={t('download')} onClick={handleSubmit}/>
              </div>
            </div>
          </div>
        </div>

        {data && (
          <div className='w-full flex md:flex-row flex-col gap-6 justify-between shadow bg-[#665896] p-6'>
            <div className='w-full flex flex-col gap-2'>
              <DownloadLink url={data.withWatermark.url} text='With Watermark'/>
              <DownloadLink url={data.withoutWatermark.url} text='Without Watermark'/>
              <DownloadLink url={data.audio.url} text='Download MP3'/>
            </div>
          </div>
        )}
      </div>

      <ToastContainer position='top-center' autoClose={500} />
    </div>
  );
}
function DownloadLink({url, text}: {url: string, text: string}) {
  return <a
    href={url}
    className='flex text-center items-center justify-center bg-[#4CA8E6] transition hover:bg-[#489CD5] h-[40px] w-full'
    children={text}
  />;
}

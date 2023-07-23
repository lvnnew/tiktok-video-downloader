import { useState } from 'react';
import { DownloaderService } from '../services/downloader.service';
import { DownloadedData } from '../types/downloader.type';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import {toast} from 'react-toastify';

let timer: any|undefined = undefined;

export function useVideo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DownloadedData>();

  const params = useParams();

  const { t } = useTranslation(params.lng);

  const loadVideo = async (url: string) => {
    setLoading(true);

    try {
      const [withoutWatermark, withWatermark, audio] = await Promise.all([
        DownloaderService.catchVideo({ url, isNoTTWatermark: true }),
        DownloaderService.catchVideo({ url }),
        DownloaderService.catchVideo({ url, isAudioOnly: true }),
      ]);

      const newData: DownloadedData = {
        withoutWatermark: { ...withoutWatermark },
        withWatermark: { ...withWatermark },
        audio: { ...audio },
      };

      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        setData(undefined)
        toast.warning(t('link-followed-has-expired'));
      }, 15 * 1000);

      setData(newData);
    } catch (error) {
      // @ts-ignore
      const msg = error?.response?.data?.status === 'error' ? t('video-not-found') : error?.response?.data?.status;
      toast.error(msg);
      setData(undefined);
      if(timer) clearTimeout(timer);
    }

    setLoading(false);
  };

  return { loading, loadVideo, data };
}

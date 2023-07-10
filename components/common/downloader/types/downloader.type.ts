import { Video } from './video.type';

export interface DownloaderCredentials {
    url: string,
    isAudioOnly?: boolean,
    isNoTTWatermark?: boolean,
}

export interface DownloaderResponse {
    status: string;
    url: string
}

export interface DownloadedData extends Record<'withoutWatermark' | 'withWatermark' | 'audio', DownloaderResponse>{ };

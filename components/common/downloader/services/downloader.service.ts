import axios from 'axios';
import { DownloaderCredentials, DownloaderResponse } from '../types/downloader.type';
import { Video } from '../types/video.type';



const DOWNLOAD_API_URL = process.env.NEXT_PUBLIC_URL
const IFRAME_API_URL = process.env.NEXT_PUBLIC_IFRAME
const IFRAME_API_KEY = process.env.NEXT_PUBLIC_IFRAME_API_KEY


export const DownloaderService = {
    catchVideo: async (credentials: DownloaderCredentials) => {
        const data = await axios.post<DownloaderResponse>(DOWNLOAD_API_URL!, credentials, { headers: { 'Accept': 'application/json' } });

        return data?.data
    },

    getVideoInfo: async (url: string) => {
        const data = await axios.get<Video>(`${IFRAME_API_URL}/oembed?url=${url}&api_key=${IFRAME_API_KEY}`, { headers: { 'Accept': 'application/json' } });

        return data?.data
    }
}


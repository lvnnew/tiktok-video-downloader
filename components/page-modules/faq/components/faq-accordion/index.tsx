'use client';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export function FaqAccordion() {
  return (
    <div className='lg:w-[950px] mx-auto py-10 px-4'>
      <Accordion activeIndex={0}>
        <AccordionTab header='Why do I see error when trying to download?'>
          <p className='m-0'>There are several reasons:</p>
          <ul className='list-disc pl-8 py-4'>
            <li>
              <b>video is private. </b>Sorry, we can not deal with it.
            </li>
            <li>
              <b> video is unavailable.</b> We are studying this case. We will fix it if
              possible.
            </li>
            <li>
              <b> you paste wrong type of links.</b> At this moment we support downloading
              from pages which contain a single video. If you paste a user profile link or
              something else, you will see error.
            </li>
            <li>
              <b> something is wrong on our side.</b> If you are sure that your link is
              correct, try downloading one more time.
            </li>
          </ul>
        </AccordionTab>
        <AccordionTab header='Video quality is low. Is there any way to download in HD?'>
          <p className='m-0'>
            We do not change the resolution or any other parameters of the video. We do
            not edit videos which you download. We only provide a link to the original
            file which is located on TT servers.
            <br />
            <br />
            Basicly that means that we can't make better quality because the original file
            is in poor quality.
          </p>
        </AccordionTab>
        <AccordionTab header='Seems like my IP got banned. What should I do?'>
          <p className='m-0'>
            This could happen accidentally. Please, contact us at
            ssstiktok.com[at]gmail.com and provide the IPs which should be unbanned.
          </p>
        </AccordionTab>

        <AccordionTab header='Do you have a video download app?'>
          <p className='m-0'>
            Of course, you can download it directly from Our apk page and download videos
            or music from Tik Tok without any problems.
          </p>
        </AccordionTab>

        <AccordionTab header="I can't install the app, what should I do?">
          <p className='m-0'>
            Check your Wi-Fi or Internet to see if there is a connection, and also check
            if your device has enough free space and is supported by your version of
            Android.
          </p>
        </AccordionTab>

        <AccordionTab header='Can you add a feature of multiple files downloading?'>
          <p className='m-0'>Not now. We will get back to this question later</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

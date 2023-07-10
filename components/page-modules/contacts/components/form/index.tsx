import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';
import { Button } from 'primereact/button';

export function ContactsForm() {
  const params = useParams();

  const { t } = useTranslation(params.lng);

  return (
    <div className='lg:w-[900px] mx-auto py-10 px-4'>
      <div>
        <h1 className='text-center text-[32px] font-bold'>{t('contact-us')}</h1>
      </div>

      <form>
        <label htmlFor='email' className='text-[15px] mt-2 mb-4 inline-block'>
          {t('your-contact-email')}
        </label>
        <input
          type='text'
          id='email'
          placeholder={t('your-email')}
          className='w-full outline-none border-4 border-gray-200 p-2'
        />
        <label htmlFor='message' className='text-[15px] my-4 inline-block'>
          {t('message-or-bugreport')}
        </label>
        <textarea
          name='message'
          id='message'
          className='w-full outline-none p-2 min-h-[200px] border-4 border-gray-200'
          placeholder={t('your-message')}
        ></textarea>
        <p className='mb-6'>{t('we-are-here-to-answer')}</p>
        <Button className='w-full mb-6' label={t('send')} />
      </form>
    </div>
  );
}

export default ContactsForm;

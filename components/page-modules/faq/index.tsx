import { FaqAccordion } from './components/faq-accordion';

export function Faq() {
  return (
    <div className='bg-[#F1F1F1]'>
      <div className='lg:w-[900px] mx-auto py-10 px-4'>
        <h1 className='text-[32px] font-bold text-center'>Frequently Asked Questions</h1>

        <FaqAccordion />
      </div>
    </div>
  );
}

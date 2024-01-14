
'use client';
import { faq } from '@/utils/faqData';
import { Accordion } from 'flowbite-react';

function FAQ() {
  return (
    <div className='my-5 lg:mx-36'>
      <h1 className='text-center text-3xl font-bold my-3'>FAQs</h1>
      <Accordion collapseAll>
        {faq?.map((faqs) => (
          <Accordion.Panel key={faqs?.question}>
            <Accordion.Title>{faqs?.question}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {faqs?.answer}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;

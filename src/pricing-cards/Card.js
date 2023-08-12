import React from "react";

const Card = ({ list }) => {
  return (
    //   Outer Container
    <div className={`${list.backgroundcolor} rounded-xl text-white`}>
      {/* Innter Container */}
      <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
        <div className='text-center uppercase'>{list.title}</div>
        <h2 className='mt-10 text-5xl text-center font-serif'>
          {list.quantity}
        </h2>
        <h3 className='mt-2 text-center'>{list.price}</h3>
        <div className='flex justify-center '>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block duration-200 px-10 py-3 my-3 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800'
          >
            Purchase
          </a>
        </div>
      </div>
      {/* Border */}
      <div className='border-t border-slate-700'></div>
      {/* Bottom Container */}
      <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
        {/* List Container */}
        <div className='flex flex-col space-y-2'>
          {/* List Item 1 */}
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 24  24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l5 5l10 -10' />
            </svg>
            <span className='text-sm ml-1'>100 GB of storage</span>
          </div>
          {/* List Item 2 */}
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 24  24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l5 5l10 -10' />
            </svg>
            <span className='text-sm ml-1'>Option to add members</span>
          </div>
          {/* List Item 3 */}
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 24  24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l5 5l10 -10' />
            </svg>
            <span className='text-sm ml-1'>Extra member benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

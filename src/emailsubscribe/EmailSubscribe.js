import React from "react";

const EmailSubscribe = () => {
  return (
    /*     Background Container*/
    <div className='flex items-center justify-center h-screen bg-zinc-700'>
      {/* Card */}
      <div className='bg-zinc-800 p-2 rounded-2xl mx-6'>
        {/* Flex Container */}
        <div className='flex flex-col md:flex-row rounded-xl'>
          {/* Image Container */}
          <img
            src='./imageofemailsubscribe/image.jpg'
            alt=''
            className='object-fit rounded-xl h-80 md:h-64 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
          />
          {/* Content*/}
          <div className='p-6 md:p-12'>
            <h2 className='font-serif text-white text-xl font-medium text-center md:text-left'>
              Get diet and fitness tip in your inbox
            </h2>
            <p className='my-4 text-center text-xs leading-5 text-white tracking-wide md:text-left'>
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter
            </p>
            <div className='flex flex-col md:flex-row space-y-4 md:space-x-3 mt-5 md:space-y-0'>
              <input
                type='email'
                name='email'
                id=''
                placeholder='Enter your email address'
                className='p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none'
              />
              <button className='px-5 py-3 text-xs text-zinc-800 rounded-md bg-lime-500 hover:text-white hover:bg-lime-700 duration-500'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;

import Image from 'next/image';
import React from 'react';
import Feed from '@/components/organism/Feed';

const Home = () => {
  return (
    <div className="w-full h-screen p-12 bg-white text-black flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl">
          Discover <span className="text-red-500">&</span> Share AI-Powered{' '}
          <span className=" text-red-500">Prompts</span>
        </h1>
        <br />
        <p className="px-8 text-zinc-600 text-lg">
          Prompt.io is an open-source AI prompting tool for modern world to discover, create and share{' '}
        </p>
      </div>

      <Feed />
    </div>
  );
};

export default Home;

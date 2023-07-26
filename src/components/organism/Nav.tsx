'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Else, If, Then } from 'react-if';

const Nav = () => {
  const loggedIn = true;

  useEffect(() => {}, []);

  return (
    <div className="bg-white flex items-center justify-between p-10">
      <Link href="/">
        <span className="text-xl font-medium">
          <span className="text-red-500">Prompt</span>.io
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <If condition={loggedIn}>
          <Then>
            <>
              <div className="flex items-center gap-5">
                <Link href="/create">
                  <span className="red-button">Create</span>
                </Link>

                <button className="red-button">Sign out</button>
              </div>
            </>
          </Then>
          <Else>
            <>
              <button className="red-button">Sign In</button>
            </>
          </Else>
        </If>
      </div>
    </div>
  );
};

export default Nav;

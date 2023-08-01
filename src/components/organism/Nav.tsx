'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';

const Nav = () => {
  const loggedIn = true;
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);

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

                <button className="red-button">Sign Out</button>
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

      {/* Mobile Navigation */}
      <div className="sm:hidden flex dropdown dropdown-end">
        <label tabIndex={0} className="red-button m-1 text-black" onClick={() => setToggleDropDown(!toggleDropDown)}>
          Menu
        </label>
        {toggleDropDown && (
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box bg-white w-52 mt-14 text-black">
            <If condition={loggedIn}>
              <Then>
                <li>
                  <Link href="/profile" className="hover:text-red-500">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/create" className="hover:text-red-500 text-sm">
                    Create
                  </Link>
                </li>
                <li>
                  <button className="text-sm hover:bg-red-500 hover:text-white  transition-all ease-in-out duration-150">
                    Sign Out
                  </button>
                </li>
              </Then>
              <Else>
                <li>
                  <button className="hover:text-red-500 text-sm">Sign In</button>
                </li>
              </Else>
            </If>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;

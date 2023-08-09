"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { If, Then, Else } from "react-if";

const Nav = (): React.ReactNode => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const getProvidersData = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    getProvidersData();
  }, []);

  return (
    <div className="bg-zinc-50 flex items-center justify-between px-8 py-5 border z-50 shadow-sm sticky top-0">
      <Link href="/">
        <span className="text-2xl font-medium">
          <span className="text-red-500">Prompt</span>.io
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex gap-5 hidden">
        <If condition={session?.user !== undefined}>
          <Then>
            <>
              <div className="flex items-center gap-7">
                <Link href="/create" className="red-button">
                  <span>Create</span>
                </Link>

                <button className="red-button" onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
              {session?.user?.image && (
                <>
                  <Link href={`/profile?username=${String(session?.user?.name).toLowerCase()}`}>
                    <Image
                      src={session?.user?.image}
                      alt="profile-image"
                      width={40}
                      height={40}
                      className="rounded-full ml-3 cursor-pointer duration-150 ease-in-out hover:scale-110 transform transition-all"
                    />
                  </Link>
                </>
              )}
            </>
          </Then>
          <Else>
            <button className="red-button" onClick={() => signIn()}>
              Sign In
            </button>
          </Else>
        </If>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex dropdown dropdown-end">
        <label tabIndex={0} className="red-button m-1 text-black" onClick={() => setToggleDropdown(!toggleDropdown)}>
          Menu
        </label>
        {toggleDropdown && (
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box bg-white w-52 mt-14 text-black">
            <If condition={session?.user !== undefined}>
              <Then>
                <li>
                  <Link
                    href={`/profile?username=${String(session?.user?.name).toLowerCase()}`}
                    className="hover:text-red-500"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/create" className="hover:text-red-500 text-sm">
                    Create
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-sm hover:bg-red-500 hover:text-white  transition-all ease-in-out duration-150"
                  >
                    Sign Out
                  </button>
                </li>
              </Then>
              <Else>
                <li>
                  <button className="hover:text-red-500 text-sm" onClick={() => signIn()}>
                    Sign In
                  </button>
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

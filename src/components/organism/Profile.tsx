"use client";

import React from "react";
import Image from "next/image";
import { Else, If, Then } from "react-if";

const Profile = ({ user }: any) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[20rem] min-h-[16rem] p-6 shadow-md rounded-xl sm:px-12 dark:bg-zinc-50 dark:text-gray-100">
        <If condition={user.image}>
          <Then>
            <Image
              src={user.image}
              alt="profile-image"
              width={100}
              height={100}
              className="mx-auto border rounded-full dark:bg-gray-500 aspect-square"
            />
          </Then>
          <Else>
            <span className="loading w-[100px] h-[100px] loading-ring"></span>
          </Else>
        </If>
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-lg text-black">{user?.username}</h2>
            <p className="px-5 text-xs sm:text-sm dark:text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

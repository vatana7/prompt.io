import CoffeeIcon from "@/components/atoms/CofffeIcon";
import GithubIcon from "@/components/atoms/GithubIcon";
import Link from "next/link";
import React from "react";
import CopyRightIcon from "../atoms/CopyRightIcon";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 px-10 py-5 bottom-0 inset-x-0 static flex w-full flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 border-t border-blue-gray-50 text-center md:justify-between">
      <div className="font-normal w-max flex gap-4 items-center">
        <div>
          <CopyRightIcon className="h-8 w-8" />
        </div>
        <div>2023 Prompt.io</div>
      </div>
      <ul className="mr-4 flex flex-wrap items-center gap-y-2 gap-x-8">
        <Link href="https://bmc.link/vatana7">
          <li>
            <div className="tooltip" data-tip="Buy me a coffee!">
              <CoffeeIcon className="w-5 h-5" />
            </div>
          </li>
        </Link>
        <Link href="https://github.com/vatana7">
          <li>
            <div className="tooltip" data-tip="Github Profile!">
              <GithubIcon className="w-6 h-6" />
            </div>
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState } from "react";
import ClipboardIcon from "@/components/atoms/ClipboardIcon";
import DeletePromptModal from "@/components/molecules/DeletePromptModal";
import EditPromptModal from "@/components/molecules/EditPromptModal";
import Image from "next/image";
import Link from "next/link";
import { If, Then } from "react-if";
import { useSession } from "next-auth/react";

interface PromptCardProps {
  prompt: {
    creator: {
      email: string;
      username: string;
      image: string;
    };
    prompt: string;
    tags: string;
  };
  isUser?: boolean;
  id: string;
}

const PromptCard = ({ prompt, id }: PromptCardProps) => {
  const { creator, tags, prompt: promptText } = prompt;
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);

  // Check if the user is on their own profile
  const isUser =
    session !== null &&
    session !== undefined &&
    window.location.pathname === "/profile" &&
    window.location.search.split("=")[1] === session.user?.name?.replace(" ", "");

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(promptText);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="rounded-lg p-5 m-2 image-full shadow-md bg-gradient-to-bl from-white via-zinc-50 to-red-50 border">
      <div className="">
        <div className="flex flex-col gap-5">
          {/* Card Header */}
          <div className="flex justify-between items-center">
            <div className="flex flex-row flex-1 gap-3">
              <Link href={`/profile?username=${creator.username}`}>
                <Image
                  src={creator?.image}
                  width={40}
                  height={30}
                  alt="profile-image"
                  className="rounded-full cursor-pointer duration-150 ease-in-out hover:scale-110 transform transition-all"
                />
              </Link>
              <div className="flex flex-col">
                <span>{creator.username}</span>
                <span className="text-xs text-zinc-400">{creator.email}</span>
              </div>
            </div>

            <div className="flex items-center">
              <ClipboardIcon
                onClick={() => copyToClipboard()}
                className=" active:scale-75 hover:text-green-500 w-5 h-5 duration-200 transition ease-in-out"
              />
              {copied && (
                <span className="px-1 text-xs text-green-500 duration-150 ease-in-out transition-transform">
                  Copied
                </span>
              )}
            </div>
          </div>

          {/* Prompt Body */}
          <div className=" px-2 text-sm text-gray-600 h-[10rem] hide-scrollbar overflow-scroll break-words scroll-smooth">
            {promptText}
          </div>
          <div
            className="text-xs text-blue-900 hover:text-blue-700 cursor-pointer"
            onClick={() => {
              const event = new CustomEvent("tags", { detail: tags });
              window.dispatchEvent(event);
            }}
          >
            {tags}
          </div>

          {/* Edit and Delete Buttons for User */}
          {isUser && (
            <div className="flex flex-row justify-end gap-2">
              <label
                className="rounded-md bg-accent btn text-xs shadow-sm btn-xs hover:scale-110 duration-150 transition ease-in-out"
                htmlFor={id}
              >
                Edit
              </label>
              <label
                className="rounded-md btn bg-secondary shadow-sm text-xs text-white btn-xs hover:scale-110 duration-150 transition ease-in-out"
                // onClick={deletePrompt}
                htmlFor={id + "Delete"}
              >
                Delete
              </label>
            </div>
          )}
          {/* Edit Prompt Modal */}
          <EditPromptModal id={id} prompt={prompt} />

          {/* Delete Prompt Modal */}
          {/* Add Delete to make id unique */}
          <DeletePromptModal id={id + "Delete"} />
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

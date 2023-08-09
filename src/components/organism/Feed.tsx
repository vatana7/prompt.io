"use client";

import React from "react";
import PromptCard from "@/components/molecules/PromptCard";
import { Else, If, Then } from "react-if";
import PromptCardSkeleton from "@/components/molecules/PromptCardSkeleton";

interface FeedProps {
  isUser?: boolean;
  loading: boolean;
  prompts: any;
}

const Feed = ({ isUser, loading, prompts }: FeedProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap container w-full">
        <If condition={!loading}>
          <Then>
            <If condition={prompts.length >= 1}>
              <Then>
                {prompts?.map((prompt: any) => {
                  return (
                    <div key={prompt._id} className="w-full md:w-1/2 lg:w-1/3">
                      <PromptCard prompt={prompt} isUser={isUser} id={prompt._id} />
                    </div>
                  );
                })}
              </Then>
              <Else>
                <div className="flex flex-col items-center justify-center w-full">
                  <span className="text-xl font-bold text-gray-500">No prompts found</span>
                  <span className="text-gray-400">Create a prompt to get started</span>
                </div>
              </Else>
            </If>
          </Then>
          <Else>
            {[...new Array(6).fill("ts")].map((item, index) => {
              return (
                <div key={index} className="w-full md:w-1/3">
                  <PromptCardSkeleton />
                </div>
              );
            })}
          </Else>
        </If>
      </div>
    </>
  );
};

export default Feed;

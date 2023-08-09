"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { Feed } from "@/components/organism";
import { Else, If, Then } from "react-if";
import { useDebouncedCallback } from "use-debounce";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [perPage, setPerPage] = useState<number>(9);
  const [totalPost, setTotalPost] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  const search = useDebouncedCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    await getFeeds(e.target.value);
  }, 500);

  const getFeeds = async (search: string = "") => {
    try {
      setLoading(true);
      const body = { perPage, search: search };
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        return res.json();
      });

      setTotalPost(response.count);
      setPrompts(response.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const listenToTags = (e: any) => {
      //get tags detail from event then call getFeeds
      setSearchText(e.detail);
      getFeeds(e.detail);
    };

    window.addEventListener("tags", listenToTags);
    getFeeds();

    return () => {
      window.removeEventListener("tags", listenToTags);
    };
  }, [perPage]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl">
          Discover <span className="text-red-500">&</span> Share AI-Powered{" "}
          <span className=" text-red-500">Prompts</span>
        </h1>
        <br />
        <p className="px-8 text-zinc-600 text-xl">
          Prompt.io is an open-source AI prompting tool for modern world to discover, create and share{" "}
        </p>
      </div>

      {/* Search Bar */}
      <input
        id="search_input"
        type="text"
        placeholder="Search by #tags, prompt or username..."
        onChange={search}
        defaultValue={searchText}
        className="text-sm focus:outline-none focus:none shadow-md input w-full max-w-lg my-14 "
      />
      <Feed prompts={prompts} loading={loading} />
      <If condition={prompts.length === totalPost}>
        <Then>{null}</Then>
        <Else>
          <button className="mt-6 btn btn-sm btn-error text-white" onClick={() => setPerPage(() => perPage + 6)}>
            Load more
          </button>
        </Else>
      </If>
    </>
  );
};

export default Home;

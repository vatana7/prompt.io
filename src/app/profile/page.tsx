"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Feed, Profile } from "@/components/organism";
import { Else, If, Then } from "react-if";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [user, setUser] = useState<any>({
    image: "",
    username: "",
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        const username = window.location.search.split("=")[1];
        setLoading(true);

        const response = await fetch(`/api/prompt/profile?username=${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          return res.json();
        });

        setUser(response.user);
        setPrompts(response.response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const reload = () => {
      setEdit(!edit);
    };

    // Function Executions
    window.addEventListener("reload", reload);
    getFeeds();

    return () => {
      window.removeEventListener("reload", reload);
    };
  }, [session, edit]);

  return (
    <If condition={user.image !== ""}>
      <Then>
        <div className="flex flex-col items-center justify-start container ">
          <Profile user={user} loading={loading} />
          <div className="h-full w-full my-10">
            <Feed isUser prompts={prompts} loading={loading} />
          </div>
        </div>
      </Then>
      <Else>No Access</Else>
    </If>
  );
};

export default ProfilePage;

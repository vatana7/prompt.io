"use client";

import React, { SyntheticEvent, useState, useEffect } from "react";
import { Form } from "@/components/organism";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Else, If, Then } from "react-if";

const CreatePost = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState({
    prompt: "",
    tags: "",
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    //Avoid reload page
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tags: post.tags,
          userId: session?.user?.id as string,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <If condition={session === null || session === undefined}>
      <Then>No access</Then>
      <Else>
        <div>
          <Form handleSubmit={handleSubmit} submitting={submitting} post={post} setPost={setPost} />
        </div>
      </Else>
    </If>
  );
};

export default CreatePost;

"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const EditPromptModal = ({ id, prompt }: any) => {
  const router = useRouter();
  const { prompt: promptText, tags } = prompt;
  const [post, setPost] = useState({
    prompt: promptText,
    tags: tags,
  });

  const handleEdit = async () => {
    try {
      const body = {
        prompt: post.prompt,
        tags: post.tags,
        id: id,
      };
      const res = await fetch("/api/prompt/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        //Dispatch event to page.tsx '/profile' to update the feed
        const event = new CustomEvent("reload", {
          detail: {
            reload: true,
          },
        });

        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle h-full">
        <div className="modal-box">
          <div className="text-xl mb-4">
            Edit a <span className="text-red-500">Prompt!</span>
          </div>
          <div className="flex flex-col gap-5">
            <textarea
              className="textarea textarea-bordered h-[16rem]"
              placeholder="Edit prompt here..."
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, prompt: e.target.value })}
              defaultValue={promptText}
            ></textarea>
            <input
              id="editTag"
              type="text"
              defaultValue={tags}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, tags: e.target.value })}
              placeholder="Tags: #webdevelopment #ghostwriting #midjourney"
              className="input input-bordered text-sm w-full "
            />
            <div className="flex flex-row-reverse gap-5">
              <button className="btn btn-xs w-16 btn-secondary text-white" onClick={handleEdit}>
                Edit
              </button>
              <label className="btn btn-xs btn-accent" htmlFor={id}>
                Cancel
              </label>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </>
  );
};

export default EditPromptModal;

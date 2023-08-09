import Link from "next/link";
import React, { ChangeEvent, SyntheticEvent } from "react";
import { If, Then } from "react-if";

interface FormProps {
  handleSubmit: (e: SyntheticEvent) => void;
  setPost: React.Dispatch<React.SetStateAction<{ prompt: string; tags: string }>>;
  submitting: boolean;
  post: { prompt: string; tags: string };
}

const Form = (props: FormProps) => {
  const { handleSubmit, setPost, submitting, post } = props;

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl">
        Create a <span className="text-red-500">Prompt!</span>
      </h1>
      <p className="text-lg text-zinc-500 max-w-2xl">
        Create and share amazing posts with the world and let your imagination run wild with any AI-powered platform.
      </p>

      <textarea
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, prompt: e.target.value })}
        className="textarea min-h-[300px] "
        placeholder="Create your post here!"
      />

      <input
        type="text"
        placeholder="Tags: #webdevelopment #ghostwriting #midjourney"
        className="input text-sm w-full "
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, tags: e.target.value })}
      />

      <div className="flex flex-row-reverse gap-5">
        <button className="btn btn-secondary btn-sm text-white w-24" onClick={handleSubmit}>
          {submitting ? <span className="loading loading-ring loading-md"></span> : "Create"}
        </button>
        <Link className="btn btn-accent btn-sm" href="/">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default Form;

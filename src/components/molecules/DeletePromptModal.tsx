import React from "react";

const DeletePromptModal = ({ id }: { id: string }) => {
  const deletePrompt = async () => {
    try {
      const res = await fetch(`/api/prompt/delete?id=${id.replace("Delete", "")}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
    }
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle h-full">
        <div className="modal-box">
          <div className="text-xl mb-4">Are you sure?</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row-reverse gap-5">
              <button className="btn btn-xs w-16 btn-secondary text-white" onClick={deletePrompt}>
                Delete
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

export default DeletePromptModal;

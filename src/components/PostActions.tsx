import { useState } from "react";
import ReactModal from "react-modal";

const PostActions = () => {
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);
  return (
    <div className="mb-8">
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:opacity-75"
        onClick={() => setPostModalOpen(true)}
      >
        New Post
      </button>
      <ReactModal isOpen={postModalOpen}>
        <button
          className="absolute top-4 right-4 rounded-full hover:opacity-75"
          onClick={() => setPostModalOpen(false)}
        >
          <img src="/close.svg" alt="close" className="h-8" />
        </button>
      </ReactModal>
    </div>
  );
};

export default PostActions;

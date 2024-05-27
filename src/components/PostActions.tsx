import { useState } from "react";
import NewPostModal from "./NewPostModal";
import { Post } from "../interfaces";

interface PostActionsProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostActions = ({ setPosts }: PostActionsProps) => {
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);
  return (
    <div className="mb-8">
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:opacity-75"
        onClick={() => setPostModalOpen(true)}
      >
        New Post
      </button>
      <NewPostModal
        postModalOpen={postModalOpen}
        setPostModalOpen={setPostModalOpen}
        setPosts={setPosts}
      />
    </div>
  );
};

export default PostActions;

import ReactModal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../interfaces";

interface NewPostModalProps {
  postModalOpen: boolean;
  setPostModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
const NewPostModal = ({
  postModalOpen,
  setPostModalOpen,
  setPosts,
}: NewPostModalProps) => {
  function handlePostCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPostModalOpen(false);
    const title = e.currentTarget.postTitle.value;
    const body = e.currentTarget.body.value;
    const id = uuidv4();
    fetch("https://blog-backend-adqx.onrender.com/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        body,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }
  return (
    <ReactModal
      isOpen={postModalOpen}
      className="bg-gray-800 p-8 text-white h-screen-1/2 w-screen-1/2 flex flex-col gap-4 items-stretch"
      overlayClassName="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center"
    >
      <h2 className="text-2xl text-center">New Post</h2>
      <form
        className="flex flex-col gap-4 items-stretch"
        onSubmit={handlePostCreate}
      >
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          placeholder="Enter Post Title"
          className="h-8 text-gray-900 text-lg p-2"
          required
        />
        <label htmlFor="body">Post Body</label>
        <textarea
          id="body"
          placeholder="Enter Your Post"
          className="resize-none h-40 text-gray-900 p-4"
          required
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:opacity-75"
          type="submit"
        >
          Create
        </button>
      </form>
      <button
        className="absolute top-4 right-4 rounded-full hover:opacity-75"
        onClick={() => setPostModalOpen(false)}
      >
        <img src="/close.svg" alt="close" className="h-8" />
      </button>
    </ReactModal>
  );
};

export default NewPostModal;

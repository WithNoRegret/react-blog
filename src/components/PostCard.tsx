import { Post } from "../interfaces";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostCard = ({ id, title, body, setPosts }: PostCardProps) => {
  function handlePostDelete() {
    fetch("https://blog-backend-adqx.onrender.com/delete-post", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }

  return (
    <div className="bg-white p-8 text-gray-800 h-[400px] w-full flex flex-col gap-4 relative">
      <button
        className="absolute top-4 right-4 h-8 w-8 bg-red-700 rounded-full border-2 border-black flex justify-center items-center hover:opacity-75"
        onClick={handlePostDelete}
      >
        x
      </button>
      <h2 className="text-2xl text-center ga">{title}</h2>
      <p className="text-lg overflow-clip">{body}</p>
    </div>
  );
};

export default PostCard;

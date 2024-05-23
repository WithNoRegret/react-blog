import { Post } from "../interfaces";

const PostCard = ({ post: { title, body } }: { post: Post }) => {
  return (
    <div className="bg-white p-8 text-gray-800 h-[400px] w-full flex flex-col gap-4">
      <h2 className="text-2xl text-center ga">{title}</h2>
      <p className="text-lg overflow-clip">{body}</p>
    </div>
  );
};

export default PostCard;

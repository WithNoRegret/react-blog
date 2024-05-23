import { useEffect, useState } from "react";
import { Post } from "../interfaces";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);
  return (
    <div className="grid grid-cols-auto-fit-400 justify-center gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

import { useEffect } from "react";
import { Post } from "../interfaces";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList = ({ posts, setPosts }: PostListProps) => {
  useEffect(() => {
    fetch("https://blog-backend-adqx.onrender.com/posts-list")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);
  return (
    <div className="grid grid-cols-auto-fit-400 justify-center gap-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
};

export default PostList;

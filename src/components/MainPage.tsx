import PostActions from "./PostActions";
import PostList from "./PostList";
import { useState } from "react";
import { Post } from "../interfaces";

const MainPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <main className="p-8 text-white grow">
      <PostActions setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </main>
  );
};

export default MainPage;

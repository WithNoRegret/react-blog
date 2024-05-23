import PostActions from "./PostActions";
import PostList from "./PostList";

const MainPage = () => {
  return (
    <main className="p-8 text-white grow">
      <PostActions />
      <PostList />
    </main>
  );
};

export default MainPage;

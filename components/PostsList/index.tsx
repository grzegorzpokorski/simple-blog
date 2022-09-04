import { Post, PostType } from "./Post";

type PostsListProps = {
  posts: PostType[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul
      className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-16`}
    >
      {posts && posts.map((post) => <Post key={post.title} {...post} />)}
    </ul>
  );
};

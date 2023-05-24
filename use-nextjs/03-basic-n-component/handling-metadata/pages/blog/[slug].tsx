import { GetServerSideProps } from "next";
import PostHead from "../../components/PostHead";
import posts from "../../data/posts";

interface Post {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
}

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
};

export default Post;

interface Params {
  params: {
    slug: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params!;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

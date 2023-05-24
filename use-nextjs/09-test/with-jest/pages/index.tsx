import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/article";
import { GetServerSideProps, NextPage } from "next";

const Home: NextPage<{ articles: Article[] }> = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle w-full pt-20 text-gray-700 text-center">
        <h1 className="text-6xl font-bold drop-shadow-md">My awesome blog</h1>
        <h2 className="text-lg mt-2 drop-shadow-md">
          This is an example blog for the Real-World Next.js book
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 w-4/6 m-auto pt-20 pb-20">
        {articles.map((article) => {
          return <ArticleCard key={article.id} {...article} />;
        })}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const articlesReq = await fetch("http://localhost:3000/api/articles");
  console.log("articlesReq", articlesReq);
  const articles = await articlesReq.json();

  return {
    props: {
      articles,
    },
  };
};

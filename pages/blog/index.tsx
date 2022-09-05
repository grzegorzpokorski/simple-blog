import Link from "next/link";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { ArticlesList } from "../../components/ArticlesList";

import { client } from "../../utils/apolloClient";
import {
  GetArticlesDocument,
  GetArticlesQuery,
  ArticleFragment,
  GetCategoriesDocument,
  GetCategoriesQuery,
} from "../../generated/graphql";

type BlogProps = {
  articles: ArticleFragment[];
  categories: { name: string; slug: string }[];
};

const Blog = ({ articles, categories }: BlogProps) => {
  return (
    <Layout>
      <main>
        <Section>
          <Header title="Blog" titleAs="h1" withPaddingBelow />

          <ul className="flex flex-row justify-center flex-wrap gap-4">
            {categories &&
              categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/kategoria/${category.slug}`}>
                    <a className="flex-inline text-slate-800 bg-slate-300 hover:bg-slate-400 px-4 py-2">
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          <ArticlesList articles={articles} />
        </Section>
      </main>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const articlesResult: GetArticlesQuery = (
    await client.query({
      query: GetArticlesDocument,
    })
  ).data;

  const categoriesResult: GetCategoriesQuery = (
    await client.query({
      query: GetCategoriesDocument,
    })
  ).data;

  return {
    props: {
      articles: articlesResult.articles,
      categories: categoriesResult.categories,
    },
  };
};

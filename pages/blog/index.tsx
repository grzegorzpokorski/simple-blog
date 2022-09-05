import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { ArticlesList } from "../../components/ArticlesList";

import { client } from "../../utils/apolloClient";
import {
  GetArticlesDocument,
  GetArticlesQuery,
  ArticleFragment,
} from "../../generated/graphql";

const Blog = ({ articles }: { articles: ArticleFragment[] }) => {
  return (
    <Layout>
      <main>
        <Section>
          <Header title="Blog" titleAs="h1" />
          <ArticlesList articles={articles} />
        </Section>
      </main>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const result: GetArticlesQuery = (
    await client.query({
      query: GetArticlesDocument,
    })
  ).data;

  return {
    props: {
      articles: result.articles,
    },
  };
};

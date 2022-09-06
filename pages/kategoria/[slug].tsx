import {
  GetCategoriesSlugsDocument,
  GetCategoriesSlugsQuery,
  ArticleFragment,
  GetArticlesByCategorySlugDocument,
  GetArticlesByCategorySlugQuery,
  GetCategoryNameBySlugDocument,
  GetCategoryNameBySlugQuery,
} from "../../generated/graphql";
import { client } from "../../utils/apolloClient";
import { Layout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { ArticlesList } from "../../components/ArticlesList";

type CategoryArchiveProps = {
  articles: ArticleFragment[];
  categoryName: string;
};

const CategoryArchive = ({ articles, categoryName }: CategoryArchiveProps) => {
  return (
    <Layout>
      <main>
        <Section>
          <Header title={categoryName} titleAs="h1" />
          <ArticlesList articles={articles} />
        </Section>
      </main>
    </Layout>
  );
};

export default CategoryArchive;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const articlesResult: GetArticlesByCategorySlugQuery = (
    await client.query({
      query: GetArticlesByCategorySlugDocument,
      variables: {
        categorySlug: slug,
      },
    })
  ).data;

  const categoryResult: GetCategoryNameBySlugQuery = (
    await client.query({
      query: GetCategoryNameBySlugDocument,
      variables: {
        categorySlug: slug,
      },
    })
  ).data;

  return {
    props: {
      articles: articlesResult.articles,
      categoryName: categoryResult.category?.name,
    },
  };
};

export const getStaticPaths = async () => {
  const result: GetCategoriesSlugsQuery = (
    await client.query({
      query: GetCategoriesSlugsDocument,
    })
  ).data;

  return {
    paths: result.categories.map((cat) => ({
      params: {
        slug: cat.slug,
      },
    })),
    fallback: false,
  };
};

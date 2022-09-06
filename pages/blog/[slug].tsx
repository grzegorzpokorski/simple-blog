import {
  GetArticleBySlugDocument,
  GetArticleBySlugQuery,
  GetArticlesSlugsDocument,
  GetArticlesSlugsQuery,
  SingleArticleFragment,
} from "../../generated/graphql";
import { client } from "../../utils/apolloClient";
import { getReadableDateFromISOFormat } from "../../utils/getReadableDateFromISOFormat";

import Link from "next/link";
import Image from "next/image";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Layout } from "../../components/Layout";

type BlogPageProps = {
  article: SingleArticleFragment;
};

const BlogPage = ({ article }: BlogPageProps) => {
  return (
    <Layout>
      <Section className="mt-16">
        <figure className={`w-full h-72 max-h-72 overflow-hidden relative`}>
          <Image
            src={article.thumbnail.url}
            layout="fill"
            className={`object-cover object-center w-full h-full rounded-md`}
          />
        </figure>
      </Section>
      <Header title={article.title} titleAs="h1" />
      <Section className="py-8">
        <>
          <div className="flex items-center justify-center gap-4 text-slate-700 mb-8">
            <Link href={`/kategoria/${article.category?.slug}`}>
              <a className="font-medium text-blue-500 hover:text-blue-800">
                {article.category?.name}
              </a>
            </Link>
            <span
              className="w-1 h-1 bg-slate-700 rounded-full"
              aria-hidden={true}
            ></span>
            <time dateTime={article.createdAt}>
              {getReadableDateFromISOFormat(article.createdAt)}
            </time>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: article.content?.html as string,
            }}
          ></div>
        </>
      </Section>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const result: GetArticleBySlugQuery = (
    await client.query({
      query: GetArticleBySlugDocument,
      variables: {
        slug: slug,
      },
    })
  ).data;

  return {
    props: {
      article: result.article,
    },
  };
};

export const getStaticPaths = async () => {
  const paths: GetArticlesSlugsQuery = (
    await client.query({
      query: GetArticlesSlugsDocument,
    })
  ).data;

  return {
    paths: paths.articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
};

import Link from "next/link";
import Image from "next/image";
import { ArticleFragment } from "../../generated/graphql";
import { getReadableDateFromISOFormat } from "../../utils/getReadableDateFromISOFormat";

type ArticlesListProps = {
  articles: ArticleFragment[];
};

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <ul
      className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-16`}
    >
      {articles.map((article) => (
        <Item key={article.slug} {...article} />
      ))}
    </ul>
  );
};

const Item = (article: ArticleFragment) => {
  return (
    <li className="border border-2 border-slate-200 rounded-md hover:shadow-lg transition-[box-shadow] group">
      <Link href={`/blog/${article.slug}`} className="pointer" passHref>
        <a>
          <article className={`flex flex-col w-full`}>
            <figure
              className={`w-full h-72 max-h-72 overflow-hidden relative rounded-t-md`}
            >
              <Image
                src={article.thumbnail.url}
                layout="fill"
                className={`object-cover object-center w-full h-full group-hover:scale-[102%] transition-[transform] duration-300`}
              />
            </figure>
            <header className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-4 text-sm text-slate-700">
                <span>{article.category?.name}</span>
                <span
                  className="w-1 h-1 bg-slate-700 rounded-full"
                  aria-hidden={true}
                ></span>
                <time dateTime={article.createdAt}>
                  {getReadableDateFromISOFormat(article.createdAt)}
                </time>
              </div>
              <h3 className="font-bold text-lg">{article.title}</h3>
            </header>
          </article>
        </a>
      </Link>
    </li>
  );
};

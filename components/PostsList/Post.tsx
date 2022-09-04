import Link from "next/link";
import Image from "next/image";

export type PostType = {
  thumbnail: {
    src: string;
  };
  title: string;
  excerpt: string;
  publicationDate: string;
  href: string;
};

export const Post = ({
  title,
  excerpt,
  thumbnail,
  publicationDate,
  href,
}: PostType) => {
  return (
    <li className="border border-2 border-slate-200 rounded-md hover:shadow-lg transition-[box-shadow] group">
      <Link href={href} className="pointer" passHref>
        <a>
          <article className={`flex flex-col w-full`}>
            <figure
              className={`w-full h-72 max-h-72 overflow-hidden relative rounded-t-md`}
            >
              <Image
                src={thumbnail.src}
                layout="fill"
                className={`object-cover object-center w-full h-full group-hover:scale-105 transition-[transform] duration-300`}
              />
            </figure>
            <header className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-4 text-sm text-slate-700">
                <span>Kategoria</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <time dateTime={publicationDate}>04 wrzesień 2022</time>
              </div>
              <h3 className="font-bold text-lg">{title}</h3>
            </header>
          </article>
        </a>
      </Link>
    </li>
  );
};

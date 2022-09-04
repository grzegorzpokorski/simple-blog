import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  description?: ReactNode;
  titleAs: "h1" | "h2" | "h3";
  withPaddingBelow?: boolean;
};

export const Header = ({
  title,
  titleAs,
  description,
  withPaddingBelow,
}: HeaderProps) => {
  const H = titleAs;

  return (
    <header
      className={`flex flex-col w-full md:w-2/3 mx-auto gap-4 pt-16 text-center ${
        withPaddingBelow ? "pb-16" : ""
      }`}
    >
      <H className={`font-bold text-2xl`}>{title}</H>
      {description && <div className={`prose max-w-none`}>{description}</div>}
    </header>
  );
};

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section {...{ className }}>
      <div className={`container mx-auto px-3`}>{children}</div>
    </section>
  );
};

type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <footer
      className={`flex flex-col lg:flex-row py-8 bg-slate-300 text-slate-800`}
    >
      <div className={`container mx-auto px-3`}>
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()}. Createg by Grzegorz
          Pokorski.
        </p>
      </div>
    </footer>
  );
};

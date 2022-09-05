import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <Section>
          <Header title="Strona główna" titleAs="h1" withPaddingBelow />
        </Section>
      </main>
    </Layout>
  );
};

export default Home;

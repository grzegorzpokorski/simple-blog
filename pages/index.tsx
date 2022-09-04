import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <Section>
          <Header
            title="Artykuły"
            titleAs="h1"
            description={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  quasi animi possimus dicta provident odio. Autem, veniam,
                  incidunt dicta consectetur sequi minus pariatur hic totam odit
                  laborum iste, quod quam!
                </p>
              </>
            }
            withPaddingBelow
          />
        </Section>
      </main>
    </Layout>
  );
};

export default Home;

import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { PostsList } from "../components/PostsList";

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
          />
          <PostsList
            posts={[
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Sample title",
                excerpt:
                  "Donec pulvinar arcu neque, vitae efficitur orci sagittis a. Pellentesque vitae enim sed tortor varius cursus sit amet quis lectus. Nam posuere commodo lacus et efficitur. Mauris non pretium lorem.",
                publicationDate: "2022-10-10",
                href: "/",
              },
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Sed a dignissim justo",
                excerpt:
                  "Nulla facilisi. Sed a dignissim justo, vitae molestie massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vehicula sapien purus, ac elementum lectus pellentesque ut. In et.",
                publicationDate: "2022-10-10",
                href: "/",
              },
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Accumsan purus ac magna sagittis",
                excerpt:
                  "Curabitur tempus enim eget faucibus finibus. Sed accumsan purus ac magna sagittis, in cursus libero vulputate. Donec luctus odio vel purus dictum, vel convallis enim ultrices. Curabitur ultrices luctus dui.",
                publicationDate: "2022-10-10",
                href: "/",
              },
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Nullam rhoncus ultrices purus bibendum egestas",
                excerpt:
                  "In posuere dui dui, sed sagittis risus ultrices id. Nullam rhoncus ultrices purus bibendum egestas. Suspendisse vel iaculis odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla.",
                publicationDate: "2022-10-10",
                href: "/",
              },
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Autem quasi animi possimus dicta provident",
                excerpt:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi animi possimus dicta provident odio. Autem, veniam, incidunt dicta consectetur.",
                publicationDate: "2022-10-10",
                href: "/",
              },
              {
                thumbnail: {
                  src: "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
                title: "Consectetur adipisicing elit",
                excerpt:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi animi possimus dicta provident odio. Autem, veniam, incidunt dicta consectetur.",
                publicationDate: "2022-10-10",
                href: "/",
              },
            ]}
          />
        </Section>
      </main>
    </Layout>
  );
};

export default Home;

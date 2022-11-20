import type { NextPage } from "next";
import Head from "next/head";

import { Header, Container, ParticlesComponent } from "@components";
import { FolderWrapper, FolderContent } from "@page-styles";

const Home: NextPage = () => {
  return (
    // <ParticlesComponent id="tsparticles" />
    <Container>
      <Head>
        <title>DevRemote</title>
        <meta name="description" content="DevRemote - building ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ParticlesComponent id="tsparticles" />

      <main>
        <FolderWrapper>
          {/* <FolderImage /> */}
          <FolderContent>
            <h1>
              A <span>{"<software/>"}</span> company that will help you to take
              your business out of paper.
            </h1>
            {/* <Link href="/prices" passHref>
              <InfoButton>
                Know More <BiLinkExternal style={{ marginLeft: "0.3rem" }} />
              </InfoButton>
            </Link> */}
          </FolderContent>
        </FolderWrapper>
        <FolderWrapper>
          {/* <FolderImage /> */}
          <FolderContent style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
            <h1>
              A <span>{"<software/>"}</span> company that will help you to take
              your business out of paper.
            </h1>
            {/* <Link href="/prices" passHref>
              <InfoButton>
                Know More <BiLinkExternal style={{ marginLeft: "0.3rem" }} />
              </InfoButton>
            </Link> */}
          </FolderContent>
        </FolderWrapper>
        <FolderWrapper>
          {/* <FolderImage /> */}
          <FolderContent>
            <h1>
              A <span>{"<software/>"}</span> company that will help you to take
              your business out of paper.
            </h1>
            {/* <Link href="/prices" passHref>
              <InfoButton>
                Know More <BiLinkExternal style={{ marginLeft: "0.3rem" }} />
              </InfoButton>
            </Link> */}
          </FolderContent>
        </FolderWrapper>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {""}
          <span>@DevRemote</span>
        </a>
      </footer>
    </Container>
  );
};

export default Home;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Container } from '@components';
import { FolderWrapper, FolderContent, FolderImage } from '@page-styles';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>DevRemote</title>
        <meta name="description" content="DevRemote - building ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <FolderWrapper>
          <FolderImage />
          <FolderContent>
            <h1>A <span>{"<software/>"}</span> company that will help you to take your business out of paper.</h1>
          </FolderContent>
        </FolderWrapper>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {''}
          <span>
            @DevRemote
          </span>
        </a>
      </footer>
    </Container>
  )
}

export default Home

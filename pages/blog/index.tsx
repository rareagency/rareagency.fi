import { Layout } from '../../layouts/article/layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import Blog from './Blog';
import { sortBy } from 'lodash';

interface IBlog {
  url: string;
  title: string;
  profilePic: string;
  time: string;
  name: string;
}

interface Writer {
  name: string;
  username: string;
}

const getBlogsByUsernames = async (writers: Writer[]) => {
  return Promise.all(
    writers.map(async writer => {
      const baseUrl = 'https://dev.to';
      let response;
      try {
        response = await axios.get(`${baseUrl}/${writer.username}`);
      } catch (e) {
        console.log(e.message);
      }

      if (!response || response.data === undefined) {
        return;
      }

      const dom = cheerio.load(response.data);
      const nodes = dom('.crayons-story__body');

      let blogs: IBlog[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const url =
          nodes[i].children[2].next.children[1].children[1].attribs.href;
        const time =
          nodes[i].children[0].next.children[0].next.children[1].next.next
            .children[2].next.children[0].attribs.datetime;
        const profilePic =
          nodes[i].children[1].children[1].children[2].parent.children[1]
            .children[1].children[1].attribs.src;
        let title = nodes[i].children[2].next.children[1].children[1]
          .children[0].data as string;

        if (title) {
          title = title.trim();
        }

        blogs.push({ url, time, profilePic, title, name: writer.name });
      }
      return blogs;
    })
  );
};

const Header = () => (
  <section className="header-main">
    <h1>Blogi</h1>
  </section>
);

const Page: React.FC = () => {
  const writers = [
    { name: 'Riku Rouvila', username: 'rikurouvila' },
    { name: 'Hannes Aaltonen', username: 'haalto' }
  ];
  const [blogs, setBlogs] = useState<IBlog[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = (await getBlogsByUsernames(writers)) as any;
      const sortedBlogs = sortBy(fetchedBlogs.flat(), 'time').reverse();
      setBlogs(sortedBlogs as IBlog[]);
    };
    fetchData();
  }, []);

  const renderBlogs = () => {
    if (blogs) {
      return blogs.map((blog: any, i) => {
        return <Blog key={i} blog={blog} />;
      });
    }
  };

  return (
    <Layout title={'Rare Tampere - Avoimet työpaikat'} header={<Header />}>
      <section className="content">
        <article className="article">{renderBlogs()}</article>
      </section>

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        li a {
          text-decoration: none;
        }
        .content {
          padding: 3rem 0;
          display: flex;
          justify-content: space-between;
        }

        .article {
          width: 90%;
        }

        @media (max-width: 800px) {
          .article {
            width: 100%;
          }

          :global(.article-center) {
            background-color: rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Page;

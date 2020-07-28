import React from 'react';

type BlogType = {
  url: string;
  title: string;
  profilePic: string;
  date: string;
  name: string;
};

type BlogProps = {
  blog: BlogType;
  index: number;
};

export const Blog: React.FC<BlogProps> = ({ blog, index }) => {
  return (
    <div id="blog-main" style={{ animationDelay: `${200 * index}ms` }}>
      <img id="profile-pic" alt="profile" src={blog.profilePic} />
      <div>
        <a target="blank" id="link" href={`https://dev.to${blog.url}`}>
          {blog.title}
        </a>
        <div id="info">
          <span id="date">{new Date(blog.date).toLocaleDateString()}</span>
          <span id="author">{blog.name}</span>
        </div>
      </div>
      <style jsx>{`
        #blog-main {
          display: flex;
          align-items: center;
          margin-bottom: 4rem;
          opacity: 0;
          text-align: left;

          animation: fadein 1.5s;
          animation-fill-mode: forwards;
        }

        #profile-pic {
          border-radius: 50%;
          margin-right: 1rem;
          height: 3rem;
          margin-right: 2rem;
        }

        #info {
          display: flex;
          align-items: center;
          color: grey;
          margin-top: 0.4rem;
        }

        #date {
          margin-right: 2rem;
        }

        #link {
          font-weight: 600;
          color: black;
          text-decoration: none;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

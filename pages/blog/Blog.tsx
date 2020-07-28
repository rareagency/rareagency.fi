import React from 'react';

export type BlogType = {
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

const Blog: React.FC<BlogProps> = ({ blog, index }) => {
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
          -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 1.5s; /* Firefox < 16 */
          -ms-animation: fadein 1.5s; /* Internet Explorer */
          -o-animation: fadein 1.5s; /* Opera < 12.1 */
          animation: fadein 1.5s;
          animation-fill-mode: forwards;
        }

        #profile-pic {
          border-radius: 50%;
          margin-right: 1rem;
          height: 3rem;
        }

        #info {
          display: flex;
          align-items: center;
          color: grey;
          margin-top: 0.4rem;
          margin-left: 1rem;
        }

        #date {
          margin-right: 2rem;
        }

        #link {
          font-weight: 600;
          color: black;
          text-decoration: none;
          margin-left: 1rem;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
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

export default Blog;

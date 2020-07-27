import React from 'react';

interface Blog {
  url: string;
  title: string;
  profilePic: string;
  time: string;
  name: string;
}

interface BlogProps {
  blog: Blog;
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div id="blog-main">
      <img id="profile-pic" alt="profile-picture" src={blog.profilePic} />
      <div>
        <a id="link" href={`https://dev.to${blog.url}`}>
          {blog.title}
        </a>
        <div id="info">
          <span id="date">{new Date(blog.time).toLocaleDateString()}</span>
          <span id="author">{blog.name}</span>
        </div>
      </div>
      <style jsx>{`
        #blog-main {
          display: flex;
          align-items: center;
          margin-bottom: 4rem;
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
      `}</style>
    </div>
  );
};

export default Blog;

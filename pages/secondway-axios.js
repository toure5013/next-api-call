import axios from 'axios';
import Head from 'next/head'


export default function Home({posts, repos}) {

  console.log(posts);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          API <a href="https://api.github.com/users/NourheneMbarek/repos"> CALL</a>
        </h1>

        <h1>  1st URL DATA :  https://node-hnapi.herokuapp.com/news?page=1</h1>

        <div className="grid">
        {posts.map((post) => (
             <a href="#" className="card">
              <h3>User : {post.user}</h3>
              <p> <strong>title</strong>  : {post.title} - {post.domain}.</p>
              <p>comment : {post.comments_count}</p>
            </a>
          ))}
        </div>

        <br/>
        <br/>

        <h1>  2nd URL DATA : https://api.github.com/users/NourheneMbarek/repos </h1>
        <div className="grid">
        {repos.map((repo) => (
             <a href="#" className="card">
              <h3>Repo : {repo.full_name}</h3>
              <p> <strong>private</strong>  : {String(repo.private)}</p>
              <p>Owner : {repo.owner.login}</p>
            </a>
          ))}
        </div>
        
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


export async function getStaticProps() {
  // 1st url
  const url = "https://node-hnapi.herokuapp.com/news?page=1";
  const res = await axios.get(url);
  const posts = await res.data;
//   console.log(posts);


   //second url 
  const url2 = "https://api.github.com/users/NourheneMbarek/repos";
  const res2 = await axios.get(url2);
  const repos = await res2.data;
  console.log(repos);

  return {
    props: {
      posts,
      repos
    },
  }
}

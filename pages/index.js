import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>listt.io</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        </link>
      </Head>

      <main>
        <h1 className="title">
          welcome to <a href="http://www.listt.io/">listt.io</a>
        </h1>

        <p className="description">
          an open source marketplace for the circular economy
    </p>

        <div className="grid">
          {/* platform and web development - link to github examples*/}
          <a href="https://github.com/hayeskg/" className="card">
            <h3>exchange &rarr;</h3>
            <p>Have something to offer? </p>
            <p>Share.</p>
          </a>
          {/* Blog on sustainable, open-source tech - NC news*/}
          <a href="https://nodered.org/" className="card">
            <h3>open source &rarr;</h3>
            <p>Find out how to innovate</p>
            <p>sustainibly.</p>
          </a>
          {/* Tech development services - link to portfolio work or kristofhayes.me*/}
          <a href="https://www.kristofhayes.me/" className="card">
            <h3>develop &rarr;</h3>
            <p>Got an idea to grow?</p>
            <p>Say hi.</p>
          </a>
          {/* degrowth, movements, blog format - NC news*/}
          <a href="https://www.degrowth.info/en/" className="card">
            <h3>degrowth &rarr;</h3>
            <p>
              Consume less.
        </p>
          </a>
        </div>
      </main>

      <footer>
        <div>
          <figure>
            <a href="https://github.com/hayeskg/">
              <img src='/images/github.png' alt="GitHub logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="https://www.linkedin.com/in/hayeskg/">
              <img src='/images/linkedin.png' alt="LinkedIn logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="https://soundcloud.com/hayeskg">
              <img src='/images/soundcloud.png' alt="soundcloud logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="mailto:kristof.g.hayes@gmail.com?Subject=Hello">
              <img src='/images/email.png' alt="email logo" />
            </a>
          </figure>
        </div>
      </footer>
      <style jsx>
        {
          ` .container {
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
        flex-direction: row; 
        flex-wrap: wrap;
        justify-content: center;
      }

      footer img {
        margin: 1rem;
        height: 2rem;
        width: auto;

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
        color: green;
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
        color: green;
        border-color: green;
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

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

      `
        }
      </style>

      <style jsx global>
        {

          ` html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      `
        }
      </style>
    </div>
  )
}
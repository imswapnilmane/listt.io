import Head from 'next/head'

export default function Home() {

  const [dropdowns, setDropdowns] = React.useState({
    build: false,
    project: false, 
    grow: false,
    purpose: false
  });

  function toggleDropdowns(key, boolVal) {
    let dropdownsTemp = {
      build: false,
      project: false, 
      grow: false,
      purpose: false
    };
    dropdownsTemp[key] = !dropdowns[key];
    setDropdowns(dropdownsTemp);
  }

  return (
    <div className="container">
      <Head>
        <title>listt.io</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        </link>
        <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
        <script>
          {/* SC.initialize({
            client_id: 'YOUR_CLIENT_ID',
            redirect_uri: 'https://example.com/callback'
          }); */}
        </script>
      </Head>
      <main>
        <h1 className="title">
          welcome to <a href="http://www.listt.io/">listt.io</a>
        </h1>
        <p className="description">
          appropriate technology solutions for regeneration
        </p>
        <div className="grid">
          <a 
            // href="https://github.com/hayeskg/"
            onClick = {()=> toggleDropdowns("build", !dropdowns.build)} 
            className="card"
          >
            <h3>build &rarr;</h3>
            <p>Open source systems.</p>
            <p>Full stack prototypes.</p>
            {
              dropdowns.build?
                <div className="subhead">
                  <p>sensors ⌒ IoT ⌒ robotics ⌒ platform ⌒ data </p>
                  <p className="emoji">	&#x1F4BB;	&#x1F6E0; &#x1F916;</p>
                </div>: 
                <div>
                </div>
            }
          </a>
          <a 
            // href="https://www.kristofhayes.me/" 
            onClick = {()=> toggleDropdowns("project", !dropdowns.project)} 
            className="card"
          >
            <h3>project &rarr;</h3>
            <p>Explore synergies.</p>
            <p>Demonstrate value.</p>
            {
              dropdowns.project?
                <div className="subhead">
                  <p>agtech ⌒ innovation ⌒ food ⌒ education</p>
                  <p className="emoji">	&#x1F69C;	&#x1F5FA; &#x1F33D;</p>
                </div>: 
                <div>
                </div>
            }
          </a>
          <a 
            // href="https://hayeskg.medium.com/" 
            onClick = {()=> toggleDropdowns("grow", !dropdowns.grow)} 
            className="card"
          >
            <h3>grow &rarr;</h3>
            <p>Enable exchange.</p>
            <p>Regenerate.</p>
            {
              dropdowns.grow?
                <div className="subhead">
                  <p>soil ⌒ carbon ⌒ network ⌒ impact</p>
                  <p className="emoji"> &#x1F331;	&#x1F41D; &#x1F332;</p>
                </div>: 
                <div>
                </div>
            }
          </a>
          <a 
            // href="https://www.unep.org/explore-topics/climate-change/facts-about-climate-emergency" 
            onClick = {()=> toggleDropdowns("purpose", !dropdowns.purpose)} 
            className="card"
          >
            <h3>purpose &rarr;</h3>
            <p>Act now.</p>
            <p>Make a change.</p>
            {
              dropdowns.purpose?
                <div className="subhead">
                  <p>climate ⌒ ecosystem ⌒ community </p>
                  <p className="emoji"> &#x1F30D; &#x1F30A; &#x1F307;</p>
                </div>: 
                <div>
                </div>
            }
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
            <a href="https://gitlab.com/kristof-e-nano">
              <img src='/images/gitlab.png' alt="GitLab logo" />
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a href="https://hayeskg.medium.com/">
              <img src='/images/medium.png' alt="Medium logo" />
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
            <a href="https://www.kristofhayes.me/">
              <img src='/images/web.png' alt="weblogo" />
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
        padding: 10rem 0;
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
        color: olivedrab;
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
        font-size: 1.2rem;
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

        max-width: 1200px;
        margin-top: 3rem;
      }

      .card {
        height: 15rem;
        // width: 40rem;
        margin: 0.5rem;
        flex-basis: 45%;
        padding: 2rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 50px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: purple;
        border-color: purple;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
        color: grey;
      }

      .subhead {
        text-align: left;
        // width: 15rem;
        color: purple;
        // color: goldenrod;
        // margin-left: 5rem;
        margin-top: 2.5rem;
        font-size: 2rem;
        
      }

      .subhead p {
        font-size: 1rem;
        text-align: center;
        color: purple;
      }

      .emoji {
        text-align: center;
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
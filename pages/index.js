import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Mermaid Server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Mermaid Server</h1>
        <p>
          Mermaid Server is a REST API that allows you to generate diagrams using Mermaid syntax.
          It provides an easy way to create and store diagrams programmatically.
        </p>

        <h2>How It Works</h2>
        <ol>
          <li>Send a POST request to the API endpoint (<code>/api/generate</code>) with the diagram type and data.</li>
          <li>The server generates the diagram using Mermaid and Puppeteer.</li>
          <li>The generated diagram is stored in Upstash Redis with a unique URL.</li>
          <li>The server responds with the URL of the generated diagram.</li>
          <li>Use the diagram URL to access and display the diagram in your application.</li>
        </ol>

        <h2>Demo Cases</h2>
        <h3>Flowchart</h3>
        <pre>
          graph TD;
          A-->B;
          B-->C;
          C-->D;
        </pre>

        <h3>Sequence Diagram</h3>
        <pre>
          sequenceDiagram
          participant Alice
          participant Bob
          Alice->>John: Hello John, how are you?
          loop Healthcheck
              John->>John: Fight against hypochondria
          end
          Note right of John: Rational thoughts<br/>prevail!
          John-->>Alice: Great!
          John->>Bob: How about you?
          Bob-->>John: Jolly good!
        </pre>

        <h2>API Endpoint</h2>
        <p>
          To generate a diagram, make a POST request to the following endpoint:
        </p>
        <pre>https://your-vercel-app-url.vercel.app/api/generate</pre>
        <p>Request Body:</p>
        <pre>
          {`{
            "diagramType": "flowchart",
            "diagramData": "graph TD; A-->B; B-->C; C-->D;"
          }`}
        </pre>
      </main>
    </div>
  );
};

export default HomePage;
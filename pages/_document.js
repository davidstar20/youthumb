import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <style>
            {`
              .tabs {
                display: flex;
                justify-content: space-around;
                padding: 10px;
                background-color: #f5f5f5;
              }
              .tab-content {
                display: none;
                padding: 20px;
                background-color: #e9e9e9;
              }
              .active {
                display: block;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <div className="tabs">
            <button onClick={() => this.showTab('download')}>Download Thumbnail</button>
            <button onClick={() => this.showTab('tags')}>Find Video Tags</button>
            <button onClick={() => this.showTab('privacy')}>Privacy Policy</button>
          </div>
          <div id="download" className="tab-content">
            Content for downloading thumbnails.
          </div>
          <div id="tags" className="tab-content">
            Content for finding video tags.
          </div>
          <div id="privacy" className="tab-content">
            <h2>Privacy Policy for YouTube Thumbnail Download</h2>
            ... [All your provided content here]
          </div>
          <NextScript />
          <script>
            {`
              function showTab(tabId) {
                const contents = document.querySelectorAll('.tab-content');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
              }
            `}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

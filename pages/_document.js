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
              .title-container {
                padding: 20px;
                background-color: #FF0000;  /* YouTube red color */
                color: white;
                text-align: center;
                margin: 20px;
                border-radius: 5px;
              }
              .title {
                font-size: 24px;
                margin-bottom: 10px;
              }
              .example {
                font-size: 14px;
                color: #E0E0E0;  /* Lighter color for contrast */
              }
            `}
          </style>
        </Head>
        <body>
          <div className="title-container">
            <div className="title">
              Capture and download thumbnail images from your favorite videos! <strong>For free and fast</strong>.
            </div>
            <div className="example">
              Example: https://www.youtube.com/watch?v=5dbEhBKGOtY
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

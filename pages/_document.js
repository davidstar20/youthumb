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
              .step-guide {
                padding: 20px;
                background-color: #f5f5f5;
                margin: 20px;
                border-radius: 5px;
              }
              .step {
                margin: 10px 0;
                font-size: 18px;
              }
              .step-icon {
                color: #4CAF50;
                font-size: 24px;
                margin-right: 10px;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <div className="step-guide">
            <div className="step">
              <span className="step-icon">🚀</span>
              **Step 1**: Enter the Link - Begin by pasting your desired video link into the provided input field.
            </div>
            <div className="step">
              <span className="step-icon">🖱️</span>
              **Step 2**: Click "Download Thumbnails" - After entering your link, simply click the "Download Thumbnails" button.
            </div>
            <div className="step">
              <span className="step-icon">🎉</span>
              **Step 3**: Enjoy Your HD Thumbnail - Your high-definition thumbnail will be ready for download. Click the download link and get your image!
            </div>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

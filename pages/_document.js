import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import stylesheet from "../styles/application.scss";
import 'whatwg-fetch';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:title" content="Mentor Weekly" />
          <meta
            property="og:description"
            content="A better mentoring platform for those in tech"
          />
          <meta
            property="og:image"
            content="https://www.flickr.com/photos/wocintechchat/25171599783/in/album-72157665958495865/"
          />
          <meta property="og:url" content="https://mentor-weekly.now.sh" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Mentor Weekly" />
          <meta
            name="twitter:image:alt"
            content="A better mentoring platform for those in tech"
          />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <link rel="icon" type="image/x-icon" href="/static/logo.ico?v=2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

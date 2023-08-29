import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='pl'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Oswald:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Odbiór techniczny, odbiór mieszkania, inwestor zastępczy, materiały budowlane, budowa domu Warszawa mazowieckie" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
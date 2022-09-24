import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest"></link>

        <title>Résumé: Adam Sobotka</title>
        <meta
          name="description"
          content="Résumé of a seasoned software management veteran drifting through the web3 space."
        />

        <meta property="og:url" content="https://adamsobotka.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adam Sobotka" />
        <meta
          property="og:description"
          content="Résumé of a seasoned software management veteran drifting through the web3 space."
        />
        <meta
          property="og:image"
          content="https://adamsobotka.deno.dev/socialsmall.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adamsobotka.deno.dev" />
        <meta property="twitter:url" content="https://adamsobotka.deno.dev/" />
        <meta name="twitter:title" content="Adam Sobotka" />
        <meta
          name="twitter:description"
          content="Résumé of a seasoned software management veteran drifting through the web3 space."
        />
        <meta
          name="twitter:image"
          content="https://adamsobotka.deno.dev/socialsmall.png"
        />
      </Head>
      <Component />
    </>
  );
}

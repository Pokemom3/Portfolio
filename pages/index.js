import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tan Matthews portfolio</title>
        <meta
          property="og:title"
          content="Tan Matthews portfolio"
          key="title"
        />
      </Head>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Saira+Extra+Condensed:wght@500&family=Sawarabi+Gothic&family=Titillium+Web:wght@200&display=swap" rel="stylesheet"/></Head>

       <div>
<Header/>
<NavBar/>

        </div>

    </div>
  );
}

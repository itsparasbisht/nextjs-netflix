import Head from "next/head";
import Header from "../components/Header";

function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Header />
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default Home;

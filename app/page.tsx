import ScrollReveal from "./components/ScrollReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import VerticalScroll from "./components/VerticalScroll";
import Products from "./components/Products";
import Services from "./components/Services";
import Partners from "././components/Partners";
// import Graph from "./components/Graph";
import Text from "./components/Text";
import UIPreview from "./components/UIPreview";
import Safety from "./components/Safety";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="px6">
        <Navbar />
      </div>
      <main className="relative ">
        <Hero />
        <div className="px6">
          <VerticalScroll />
          {/* <Graph /> */}
          <Text />
          <UIPreview />
          <Products />
          <Services />
          <Safety/>
          <Partners />
        </div>
      </main>
      <Footer />
    </>
  );
}

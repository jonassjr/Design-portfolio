import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/ProJects";
import { Services } from "./sections/Services";

function App() {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section className="padding-x padding-y">
        <Hero />
      </section>
      <section className="padding-x">
        <About />
      </section>
      <section className="padding-x padding-y">
        <Services />
      </section>
      <section className="padding-x padding-y">
        <Projects />
      </section>
      <section className="padding-x padding-y">
        <Contact />
      </section>
      <footer className="padding-x bg-stone-950">
        <Footer />
      </footer>
    </main>
  );
}

export default App;

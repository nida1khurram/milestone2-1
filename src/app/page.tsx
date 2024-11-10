
import Hero from "@/components/hero";
import ContactPage from "./contact-us/page";
import Product from "@/components/product";
import About from "./about/page";


export default function Home() {
  return (
  <main>
   <Hero />
   <About />
   < Product />
   <ContactPage />
  </main>
  );
}

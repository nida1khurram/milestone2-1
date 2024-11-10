
import Hero from "@/components/hero";
import ContactPage from "./contact-us/page";

import About from "./about/page";
import ProductsPage from "./products/page";




export default function Home() {
  return (
  <main>
   <Hero />
   <About />
   < ProductsPage />
   <ContactPage />

  </main>
  );
}

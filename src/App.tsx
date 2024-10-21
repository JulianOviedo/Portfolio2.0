import { useRef } from "react";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Footer } from "./components/Footer";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <div className="relative bg-bg-light lg:px-32 dark:bg-bg-dark dark:text-white transition-colors duration-1000">
        <Header divDark={ref} />
        <main className="p-6">
          <Sections />
          <hr className="w-full h-1 bg-disabled border-none my-14" />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;

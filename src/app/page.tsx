import About from "@/components/About";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

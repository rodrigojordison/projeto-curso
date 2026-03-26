import styles from "./App.module.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Sobre from "./components/sobre";
import Projetos from "./components/projetos";
import Contato from "./components/contato";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Animação ocorre apenas uma vez
    });

    const scroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />

      {/* Botão Voltar */}
      {showButton && (
        <button onClick={scroll} className={styles.btnTopo} data-aos="fade-up">
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}

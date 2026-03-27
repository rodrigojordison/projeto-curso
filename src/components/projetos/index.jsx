import style from "./projetos.module.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projetos() {
  return (
    <>
      <section id="projetos" className={style.projetosContainer}>
        <h2 className={style.projetosTitle} data-aos="fade-right">
          Meus Projetos
        </h2>
        <div className={style.projetosContent}>
          <div className={style.projetoCard} data-aos="fade-up">
            <img
              src="./image/fotos-projetos/quimica.png"
              alt="foto do projeto quimica cine"
            />
            <div className={style.links}>
              <a
                href="https://github.com/rodrigojordison/QuimicaCine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://quimica-cine.vercel.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className={style.projetoCard} data-aos="fade-up">
            <img
              src="./image/fotos-projetos/rodrigo.png"
              alt="foto do projeto quimica cine"
            />
            <div className={style.links}>
              <a
                href="https://github.com/rodrigojordison/projeto-curso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://portifolio-rodrigo-silva.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className={style.projetoCard} data-aos="fade-up">
            <img
              src="./image/fotos-projetos/mayara.png"
              alt="foto do projeto mayara"
            />
            <div className={style.links}>
              <a
                href="https://github.com/rodrigojordison/Mayara-Santos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://rodrigojordison.github.io/Mayara-Santos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

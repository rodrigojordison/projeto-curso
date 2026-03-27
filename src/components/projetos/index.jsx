import style from "./projetos.module.css";
import { FaGithub } from "react-icons/fa";

export default function Projetos() {
  return (
    <>
      <section id="projetos" className={style.projetosContainer}>
        <h2 data-aos="fade-right">Meus Projetos</h2>
        <div className={style.projetosContent}>
          <div className={style.projetoCard} data-aos="fade-up">
            <img src="image/fotos-projetos/quimica.jpg" alt="Descrição da imagem" />
            <div className={style.links}>
              <a
                href="https://github.com/seu-usuario/nome-do-projeto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={style.projetoCard} data-aos="fade-up">
            <img src="image/fotos-projetos/mayara.jpg" alt="Descrição da imagem" />
            <div className={style.links}>
              <a
                href="https://github.com/seu-usuario/nome-do-projeto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

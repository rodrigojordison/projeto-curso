import style from './projetos.module.css';

export default function Projetos() {
  return (
    <>
       <section id="projetos" className={style.projetosContainer}>
         <h2 data-aos="fade-right">Meus Projetos</h2>
         <div className={style.projetosContent}>
           <p data-aos="fade-left">Em breve...</p>
           <span data-aos="fade-up">Novos Projetos estão sendo desenvolvidos!</span>
         </div>
       </section>
    </>
  );
}
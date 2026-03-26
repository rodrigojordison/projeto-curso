import style from './sobre.module.css';
import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <>
       <section id='about' className={style.sobre}>
         <div className={style.sobreContainer}>
          <div className={style.sobreText}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sobre mim
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sou um desenvolvedor passionado por criar interfaces modernas e intuitivas. Comecei minha jornada na tecnologia em 2014 em diante trabalhando em empresas como AeC, CSU, Softcom etc.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Atualmente, estou focado em aprimorar minhas habilidades em React e Next.js, buscando sempre aprender novas tecnologias e técnicas para oferecer soluções inovadoras. Estou animado para compartilhar meus projetos e experiências com a comunidade de desenvolvimento.
            </motion.p>
          </div>

         <motion.div
           className={style.skillsContainer}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
         >
           <h3>Minhas Skills</h3>
           <div className={style.grid}>
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js'].map((skill, index) => (
              <motion.div
                key={skill}
                className={style.gridCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.15 } }}
              >
                {skill}
              </motion.div>
            ))}
           </div>
         </motion.div>

         </div>
       </section>
    </>
  )
}
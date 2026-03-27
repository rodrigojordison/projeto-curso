import style from './sobre.module.css';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma
} from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />,       name: 'HTML5',      color: '#e34f26' },
  { icon: <FaCss3Alt />,     name: 'CSS3',       color: '#1572b6' },
  { icon: <SiJavascript />,  name: 'JavaScript', color: '#f7df1e' },
  { icon: <FaReact />,       name: 'React',      color: '#61dafb' },
  { icon: <SiNextdotjs />,   name: 'Next.js',    color: '#ffffff' },
  { icon: <FaGitAlt />,      name: 'Git',        color: '#f05032' },
  { icon: <FaGithub />,      name: 'GitHub',     color: '#ffffff' },
];

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
              Sou um desenvolvedor apaixonado por criar interfaces modernas e intuitivas.
              Comecei minha jornada na tecnologia em 2014, trabalhando em empresas como
              AeC, CSU, Softcom e outras.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Atualmente focado em aprimorar minhas habilidades em React e Next.js,
              buscando sempre aprender novas tecnologias para oferecer soluções inovadoras.
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

            <div className={style.carouselWrapper}>
              <div className={style.carouselTrack}>
                {/* duplica para loop infinito */}
                {[...skills, ...skills].map((skill, index) => (
                  <div key={index} className={style.skillCard}>
                    <span
                      className={style.skillIcon}
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className={style.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
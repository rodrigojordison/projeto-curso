import style from './hero.module.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1.5,
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.3,
        distance: 150,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
    },
  }), []);

  return (
    <>
       <section id="home" className={style.hero} style={{ position: 'relative' }}>

        {init && (
          <Particles
            id="tsparticles"
            options={options}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
        )}

        <motion.div
          className={style.herotext}
          style={{ position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Olá, eu sou o Rodrigo <span>Silva</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Desenvolvedor Frontend
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Este é o meu primeiro projeto usando React!
            </motion.p>

            <motion.div
              className={style.socialLinks}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
                <a href="#" className={style.btnlinkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                <a href="#" className={style.btngithub} target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </motion.div>
        </motion.div>

        <motion.div
          className={style.heroimage}
          style={{ position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <img src="./image/foto.png" alt="minha imagem de perfil" />
        </motion.div>

        </section> 
    </>
  )
}
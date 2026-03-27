import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <motion.img
        src="/image/logo/Logoo.png"
        alt="Logo"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />

      {/* Nav desktop */}
      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contatos</a></li>
        </ul>
      </motion.nav>

      {/* Botão hamburguer */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
      </button>

      {/* Nav mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li><a href="#home"    onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about"   onClick={() => setMenuOpen(false)}>Sobre</a></li>
              <li><a href="#projetos"onClick={() => setMenuOpen(false)}>Projetos</a></li>
              <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contatos</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
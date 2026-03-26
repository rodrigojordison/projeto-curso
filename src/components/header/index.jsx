import styles from './Header.module.css';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className={styles.header}>
            <motion.img
              src="/image/logo/Logoo.png"
              alt="Logo"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
            </motion.img>

            <motion.nav
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contatos</a>
            </motion.nav>
        </header>
    );
}
// import { footer } from 'framer-motion/client';
import styles from "./footer.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <p>&copy; 2026 Rodrigo Silva. Todos os direitos reservados.</p>

      {/* Botão de contato via WhatsApp */}
      <a
        href="https://wa.me/5583981812180"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnWhats}
        data-aos="fade-up"
      >
        <FaWhatsapp size={34} color="#ffffff" />
      </a>
    </footer>
  );
}

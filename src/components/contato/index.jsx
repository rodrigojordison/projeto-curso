// import { section } from 'framer-motion/client';
import styles from './contato.module.css';
// import { motion } from 'framer-motion';

export default function Contato() {
    return (
        <section id="contato" className={styles.contatoContainer}>
            <div className={styles.contatoContent} data-aos="fade-up">
                <h2>Vamos Conversar!</h2>
                <p>Entre em contato para projetos e parcerias</p>
                
            


            <form action="https://formsubmit.co/rodrigojordisonsilva@gmail.com" method='post' className={styles.contatoForm} data-aos="fade-left">
            
            {/* input fields */}
            <input type="hidden" name="_next" value="https://localhost:5173/" />
             <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu Email" required />
            <textarea name="message" placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar</button>
            
            </form>
            </div>
        </section>
    )
}   
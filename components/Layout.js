import Header from "./Header";
import styles from "../styles/Layout.module.scss";

export default function Contact({ children }) {
    const phoneNumber = '+40724955956';
    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                <a href={`tel:${phoneNumber}`} class="mobil_call_but">
  <img src="https://images.ctfassets.net/o5zsu07219i2/4mkphSkCRpdQRziTgomGKf/195427237c79bd1166288176e9b9f794/phone_______.png"/>
</a>
            </div>
        </>
    );
}

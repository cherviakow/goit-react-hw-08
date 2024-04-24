import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <section className={css.container}>
      
      {children}
    </section>
  );
}
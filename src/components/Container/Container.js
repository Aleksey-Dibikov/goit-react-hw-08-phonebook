import styles from './Container.module.css';

export default function Container({ children }) {
  return <div className={styles.containerApp}>{children}</div>;
}
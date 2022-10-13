import styles from './eru.module.css';

const Eru = () => {
  const handleClick = () => {
    window.open('https://github.com/Eru-js');
  };

  return (
    <div className={styles.div} onClick={handleClick}>
      <code
      className={[styles.code, styles.dark].join(' ')}
      // className={[styles.code, color === 'dark' ? styles.light : styles.dark].join(' ')}
      >
        dev with ♡ By Eru
      </code>
    </div>
  )
}

export default Eru;
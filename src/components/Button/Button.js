import styles from './Button.module.scss';

const Button = (params) => {
  return (
    <button
      id={params.children.toLowerCase()}
      className={styles.button}
      onClick={() => {
        params.action();
      }}
    >
      {params.children}
    </button>
  );
};

export default Button;

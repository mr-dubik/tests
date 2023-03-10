import cn from "classnames";

import styles from "./index.module.css";

export const Button = ({ className, children, type = "button", onClick }) => {
  return (
    <button
      className={cn(styles.button, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

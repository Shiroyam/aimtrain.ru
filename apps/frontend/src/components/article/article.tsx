import styles from "./article.module.scss";

interface ArticleProps {
  title?: string;
  children?: React.ReactNode;
}

export const Article = ({ children, title }: ArticleProps) => {
  return (
    <article className={styles.article}>
      <p className={styles.title}>{title}</p>
      <div className={styles.content}>{children}</div>
    </article>
  );
};

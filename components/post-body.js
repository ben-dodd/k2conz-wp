import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  console.log(content);
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

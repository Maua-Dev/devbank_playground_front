import { useState } from "react";
import styles from "./doc_card.module.scss";
import { BiSolidCopy } from "react-icons/bi";

export default function DocCard({ title, description, request, response, type }) {
  const [selected, setSelected] = useState(title === '/' ? false : true);
  const [requestStyle, setRequestStyle] = useState(
    styles.card_contentdiv__json
  );
  const [responseStyle, setResponseStyle] = useState(
    styles.card_contentdiv__json
  );

  const handleOnClick = () => {
    setSelected(!selected);
  };

  const handleResponseOnClick = () => {
    setResponseStyle(styles.card_contentdiv__jsonopacity);
    setTimeout(function () {
    setResponseStyle(styles.card_contentdiv__json);
    }, 100);
    navigator.clipboard.writeText(response);
  };

  const handleRequestOnClick = () => {
    setRequestStyle(styles.card_contentdiv__jsonopacity);
    setTimeout(function () {
        setRequestStyle(styles.card_contentdiv__json);
    }, 100);
    navigator.clipboard.writeText(request);
  };

  return (
    <div className={styles.card}>
      <div
        className={selected ? styles.card_div : styles.card_div__show}
        onClick={handleOnClick}
      >
        <h1 className={styles.card_div__title}>{type} {title}</h1>
      </div>
      <div
        className={selected ? styles.card_content : styles.card_content__show}
      >
        <div className={styles.card_contentdiv}>
          <p className={styles.card_description}>{description}</p>
        </div>
        {request ? (
          <div className={requestStyle} onClick={handleRequestOnClick}>
            <h2 className={styles.card_title}>Request</h2>
            <pre className={styles.card_json}>
              {request}
            </pre>
            <BiSolidCopy className={styles.card_icon} />
          </div>
        ) : (
          ""
        )}
        {response ? (
          <div className={responseStyle} onClick={handleResponseOnClick}>
            <h2 className={styles.card_title}>Response</h2>
            <pre className={styles.card_json}>
              {response}
            </pre>
            <BiSolidCopy className={styles.card_icon} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

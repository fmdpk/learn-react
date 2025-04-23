import { SculptureDataList } from "../../assets/data/gallery-data";
import { useState } from "react";
import styles from "./gallery.module.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleNextClick() {
    setIndex((prevValue) => {
      if (prevValue === 11) {
        return 0;
      }
      return prevValue + 1;
    });
  }

  function handlePreviousClick() {
    setIndex((prevValue) => {
      if (prevValue === 0) {
        return 11;
      }
      return prevValue - 1;
    });
  }

  const handleShowMoreClick = () => {
    setShowMore((prevValue) => !prevValue);
  };

  let sculpture = SculptureDataList[index];
  return (
    <>
      <div className={styles["btns-wrapper"]}>
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleShowMoreClick}>Show more</button>
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      {showMore && <p>{sculpture.description}</p>}
      <h3>
        ({index + 1} of {SculptureDataList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

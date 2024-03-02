import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

const Features = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/features1.png",
    "/images/features2.png",
    "/images/features3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.Features}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/images/left.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.featureswrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((image, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={image} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/images/right.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Features;
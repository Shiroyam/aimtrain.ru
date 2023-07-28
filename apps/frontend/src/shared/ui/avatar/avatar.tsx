import { ReactComponent as AvatarLogo } from "./avatar.svg";
import styles from "./avatar.module.scss";
import cn from "classnames";

export interface AvatarProps {
  /** Image link  */
  src?: string;

  /** Avatar size selection  */
  size?: "xl" | "m" | "xs";
}

export const Avatar = ({ src, size = "m" }: AvatarProps) => {
  const imgCN = cn(styles.img, styles[size]);

  const svgCN = cn(styles.svg, styles[size]);

  return (
    <>
      {src ? (
        <img className={imgCN} src={src} />
      ) : (
        <div className={svgCN}>
          <AvatarLogo className={styles.avatar} />
        </div>
      )}
    </>
  );
};

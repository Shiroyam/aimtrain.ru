import { useState } from "react";
import { ReactComponent as ArrowSvg } from "./arrow.svg";
import styles from "./accordion.module.scss";
import cn from "classnames";

export interface AccordionProps {
  /** Apply additional styles to accordion */
  className?: string;

  /** Content to be rendered within the accordion */
  children?: React.ReactNode;

  /** Title of the accordion */
  title: string;

  /** State of the accordion, whether it is expanded or collapsed */
  state: boolean;
}

export const Accordion = ({ className, children, title, state }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(state);

  const onClickAccordion = () => (open === false ? setOpen(true) : setOpen(false));

  const accordionCN = cn(styles.accordion, className);

  const arrowCN = cn(styles.svg, {
    [styles.active]: open === true,
    [styles.inactive]: open === false,
  });

  const contentCN = cn(styles.content, {
    [styles.active]: open === true,
    [styles.inactive]: open === false,
  });

  return (
    <div className={accordionCN}>
      <button onClick={onClickAccordion} className={styles.button}>
        {title} <ArrowSvg className={arrowCN} />
      </button>
      <div className={contentCN}>{children}</div>
    </div>
  );
};

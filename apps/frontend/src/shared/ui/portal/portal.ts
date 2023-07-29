import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  /** The children of the portal, such as modal or popup. */
  children?: ReactNode;

  /** The element to which the portal should be rendered is by default a new div element created and added to the document.body. */
  target?: HTMLElement;
}

export const Portal = ({ children, target = document.body }: PortalProps) => {
  const portalRef = useRef(document.createElement("div"));

  useEffect(() => {
    target?.appendChild(portalRef.current);

    const node = portalRef.current;

    return () => {
      target?.removeChild(node);
    };
  }, [target]);

  return ReactDOM.createPortal(children, portalRef.current);
};

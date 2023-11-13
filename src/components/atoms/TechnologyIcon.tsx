import { useEffect, useRef, useState } from "react";
import { Technology } from "../../types/project";
import ExpressIcon from "../../assets/icons/express.svg?react";
import NodeJsIcon from "../../assets/icons/nodejs.svg?react";
import ReactIcon from "../../assets/icons/reactjs.svg?react";
import ReduxIcon from "../../assets/icons/redux.svg?react";
import TypeScriptIcon from "../../assets/icons/typescript.svg?react";
import PandacssIcon from "../../assets/icons/pandacss.svg?react";
import ViteIcon from "../../assets/icons/vite.svg?react";
import WebpackIcon from "../../assets/icons/webpack.svg?react";
import JavascriptIcon from "../../assets/icons/javascript.svg?react";
import MongodbIcon from "../../assets/icons/mongodb.svg?react";
import RedisIcon from "../../assets/icons/redis.svg?react";
import { css } from "../../../styled-system/css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type TechnologyIconProps = {
  technology: Technology;
};

function TechnologyIcon({ technology }: TechnologyIconProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const nodeRef = isRevealed ? textRef : iconRef;

  useEffect(() => {
    if (!isRevealed) return;

    setTimeout(() => {
      setIsRevealed(false);
    }, 2000);
  }, [isRevealed]);

  let renderIcon;
  switch (technology) {
    case "Express.js":
      renderIcon = <ExpressIcon />;
      break;
    case "Node.js":
      renderIcon = <NodeJsIcon />;
      break;
    case "React":
      renderIcon = <ReactIcon />;
      break;
    case "Redux":
      renderIcon = <ReduxIcon />;
      break;
    case "TypeScript":
      renderIcon = <TypeScriptIcon />;
      break;
    case "Panda-CSS":
      renderIcon = <PandacssIcon />;
      break;
    case "Vite.js":
      renderIcon = <ViteIcon />;
      break;
    case "Webpack":
      renderIcon = <WebpackIcon />;
      break;
    case "JavaScript":
      renderIcon = <JavascriptIcon />;
      break;
    case "MongoDB":
      renderIcon = <MongodbIcon />;
      break;
    case "Redis":
      renderIcon = <RedisIcon />;
      break;
    default:
      break;
  }

  return (
    <SwitchTransition>
      <CSSTransition
        key={isRevealed ? "text" : "icon"}
        nodeRef={nodeRef}
        classNames={{
          enter: "enter " + enterStyle,
          enterActive: "enteractive " + enterActiveStyle,
          exit: exitStyle,
          exitActive: exitActiveStyle,
        }}
        timeout={500}
      >
        <div
          className={iconContainer}
          onClick={() => setIsRevealed(true)}
          ref={nodeRef}
        >
          {isRevealed ? technology : renderIcon}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default TechnologyIcon;

const iconContainer = css({
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  margin: "16px",
  transition: "all 0.3s ease-in-out",
  "& > svg": {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
});

const enterStyle = css({
  opacity: "0",
  transform: "translateY(-50%)",
});
const enterActiveStyle = css({
  opacity: "1",
  transform: "translateY(0)",
  //translate from top to center
});
const exitStyle = css({
  opacity: "0",
  transform: "translateY(0)",
});
const exitActiveStyle = css({
  opacity: "0",
  transform: "translateY(50%)",
});

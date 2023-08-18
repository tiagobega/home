import { useProgress } from "@react-three/drei";
import cn from "classnames";

import "./index.scss";

const LoadingScreen = () => {
  const { progress } = useProgress();

  return <div className={cn("LoadingScreen")}>{progress}</div>;
};

export default LoadingScreen;

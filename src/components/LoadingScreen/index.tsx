import { useProgress } from '@react-three/drei';
import cn from 'classnames';

import './index.scss';

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={cn('LoadingScreen', { loaded: !active })}>
      <div
        className="LoadingScreen__ProgressBar"
        style={{ width: `${progress}%` }}
      />
      <div className="LoadingScreen__Progress">{progress.toFixed(2)}%</div>
    </div>
  );
};

export default LoadingScreen;

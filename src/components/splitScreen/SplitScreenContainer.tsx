import React, { ReactNode } from 'react';
import './SplitScreen.scss';
import { useAppSelector } from 'src/store/hooks';
import { RootState } from 'src/store';

interface Props {
  leftContent: ReactNode;
  centerContent?: ReactNode;
  rightContent?: ReactNode;
}

function SplitScreenContainer({ leftContent, centerContent, rightContent }: Props) {
  const data = useAppSelector((state: RootState) => state.dataSlice);
  

  return (
    <div className="container" style={{ background: data.background_color }}>
      <div className="grid-container">
        <div className="left-content">{leftContent}</div>
        {centerContent && <div className="center-content">{centerContent}</div>}
        {rightContent && <div className="right-content">{rightContent}</div>}
      </div>
    </div>
  );
}

export default SplitScreenContainer;
import React from 'react';
import { colors } from '../../constants/design';

const IconContainer = ({ icon }) => (
  <>
    <div className="IconContainer-root">{icon}</div>

    <style jsx>
      {`
          .IconContainer-root {
            position: relative;
            padding: 1rem;
            border-radius: 50%;
            background-color: ${colors.primary.main};
            color: #fff;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
    </style>
  </>
);

export default IconContainer;

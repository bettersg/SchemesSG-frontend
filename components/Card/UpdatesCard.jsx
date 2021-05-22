import React from 'react';
import { updateColors } from '../../constants/design';

const UpdatesCard = ({ update }) => {
  const color = updateColors[update.data.category];

  return (
    <>
      <div
        className='UpdatesCard-root'
        style={{ border: `1px solid ${color}`, color: color }}>
        <p className='update-title'>{update.data.title[0].text}:</p>
        <p>{update.data.description[0].text}</p>
      </div>

      <style jsx>
        {`
          .UpdatesCard-root {
            padding: 0.4rem 1.2rem;
            width: 100%;
            margin: 0.5rem 0;
            border-radius: 8px;
          }

          .update-title {
            font-weight: 700;
          }
        `}
      </style>
    </>
  );
};

export default UpdatesCard;

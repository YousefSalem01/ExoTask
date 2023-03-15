import React, { useState } from 'react';
import AddBlock from '../../WorkSpace/AddBlock';

const Addimg = () => {

  const addMediaBlock = () => {
    const block = {
      type: 'image',
      className: 'WSMedia',
      data: {
        file: {
          url: ''
        }
      }
    };
    AddBlock(block.type, block, block.className);
  };

  return (
    <div className="ComponentList-item-title">
      <button className="ComponentList-item-title-button" onClick={addMediaBlock}>
        Add image
      </button>
    </div>
  );
};

export default Addimg;

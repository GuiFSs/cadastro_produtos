import React from 'react';

const Imagens = props => {
  return (
    <div>
      <label>
        Imagem:
        <input
          type="text"
          value={props.imagens}
          onChange={props.handleImagemChange}
          required
        />
        Link:
        <input
          type="text"
          value={props.link}
          onChange={props.handleLinkChange}
          required
        />
      </label>
    </div>
  );
};

export default Imagens;

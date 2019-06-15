import React from 'react';
import {Link} from 'react-router-dom';

const NoteListItem = ({ id, theNote, title }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{title}</h3>
      <h3 className="list-item__title">{theNote}</h3>
    </div>
    </Link>
);

export default NoteListItem;
/**
 * Created by samuel on 26/09/16.
 */
import React, { PropTypes } from 'react'

const Note = ({ onClick, title, text }) => (
	<div>
		<h1 className="note-title">{title}</h1>
		<p className="note-text">{ text }</p>
	</div>
);

Note.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Note
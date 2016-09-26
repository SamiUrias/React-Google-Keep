/**
 * Created by samuel on 26/09/16.
 */
import React, { PropTypes } from 'react'

const Note = ({ onClick, text }) => (
	<div>
		<h1>Titulo</h1>
		<p>{ text }</p>
	</div>
);

Note.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Note
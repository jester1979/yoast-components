import React from 'react';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

const StepButton = (props) => (
	<IconButton tooltip={props.tooltip}>
		<SvgIcon color="rgb(0, 188, 212)">
			<circle cx="12" cy="12" r="10"/>
			<text
				x="12"
				y="16"
				textAnchor="middle"
				fontSize="12"
				fill="#fff"
			>
				{props.index}
			</text>
		</SvgIcon>
	</IconButton>
);

export default StepButton;
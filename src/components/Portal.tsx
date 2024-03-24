import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
	rootElementId: string;
	children: React.ReactNode;
}

const Portal = (props: Props) => {
	return createPortal(props.children, document.getElementById(props.rootElementId) as HTMLElement);
};

Portal.defaultProps = {
	rootElementId: 'root',
};

export default Portal;

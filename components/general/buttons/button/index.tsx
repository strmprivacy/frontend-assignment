import { FC, ReactElement } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
	children: string | ReactElement;
	className?: string;
	onClick?: any;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
	console.log('Button()', [className]);

	return (
		<button className={classNames('inline-block flex-shrink-0 self-baseline px-5 py-3 rounded font-weight-semibold text-button bg-blue-600 hover:bg-blue-700 transition-colors duration', className)} {...props}>
			{children}
		</button>
	);
};

export default Button;

import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const PeopleIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 20 14' xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' fillRule='evenodd'>
				<path className='fill-current' d='M7 8.75c-2.34 0-7 1.17-7 3.5V14h14v-1.75c0-2.33-4.66-3.5-7-3.5ZM2.34 12c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H2.34ZM7 7c1.93 0 3.5-1.57 3.5-3.5S8.93 0 7 0 3.5 1.57 3.5 3.5 5.07 7 7 7Zm0-5c.83 0 1.5.67 1.5 1.5S7.83 5 7 5s-1.5-.67-1.5-1.5S6.17 2 7 2Zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V14h4v-1.75c0-2.02-3.5-3.17-5.96-3.44ZM13 7c1.93 0 3.5-1.57 3.5-3.5S14.93 0 13 0c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35Z' fillRule='nonzero' />
			</g>

			{/* <svg width='20' height='14' xmlns='http://www.w3.org/2000/svg'>
				<path d='M7 8.75c-2.34 0-7 1.17-7 3.5V14h14v-1.75c0-2.33-4.66-3.5-7-3.5ZM2.34 12c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H2.34ZM7 7c1.93 0 3.5-1.57 3.5-3.5S8.93 0 7 0 3.5 1.57 3.5 3.5 5.07 7 7 7Zm0-5c.83 0 1.5.67 1.5 1.5S7.83 5 7 5s-1.5-.67-1.5-1.5S6.17 2 7 2Zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V14h4v-1.75c0-2.02-3.5-3.17-5.96-3.44ZM13 7c1.93 0 3.5-1.57 3.5-3.5S14.93 0 13 0c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35Z' fill='#1C1D20' fill-rule='nonzero' />
			</svg> */}
		</svg>
	);
};

export default PeopleIcon;

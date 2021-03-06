import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const NotificationIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 14 17' xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' fillRule='evenodd'>
				<path d='M-3-2h20v20H-3z' />
				<path className='fill-current' d='M7 16.333c.917 0 1.667-.75 1.667-1.666H5.333c0 .916.75 1.666 1.667 1.666Zm5-5V7.167c0-2.559-1.358-4.7-3.75-5.267v-.567C8.25.642 7.692.083 7 .083s-1.25.559-1.25 1.25V1.9C3.367 2.467 2 4.6 2 7.167v4.166L.333 13v.833h13.334V13L12 11.333Zm-1.667.834H3.667v-5c0-2.067 1.258-3.75 3.333-3.75s3.333 1.683 3.333 3.75v5Z' fillRule='nonzero' />
			</g>
		</svg>
	);
};

export default NotificationIcon;

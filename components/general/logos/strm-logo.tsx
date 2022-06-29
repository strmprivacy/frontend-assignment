import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const StrmLogo: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 39 35' xmlns='http://www.w3.org/2000/svg'>
			<g className='fill-current' fillRule='nonzero'>
				<path d='M22.652 4.239v12.599a.3.3 0 0 1-.306.305h-3.132a.3.3 0 0 1-.305-.305v-12.6a.3.3 0 0 0-.305-.304h-4.556a.3.3 0 0 1-.305-.305V.662a.3.3 0 0 1 .305-.305h13.485a.3.3 0 0 1 .305.305v2.967a.3.3 0 0 1-.305.305h-4.576a.3.3 0 0 0-.305.305ZM12.5 28.924l-3.184 5.903a.331.331 0 0 1-.284.173H5.468c-.232 0-.39-.244-.285-.447l3.543-6.35c-2.14-.732-3.437-2.46-3.437-4.736 0-2.987 2.214-5.253 5.651-5.253h6.58c.179 0 .316.132.316.305v16.166a.305.305 0 0 1-.317.305h-3.247a.305.305 0 0 1-.316-.305v-5.64a.305.305 0 0 0-.317-.304h-.854a.328.328 0 0 0-.284.183Zm1.14-3.394c.179 0 .316-.132.316-.305v-3.454a.305.305 0 0 0-.317-.305h-1.971c-1.592 0-2.457.782-2.457 2.032 0 1.179.865 2.032 2.457 2.032h1.971ZM34.532 34.695v-9.964c0-.345-.487-.427-.6-.101l-3.784 9.313a.312.312 0 0 1-.29.193h-2.663a.329.329 0 0 1-.29-.193l-3.784-9.191c-.124-.326-.6-.234-.6.101v9.842a.303.303 0 0 1-.312.305h-3.005a.303.303 0 0 1-.311-.305V19.739c0-.844.694-1.525 1.554-1.525h3.244c.633 0 1.203.376 1.441.956l3.13 8.805c.104.254.477.254.58-.01l2.913-8.775a1.55 1.55 0 0 1 1.45-.976h3.514c.86 0 1.555.681 1.555 1.525v14.956a.303.303 0 0 1-.311.305h-3.12a.316.316 0 0 1-.31-.305ZM9.672 5.455a.3.3 0 0 1-.376-.218c-.223-.799-.935-1.846-2.725-1.846-1.393 0-2.298.892-2.298 1.835 0 .82.498 1.421 1.658 1.639l2.247.435c3.193.602 4.86 2.707 4.86 5.144 0 2.686-2.206 5.413-6.202 5.413-4.464 0-6.478-2.83-6.833-5.206a.327.327 0 0 1 .233-.352l2.837-.695a.31.31 0 0 1 .377.249c.254 1.431 1.301 2.613 3.436 2.613 1.465 0 2.37-.726 2.37-1.783 0-.872-.692-1.494-1.8-1.712l-2.298-.435C2.31 9.976.582 8.047.582 5.506.582 2.271 3.378 0 6.602 0c3.996 0 5.623 2.323 6.07 4.272a.317.317 0 0 1-.213.374l-2.787.809Z' />
			</g>
		</svg>
	);
};

export default StrmLogo;

// <svg width='39' height='35' xmlns='http://www.w3.org/2000/svg'>
// 	<g fill='#000' fill-rule='nonzero'>
// 		<path d='M22.652 4.239v12.599a.3.3 0 0 1-.306.305h-3.132a.3.3 0 0 1-.305-.305v-12.6a.3.3 0 0 0-.305-.304h-4.556a.3.3 0 0 1-.305-.305V.662a.3.3 0 0 1 .305-.305h13.485a.3.3 0 0 1 .305.305v2.967a.3.3 0 0 1-.305.305h-4.576a.3.3 0 0 0-.305.305ZM12.5 28.924l-3.184 5.903a.331.331 0 0 1-.284.173H5.468c-.232 0-.39-.244-.285-.447l3.543-6.35c-2.14-.732-3.437-2.46-3.437-4.736 0-2.987 2.214-5.253 5.651-5.253h6.58c.179 0 .316.132.316.305v16.166a.305.305 0 0 1-.317.305h-3.247a.305.305 0 0 1-.316-.305v-5.64a.305.305 0 0 0-.317-.304h-.854a.328.328 0 0 0-.284.183Zm1.14-3.394c.179 0 .316-.132.316-.305v-3.454a.305.305 0 0 0-.317-.305h-1.971c-1.592 0-2.457.782-2.457 2.032 0 1.179.865 2.032 2.457 2.032h1.971ZM34.532 34.695v-9.964c0-.345-.487-.427-.6-.101l-3.784 9.313a.312.312 0 0 1-.29.193h-2.663a.329.329 0 0 1-.29-.193l-3.784-9.191c-.124-.326-.6-.234-.6.101v9.842a.303.303 0 0 1-.312.305h-3.005a.303.303 0 0 1-.311-.305V19.739c0-.844.694-1.525 1.554-1.525h3.244c.633 0 1.203.376 1.441.956l3.13 8.805c.104.254.477.254.58-.01l2.913-8.775a1.55 1.55 0 0 1 1.45-.976h3.514c.86 0 1.555.681 1.555 1.525v14.956a.303.303 0 0 1-.311.305h-3.12a.316.316 0 0 1-.31-.305ZM9.672 5.455a.3.3 0 0 1-.376-.218c-.223-.799-.935-1.846-2.725-1.846-1.393 0-2.298.892-2.298 1.835 0 .82.498 1.421 1.658 1.639l2.247.435c3.193.602 4.86 2.707 4.86 5.144 0 2.686-2.206 5.413-6.202 5.413-4.464 0-6.478-2.83-6.833-5.206a.327.327 0 0 1 .233-.352l2.837-.695a.31.31 0 0 1 .377.249c.254 1.431 1.301 2.613 3.436 2.613 1.465 0 2.37-.726 2.37-1.783 0-.872-.692-1.494-1.8-1.712l-2.298-.435C2.31 9.976.582 8.047.582 5.506.582 2.271 3.378 0 6.602 0c3.996 0 5.623 2.323 6.07 4.272a.317.317 0 0 1-.213.374l-2.787.809Z' />
// 	</g>
// </svg>;
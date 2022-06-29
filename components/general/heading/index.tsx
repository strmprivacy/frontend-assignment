import { FC, ReactElement } from 'react';
import classNames from 'classnames';

const mapFontWeight = {
	regular: 'font-weight-regular',
	medium: 'font-weight-medium',
	semibold: 'font-weight-semibold',
};

const mapSize = {
	sm: {
		element: 'h5',
		className: 'text-lg',
		// className: 'text-base',
		weight: mapFontWeight.medium,
	},
	md: {
		element: 'h4',
		className: 'text-2xl',
		// className: 'text-md sm:text-xl',
		weight: mapFontWeight.medium,
	},
	lg: {
		element: 'h3',
		className: 'text-3xl',
		// className: 'text-2xl sm:text-4xl',
		weight: mapFontWeight.semibold,
	},
	xl: {
		element: 'h2',
		className: 'text-4xl',
		// className: 'text-2xl sm:text-4xl',
		weight: mapFontWeight.semibold,
	},
	xxl: {
		element: 'h1',
		className: 'text-5xl',
		// className: 'text-2xl sm:text-4xl',
		weight: mapFontWeight.semibold,
	},
};

type FontWeight = 'regular' | 'medium' | 'semibold';
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
// type FontType = 'body' | 'heading';

export interface HeadingProps {
	children: string | ReactElement;
	size: HeadingSize;
	level?: HeadingLevel;
	weight?: FontWeight;
	// font?: FontType;
	uppercase?: boolean;
	className?: string;
}

const Heading: FC<HeadingProps> = ({
	children,
	size = 'sm',
	level = 1,
	// font = 'heading',
	weight,
	uppercase,
	className,
	...props
}) => {
	console.log('Heading()', [level, size, uppercase, className]);

	// Check if 'level' is provided, then overwrite default <H[number] /> element defined in mapSize
	const element = Number.isInteger(level) && level <= 6 ? `h${level}` : mapSize[size].element;
	const sizeClassName = mapSize[size].className;
	const fontWeightClassName = weight ? mapFontWeight[weight] : mapSize[size].weight;
	const Component = element;

	console.log('element: ', element);
	console.log('sizeClassName: ', sizeClassName);
	console.log('fontWeightClassName: ', fontWeightClassName);

	return (
		<Component className={classNames('text-heading', { uppercase: uppercase }, sizeClassName, fontWeightClassName, className)} {...props}>
			{children}
		</Component>
	);
};

export default Heading;

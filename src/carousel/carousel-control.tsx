export type CarouselControlProps = JSX.IntrinsicElements['div']
import { carouselAnatomy } from '@ark-ui/anatomy'
export const CarouselControl: JSX.Component<CarouselControlProps> = (props) => {
	return <div {...props} {...carouselAnatomy.build().control.attrs} />
}

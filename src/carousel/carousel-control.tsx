export type CarouselControlProps = JSX.IntrinsicElements['div']
import { carouselAnatomy } from '@ark-ui/anatomy'
export const CarouselControl = (props: CarouselControlProps) => {
  return <div {...props} {...carouselAnatomy.build().control.attrs} />
}

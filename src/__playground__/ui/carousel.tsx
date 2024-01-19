import {
  Carousel as ArkCarousel,
  type CarouselProps as ArkCarouselProps,
} from '@vitro/ark'

import { CarouselVariantProps, carousel } from 'styled-system/recipes'
import { type Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export type CarouselProps = Assign<ArkCarouselProps, CarouselVariantProps>

const Carousel: JSX.Component<CarouselProps> = withProvider(
  ArkCarousel.Root,
  'root',
)
const CarouselControl = withContext(ArkCarousel.Control, 'control')
const CarouselIndicator = withContext(ArkCarousel.Indicator, 'indicator')
const CarouselIndicatorGroup = withContext(
  ArkCarousel.IndicatorGroup,
  'indicatorGroup',
)
const CarouselItem = withContext(ArkCarousel.Item, 'item')
const CarouselItemGroup = withContext(ArkCarousel.ItemGroup, 'itemGroup')
const CarouselNextTrigger = withContext(ArkCarousel.NextTrigger, 'nextTrigger')
const CarouselPrevTrigger = withContext(ArkCarousel.PrevTrigger, 'prevTrigger')
const CarouselViewport = withContext(ArkCarousel.Viewport, 'viewport')

const Root = Carousel
const Control = CarouselControl
const Indicator = CarouselIndicator
const IndicatorGroup = CarouselIndicatorGroup
const Item = CarouselItem
const ItemGroup = CarouselItemGroup
const NextTrigger = CarouselNextTrigger
const PrevTrigger = CarouselPrevTrigger
const Viewport = CarouselViewport

export {
  // Carousel,
  // CarouselControl,
  // CarouselIndicator,
  // CarouselIndicatorGroup,
  // CarouselItem,
  // CarouselItemGroup,
  // CarouselNextTrigger,
  // CarouselPrevTrigger,
  // CarouselViewport,
  Control,
  Indicator,
  IndicatorGroup,
  Item,
  ItemGroup,
  NextTrigger,
  PrevTrigger,
  Root,
  Viewport,
}

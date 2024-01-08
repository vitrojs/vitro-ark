import { ButtonVariantProps, button } from 'styled-system/recipes'
import { Carousel } from '.'
import { $, $$, For } from 'vitro'

const styles = {
  button: button(),
}

const Button = ({
  size,
  variant,
  ...props
}: ButtonVariantProps & JSX.IntrinsicElements['button']) => (
  <button {...props} class={button({ size, variant })} />
)

export const Basic = () => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
    'https://tinyurl.com/6jurv23t',
    'https://tinyurl.com/yp4rfum7',
  ]
  return (
    <Carousel.Root>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        <For values={images}>
          {(_, index) => (
            <Carousel.Indicator index={index} asChild>
              {$$(index) + 1}
            </Carousel.Indicator>
          )}
        </For>
      </Carousel.IndicatorGroup>
      <Carousel.Viewport>
        <Carousel.ItemGroup>
          <For values={images}>
            {(image, index) => (
              <Carousel.Item index={index}>
                <img src={image} />
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>
      </Carousel.Viewport>
    </Carousel.Root>
  )
}

export const Controlled = () => {
  const currentIndex = $(0)

  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
    'https://tinyurl.com/6jurv23t',
    'https://tinyurl.com/yp4rfum7',
  ]

  return (
    <>
      <Carousel.Root
        index={currentIndex}
        onIndexChange={(details) => currentIndex(details.index)}
      >
        <Carousel.Control>
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            <For values={images}>
              {(image, index) => (
                <Carousel.Item index={index}>
                  <img src={image} />
                </Carousel.Item>
              )}
            </For>
          </Carousel.ItemGroup>
        </Carousel.Viewport>
      </Carousel.Root>
    </>
  )
}

export const Customized = () => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
  ]
  return (
    <Carousel.Root
      align='center'
      loop={true}
      slidesPerView={2}
      spacing='16px'
      orientation='horizontal'
    >
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        <For values={images}>
          {(_, index) => (
            <Carousel.Indicator index={index}>
              {$$(index) + 1}
            </Carousel.Indicator>
          )}
        </For>
      </Carousel.IndicatorGroup>
      <Carousel.Viewport>
        <Carousel.ItemGroup>
          <For values={images}>
            {(image, index) => (
              <Carousel.Item index={index}>
                <img src={image} />
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>
      </Carousel.Viewport>
    </Carousel.Root>
  )
}

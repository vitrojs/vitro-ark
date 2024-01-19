import { box, circle, stack } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { Heading } from './heading'

export const Steps = (props: { children: JSX.Child }) => {
  return (
    <div class={stack({ gap: '0', pos: 'relative' })}>
      <div
        class={box({
          width: '1px',
          height: 'full',
          bg: 'border.default',
          position: 'absolute',
          left: '4',
          top: '0',
        })}
      />
      {props.children}
    </div>
  )
}

export type StepProps = {
  number: string
  title: string
  children?: JSX.Child
}

export const Step = (props: StepProps) => {
  const { number, title, children } = props
  return (
    <div class={box()}>
      <div class={stack({ direction: 'row', gap: '4' })}>
        <div
          class={circle({
            size: '8',
            color: 'fg.default',
            bg: 'bg.surface',
            borderWidth: '1px',
            zIndex: '1',
            boxShadow: '0 0 0 12px var(--colors-bg-surface)',
            fontWeight: 'semibold',
          })}
        >
          {number}
        </div>
        <Heading as='h3' class={css({ my: '0!' })}>
          {title}
        </Heading>
      </div>
      <div class={[box({ ps: '12' }), css({ '&> :last-child': { mb: '0' } })]}>
        {children}
      </div>
    </div>
  )
}

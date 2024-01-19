import { Assign } from '../lib/create-style-context'
import { kbd, KbdVariantProps } from 'styled-system/recipes'

export type KbdProps = Assign<JSX.IntrinsicElements['kbd'], KbdVariantProps>

export const Kbd: JSX.Component<KbdProps> = (props) => {
  const [kbdProps, variantProps] = kbd.splitVariantProps(props)
  return <kbd {...variantProps} class={[kbd(kbdProps), variantProps.class]} />
}

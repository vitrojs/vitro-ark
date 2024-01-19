import { Assign } from '../lib/create-style-context'
import { code as codeRecipe, CodeVariantProps } from 'styled-system/recipes'

export type CodeProps = Assign<JSX.IntrinsicElements['code'], CodeVariantProps>

export const Code = (props: CodeProps) => {
  const [codeProps, otherProps] = codeRecipe.splitVariantProps(props)
  return (
    <code {...otherProps} class={[codeRecipe(codeProps), otherProps.class]} />
  )
}

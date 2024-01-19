import { createContext, h, useContext } from 'vitro'

type GenericProps = Record<string, unknown>
type StyleRecipe = {
  __type: GenericProps
  (props?: GenericProps): Record<string, string>
  splitVariantProps: (props: GenericProps) => any
}
type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>
type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>

export type Assign<T, U> = Omit<T, keyof U> & U

type ComponentVariants<
  T extends keyof JSX.IntrinsicElements | ((props: any) => JSX.Child),
  R extends StyleRecipe,
> = T extends keyof JSX.IntrinsicElements
  ? (props: Assign<JSX.IntrinsicElements[T], R['__type']>) => JSX.Child
  : T extends (props: infer P) => JSX.Child
    ? (props: Assign<P, R['__type']>) => JSX.Child
    : never

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<StyleSlotRecipe<R>>()

  const withProvider = <
    T extends keyof JSX.IntrinsicElements | ((props: any) => JSX.Child),
  >(
    component: T,
    slot?: StyleSlot<R>,
  ): ComponentVariants<T, R> => {
    const StyledComponent = (props: any) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props)
      const slotStyles = recipe(variantProps) as StyleSlotRecipe<R>
      return (
        <StyleContext.Provider value={slotStyles}>
          {h(component, {
            ...otherProps,
            class:
              slotStyles && slot
                ? [slotStyles[slot], otherProps.class]
                : otherProps.class,
          })}
        </StyleContext.Provider>
      )
    }
    return StyledComponent as ComponentVariants<T, R>
  }

  const withContext = <T,>(component: T, slot?: StyleSlot<R>): T => {
    if (!slot) return component as unknown as T
    const slotStyles = useContext(StyleContext)
    return ((props: Assign<T, R>) =>
      h(
        component as any,
        {
          ...props,
          class:
            slotStyles && slot
              ? [slotStyles[slot], props['class']]
              : props['class'],
        } as any,
      )) as unknown as T
  }

  return {
    withProvider,
    withContext,
  }
}

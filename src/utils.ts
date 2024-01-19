function createCounter(prefix: string = 'v', start = 0) {
  let count = start
  return () => {
    return `${prefix}${++count}`
  }
}

export const createSequenceId = createCounter()

export function applyChildren(
  children: JSX.Child | ((arg: any) => JSX.Child) | undefined,
  value: any,
) {
  return typeof children === 'function' ? children(value) : children
}

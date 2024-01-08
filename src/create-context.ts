import {
  createContext as createVitroContext,
  useContext as useVitroContext,
} from 'vitro'

export interface CreateContextOptions<T> {
  hookName?: string
  providerName?: string
  errorMessage?: string
  defaultValue?: T
}

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
  } = options

  const Ctx = createVitroContext<T>()

  function useContext(): T {
    const context = useVitroContext(Ctx)

    if (!context) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName),
      )
      error.name = 'ContextError'
      // @ts-ignore
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [Ctx.Provider, useContext] as const
}

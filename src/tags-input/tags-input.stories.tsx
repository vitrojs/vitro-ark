import { For } from 'vitro'
import { TagsInput } from '.'
import { tagsInput } from 'styled-system/recipes'

const styles = tagsInput()

export const Basic = () => (
  <TagsInput.Root>
    {(api) => (
      <>
        <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
        <TagsInput.Control class={styles.control}>
          <For values={() => api().value}>
            {(value, index) => (
              <TagsInput.Item class={styles.item} index={index} value={value}>
                <TagsInput.ItemText class={styles.itemText}>
                  {value}
                </TagsInput.ItemText>
                <TagsInput.ItemInput class={styles.itemInput} />
                <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                  Delete
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            )}
          </For>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear All
          </TagsInput.ClearTrigger>
        </TagsInput.Control>
      </>
    )}
  </TagsInput.Root>
)

export const InitialValue = () => {
  return (
    <TagsInput.Root value={['React', 'Solid', 'Vue']}>
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add tag' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const MaxWithOverflow = () => {
  return (
    <TagsInput.Root max={3} allowOverflow>
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const Validated = () => {
  return (
    <TagsInput.Root
      validate={(details) => {
        return !details.value.includes(details.inputValue)
      }}
    >
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const BlurBehavior = () => {
  return (
    <TagsInput.Root blurBehavior='add'>
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const PasteBehavior = () => {
  return (
    <TagsInput.Root addOnPaste delimiter=','>
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const DisabledEditing = () => {
  return (
    <TagsInput.Root allowEditTag={false}>
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

export const OnEvent = () => {
  return (
    <TagsInput.Root
      onValueChange={(details) => {
        console.log('tags changed to:', details.value)
      }}
      onHighlightChange={(details) => {
        console.log('highlighted tag:', details.highlightedValue)
      }}
      onValueInvalid={(details) => {
        console.log('Invalid!', details.reason)
      }}
      max={3}
      allowOverflow
      validate={(details) => {
        return !details.value.includes(details.inputValue)
      }}
    >
      {(api) => (
        <>
          <TagsInput.Label class={styles.label}>Frameworks</TagsInput.Label>
          <TagsInput.Control class={styles.control}>
            <For values={() => api().value}>
              {(value, index) => (
                <TagsInput.Item class={styles.item} index={index} value={value}>
                  <TagsInput.ItemText class={styles.itemText}>
                    {value}
                  </TagsInput.ItemText>
                  <TagsInput.ItemInput class={styles.itemInput} />
                  <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
          </TagsInput.Control>
          <TagsInput.Input class={styles.input} placeholder='Add Framework' />
          <TagsInput.ClearTrigger class={styles.clearTrigger}>
            Clear all
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}

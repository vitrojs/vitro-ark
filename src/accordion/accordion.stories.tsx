import { $, For } from 'vitro'
import { Accordion } from '.'

import { accordion } from 'styled-system/recipes'
import { LucideChevronDown } from '../../components/icons'

const styles = accordion()

export const Basic = () => {
  return (
    <Accordion.Root class={styles.root} value={['React']}>
      <For values={['React', 'Solid', 'Vue']}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              What is {item}?
              <Accordion.ItemIndicator class={styles.itemIndicator}>
                <LucideChevronDown />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const RenderProp = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root>
      <For values={items}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            {(api) => (
              <>
                <Accordion.ItemTrigger class={styles.itemTrigger}>
                  {api().isOpen ? 'Close' : 'Open'}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent class={styles.itemContent}>
                  {item} content
                </Accordion.ItemContent>
              </>
            )}
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}
export const Collapsible = () => {
  return (
    <Accordion.Root value={['React']} collapsible>
      <For values={['React', 'Solid', 'Vue']}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              What is {item}?
              <Accordion.ItemIndicator class={styles.itemIndicator}>
                <LucideChevronDown />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Multiple = () => {
  return (
    <Accordion.Root value={['React']} multiple>
      <For values={['React', 'Solid', 'Vue']}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              What is {item}?
              <Accordion.ItemIndicator class={styles.itemIndicator}>
                <LucideChevronDown />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Controlled = () => {
  const value = $<string[]>([])
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root
      value={value}
      onValueChange={(details) => value(details.value)}
    >
      <For values={items}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              {item} trigger
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} content
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Vertical = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root orientation='vertical'>
      <For values={items}>
        {(item) => (
          <Accordion.Item class={styles.item} value={item}>
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              {item} trigger
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} content
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Disabled = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root>
      <For values={items}>
        {(item) => (
          <Accordion.Item
            class={styles.item}
            value={item}
            disabled={item === 'panel-2'}
          >
            <Accordion.ItemTrigger class={styles.itemTrigger}>
              {item} trigger
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent}>
              {item} content
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

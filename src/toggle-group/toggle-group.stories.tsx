import { ToggleGroup } from '.'
import { toggleGroup } from 'styled-system/recipes'
const styles = toggleGroup({ variant: 'ghost' })
export const Basic = () => {
  return (
    <ToggleGroup.Root class={styles.root}>
      <ToggleGroup.Item class={styles.item} value='a'>
        A
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='b'>
        B
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='c'>
        C
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}

export const InitialValue = () => {
  return (
    <ToggleGroup.Root class={styles.root} value={['b']}>
      <ToggleGroup.Item class={styles.item} value='a'>
        A
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='b'>
        B
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='c'>
        C
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}

export const Multiple = () => {
  return (
    <ToggleGroup.Root class={styles.root}>
      <ToggleGroup.Item class={styles.item} value='a'>
        A
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='b'>
        B
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item} value='c'>
        C
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}

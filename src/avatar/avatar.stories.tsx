import { Avatar } from '.'

import { avatar } from 'styled-system/recipes'

const styles = avatar()

export const Basic = () => (
  <Avatar.Root class={styles.root}>
    <Avatar.Fallback class={styles.fallback}>PA</Avatar.Fallback>
    <Avatar.Image
      class={styles.image}
      src='https://i.pravatar.cc/300'
      alt='avatar'
    />
  </Avatar.Root>
)

export const Events = () => (
  <Avatar.Root
    class={styles.root}
    onLoadingStatusChange={(details) => console.log(details.status)}
  >
    <Avatar.Fallback class={styles.fallback}>PA</Avatar.Fallback>
    <Avatar.Image
      class={styles.image}
      src='https://i.pravatar.cc/3000'
      alt='avatar'
    />
  </Avatar.Root>
)

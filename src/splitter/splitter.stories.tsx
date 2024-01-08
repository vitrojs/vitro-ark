import { splitter } from 'styled-system/recipes'
import { Splitter } from '.'

const styles = splitter()

export const Basic = () => (
  <Splitter.Root
    class={styles.root}
    size={[
      { id: 'a', size: 50 },
      { id: 'b', size: 50 },
    ]}
  >
    <Splitter.Panel class={styles.panel} id='a'>
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger
      class={[styles.resizeTrigger]}
      style={{
        height: '20px',
      }}
      id='a:b'
    />
    <Splitter.Panel class={styles.panel} id='b'>
      B
    </Splitter.Panel>
  </Splitter.Root>
)

export const RenderProp = () => (
  <Splitter.Root
    class={styles.root}
    size={[
      { id: 'a', size: 50 },
      { id: 'b', size: 50 },
    ]}
  >
    {(api) => (
      <>
        <Splitter.Panel class={styles.panel} id='a'>
          <button onClick={() => api().setSize('a', 10)}>Set to 10%</button>
        </Splitter.Panel>
        <Splitter.ResizeTrigger
          class={styles.resizeTrigger}
          id='a:b'
          style={{
            height: '20px',
          }}
        />
        <Splitter.Panel class={styles.panel} id='b'>
          <button onClick={() => api().setSize('b', 10)}>Set to 10%</button>
        </Splitter.Panel>
      </>
    )}
  </Splitter.Root>
)

export const Events = () => (
  <Splitter.Root
    class={styles.root}
    size={[
      { id: 'a', size: 50 },
      { id: 'b', size: 50 },
    ]}
    onSizeChangeStart={(details) => console.log('onSizeChangeStart', details)}
    onSizeChangeEnd={(details) => console.log('onSizeChangeEnd', details)}
  >
    <Splitter.Panel class={styles.panel} id='a'>
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger
      style={{
        height: '20px',
      }}
      class={styles.resizeTrigger}
      id='a:b'
    />
    <Splitter.Panel class={styles.panel} id='b'>
      B
    </Splitter.Panel>
  </Splitter.Root>
)

export const Vertical = () => {
  return (
    <Splitter.Root
      class={styles.root}
      orientation='vertical'
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
      style={{
        minHeight: '600px',
      }}
    >
      <Splitter.Panel class={styles.panel} id='a'>
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger
        style={{
          height: '20px',
        }}
        class={styles.resizeTrigger}
        id='a:b'
      />
      <Splitter.Panel class={styles.panel} id='b'>
        B
      </Splitter.Panel>
    </Splitter.Root>
  )
}

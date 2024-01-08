import { For, $ } from 'vitro'
import { SegmentGroup } from '.'

export const Basic = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root>
      <SegmentGroup.Indicator />
      <For values={frameworks}>
        {(framework) => (
          <SegmentGroup.Item value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  )
}

export const InitialValue = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root value='React'>
      <SegmentGroup.Indicator />
      <For values={frameworks}>
        {(framework) => (
          <SegmentGroup.Item value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  )
}

export const Controlled = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  const value = $('React')
  return (
    <SegmentGroup.Root value={value()} onValueChange={(e) => value(e.value)}>
      <SegmentGroup.Indicator />
      <For values={frameworks}>
        {(framework) => (
          <SegmentGroup.Item value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  )
}

export const Disabled = () => {
  const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <SegmentGroup.Root value={'React'}>
      <SegmentGroup.Indicator />
      <For values={frameworks}>
        {(framework) => (
          <SegmentGroup.Item
            value={framework}
            disabled={framework === 'Svelte'}
          >
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  )
}

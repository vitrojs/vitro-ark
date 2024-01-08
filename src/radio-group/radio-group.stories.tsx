import { For } from 'vitro'
import { RadioGroup } from '.'

export const Basic = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <RadioGroup.Indicator />
      <For values={frameworks}>
        {(framework) => (
          <RadioGroup.Item value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  )
}

export const Disabled = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root disabled>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <For values={frameworks}>
        {(framework) => (
          <RadioGroup.Item value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  )
}

export const InitialValue = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root value='Solid'>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <For values={frameworks}>
        {(framework) => (
          <RadioGroup.Item value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  )
}

export const OnEvent = () => {
  const frameworks = ['React', 'Solid', 'Vue']

  return (
    <RadioGroup.Root onValueChange={(details) => console.log(details.value)}>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <For values={frameworks}>
        {(framework) => (
          <RadioGroup.Item value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  )
}

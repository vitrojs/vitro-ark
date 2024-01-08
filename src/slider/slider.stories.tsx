import { slider } from 'styled-system/recipes'
import { Slider } from '.'
const styles = slider()

export const Demo = () => {
  return (
    <Slider.Root min={0} max={100} value={[33]}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
      <Slider.MarkerGroup class={styles.markerGroup}>
        <Slider.Marker class={styles.marker} value={25}>
          25
        </Slider.Marker>
        <Slider.Marker class={styles.marker} value={50}>
          50
        </Slider.Marker>
        <Slider.Marker class={styles.marker} value={75}>
          75
        </Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}

export const Basic = () => {
  return (
    <Slider.Root class={styles.root}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText}>Foo</Slider.ValueText>
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

export const Range = () => {
  return (
    <Slider.Root class={styles.root} min={-50} max={50} value={[-10, 20]}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
        <Slider.Thumb class={styles.thumb} index={1} />
      </Slider.Control>
      <Slider.MarkerGroup>
        <Slider.Marker value={-30}>*</Slider.Marker>
        <Slider.Marker value={0}>*</Slider.Marker>
        <Slider.Marker value={30}>*</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}

export const WithMarks = () => {
  return (
    <Slider.Root class={styles.root}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
      <Slider.MarkerGroup>
        <Slider.Marker value={0}>0</Slider.Marker>
        <Slider.Marker value={25}>*</Slider.Marker>
        <Slider.Marker value={50}>50</Slider.Marker>
        <Slider.Marker value={75}>*</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}

export const InitialValue = () => (
  <Slider.Root class={styles.root} value={[42]}>
    <Slider.Label class={styles.label}>Label</Slider.Label>
    <Slider.ValueText class={styles.valueText} />
    <Slider.Control class={styles.control}>
      <Slider.Track class={styles.track}>
        <Slider.Range class={styles.range} />
      </Slider.Track>
      <Slider.Thumb class={styles.thumb} index={0} />
    </Slider.Control>
    <Slider.MarkerGroup>
      <Slider.Marker value={0}>*</Slider.Marker>
      <Slider.Marker value={30}>*</Slider.Marker>
      <Slider.Marker value={60}>*</Slider.Marker>
    </Slider.MarkerGroup>
  </Slider.Root>
)

export const MinMax = () => {
  return (
    <Slider.Root class={styles.root} min={-10} max={10}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

export const Step = () => {
  return (
    <Slider.Root class={styles.root} step={0.01} min={5} max={10}>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

export const OnEvent = () => {
  return (
    <Slider.Root
      class={styles.root}
      onValueChange={(details) => console.log(details.value)}
      onValueChangeEnd={(details) => console.log(details.value)}
    >
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

export const Vertical = () => {
  return (
    <Slider.Root class={styles.root} orientation='vertical'>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

export const CenterOrigin = () => {
  return (
    <Slider.Root class={styles.root} origin='center'>
      <Slider.Label class={styles.label}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText} />
      <Slider.Control class={styles.control}>
        <Slider.Track class={styles.track}>
          <Slider.Range class={styles.range} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb} index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}

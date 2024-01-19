import {
  Splitter as ArkSplitter,
  type SplitterProps as ArkSplitterProps,
} from '@vitro/ark'

import { splitter, SplitterVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)
export type SplitterProps = Assign<ArkSplitterProps, SplitterVariantProps>

const Splitter: JSX.Component<SplitterProps> = withProvider(
  ArkSplitter.Root,
  'root',
)
const SplitterPanel = withContext(ArkSplitter.Panel, 'panel')
const SplitterResizeTrigger = withContext(
  ArkSplitter.ResizeTrigger,
  'resizeTrigger',
)

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export {
  // Splitter,
  // SplitterPanel,
  // SplitterResizeTrigger,

  Panel,
  ResizeTrigger,
  Root,
}

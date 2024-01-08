import { For, If, render } from 'vitro'

import '../styled-system/styles.css'

import * as checkbox from './checkbox/checkbox.stories'
import * as presence from './presence/presence.stories'

import * as avatar from './avatar/avatar.stories'
import * as carousel from './carousel/carousel.stories'
import * as colorPicker from './color-picker/color-picker.stories'
import * as combobox from './combobox/combobox.stories'
import * as datePicker from './date-picker/date-picker.stories'
import * as dialog from './dialog/dialog.stories'
import * as editable from './editable/editable.stories'
import * as fileUpload from './file-upload/file-upload.stories'
import * as menu from './menu/menu.stories'
import * as numberInput from './number-input/number-input.stories'
import * as pinInput from './pin-input/pin-input.stories'
import * as popover from './popover/popover.stories'
import * as ratingGroup from './rating-group/rating-group.stories'
import * as slider from './slider/slider.stories'
import * as splitter from './splitter/splitter.stories'
import * as switcher from './switch/switch.stories'
import * as tabs from './tabs/tabs.stories'
import * as tagsInput from './tags-input/tags-input.stories'
import * as toast from './toast/toast.stories'
import * as toggleGroup from './toggle-group/toggle-group.stories'
import * as tooltip from './tooltip/tooltip.stories'

import { grid } from 'styled-system/patterns'
import { accordion as accordionRecipe } from 'styled-system/recipes'
import { Accordion } from './accordion'
import * as hoverCard from './hover-card/hover-card.stories'
import * as pagination from './pagination/pagination.stories'
import * as segmentGroup from './segment-group/segment-group.stories'
import * as select from './select/select.stories'

const styles = {
  accordion: accordionRecipe(),
}

const Demo = ({
  title,
  hidden,
  items,
}: {
  title: string
  hidden?: boolean
  items: { name: string; element: JSX.Child }[]
}) => {
  return (
    <If when={!hidden}>
      <Accordion.Root
        multiple
        lazyMount
        unmountOnExit
        class={styles.accordion.root}
        value={[]}
      >
        <For values={items}>
          {(item) => (
            <>
              <Accordion.Item class={styles.accordion.item} value={item.name}>
                <Accordion.ItemTrigger class={styles.accordion.itemTrigger}>
                  {title} {item.name}
                  <Accordion.ItemIndicator
                    class={styles.accordion.itemIndicator}
                  >
                    <i
                      class='i
                    server_id   chevron-down'
                    />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent class={styles.accordion.itemContent}>
                  {item.element}
                </Accordion.ItemContent>
              </Accordion.Item>
            </>
          )}
        </For>
      </Accordion.Root>
    </If>
  )
}

const App = () => {
  return (
    <div
      class={[
        // flex({ direction: 'column', p: '3' })
        grid({ gridTemplateColumns: 'repeat(2, 1fr)', gap: '3', p: '3' }),
      ]}
    >
      <Demo
        title='Avatar'
        items={[
          { name: 'Basic', element: <avatar.Basic /> },
          { name: 'Events', element: <avatar.Events /> },
        ]}
      />
      <Demo
        title='Presence'
        items={[
          { name: 'Basic', element: <presence.Basic /> },
          { name: 'LazyMount', element: <presence.LazyMount /> },
          {
            name: 'LazyMountAndUnmountOnExit',
            element: <presence.LazyMountAndUnmountOnExit />,
          },
          { name: 'UnmountOnExit', element: <presence.UnmountOnExit /> },
        ]}
      />
      <Demo
        title='Checkbox'
        items={[
          { name: 'Basic', element: <checkbox.Basic /> },
          { name: 'Controlled', element: <checkbox.Controlled /> },
          { name: 'Indeterminate', element: <checkbox.Indeterminate /> },
          { name: 'RenderProp', element: <checkbox.RenderProp /> },
        ]}
      />

      <Demo
        title='Combobox'
        items={[
          { name: 'Basic', element: <combobox.Basic /> },
          { name: 'Advanced', element: <combobox.Advanced /> },
        ]}
      />

      <Demo
        title='Tabs'
        items={[
          { name: 'Basic', element: <tabs.Basic /> },
          { name: 'Controlled', element: <tabs.Controlled /> },
          { name: 'DisabledTab', element: <tabs.DisabledTab /> },
          { name: 'Indicator', element: <tabs.Indicator /> },
          { name: 'InitialTab', element: <tabs.InitialTab /> },
          { name: 'Manual', element: <tabs.Manual /> },
        ]}
      />

      <Demo
        title='Dialog'
        items={[{ name: 'Demo', element: <dialog.Demo /> }]}
      />

      <Demo
        title='Editable'
        items={[
          { name: 'Basic', element: <editable.Basic /> },
          { name: 'CustomControls', element: <editable.CustomControls /> },
        ]}
      />

      <Demo
        hidden
        title='Popover'
        items={[
          { name: 'Basic', element: <popover.Basic /> },
          {
            name: 'Arrow',
            element: <popover.Arrow />,
          },
          {
            name: 'CloseBehavior',
            element: <popover.CloseBehavior />,
          },
          {
            name: 'Controlled',
            element: <popover.Controlled />,
          },
          {
            name: 'Modal',
            element: <popover.Modal />,
          },
          {
            name: 'OnOpenChange',
            element: <popover.OnOpenChange />,
          },
          {
            name: 'Portalled',
            element: <popover.Portalled />,
          },
          {
            name: 'Positioning',
            element: <popover.Positioning />,
          },
          {
            name: 'RenderFn',
            element: <popover.RenderFn />,
          },
        ]}
      />
      <Demo
        title='Tooltip'
        items={[
          { name: 'Basic', element: <tooltip.Basic /> },
          { name: 'Arrow', element: <tooltip.Arrow /> },
          { name: 'Controlled', element: <tooltip.Controlled /> },
          { name: 'Positioning', element: <tooltip.Positioning /> },
          { name: 'RenderFn', element: <tooltip.RenderFn /> },
          { name: 'Timings', element: <tooltip.Timings /> },
        ]}
      />

      <Demo
        title='ToggleGroup'
        items={[
          { name: 'Basic', element: <toggleGroup.Basic /> },
          { name: 'InitialValue', element: <toggleGroup.InitialValue /> },
          { name: 'Multiple', element: <toggleGroup.Multiple /> },
        ]}
      />
      <Demo
        title='Slider'
        items={[
          { name: 'Basic', element: <slider.Basic /> },
          { name: 'CenterOrigin', element: <slider.CenterOrigin /> },
          { name: 'Demo', element: <slider.Demo /> },
          { name: 'InitialValue', element: <slider.InitialValue /> },
          { name: 'MinMax', element: <slider.MinMax /> },
          { name: 'OnEvent', element: <slider.OnEvent /> },
          { name: 'Range', element: <slider.Range /> },
          { name: 'Step', element: <slider.Step /> },
          { name: 'Vertical', element: <slider.Vertical /> },
          { name: 'WithMarks', element: <slider.WithMarks /> },
        ]}
      />
      <Demo
        title='splitter'
        items={[
          { name: 'Basic', element: <splitter.Basic /> },
          { name: 'Events', element: <splitter.Events /> },
          { name: 'RenderProp', element: <splitter.RenderProp /> },
          { name: 'Vertical', element: <splitter.Vertical /> },
        ]}
      />
      <Demo
        title='HoverCard'
        items={[
          { name: 'Basic', element: <hoverCard.Basic /> },
          { name: 'Controlled', element: <hoverCard.Controlled /> },
          { name: 'Positioning', element: <hoverCard.Positioning /> },
          { name: 'RenderProp', element: <hoverCard.RenderProp /> },
        ]}
      />
      <Demo
        title='Menu'
        items={[
          { name: 'Basic', element: <menu.Basic /> },
          { name: 'ComplexSubMenu', element: <menu.ComplexSubMenu /> },
          { name: 'ContextMenu', element: <menu.ContextMenu /> },
          { name: 'Controlled', element: <menu.Controlled /> },
          { name: 'Group', element: <menu.Group /> },
          { name: 'Options', element: <menu.Options /> },
          { name: 'Separator', element: <menu.Separator /> },
          { name: 'SubMenu', element: <menu.SubMenu /> },
        ]}
      />
      <Demo
        title='SegmentGroup'
        items={[
          { name: 'Basic', element: <segmentGroup.Basic /> },
          { name: 'Controlled', element: <segmentGroup.Controlled /> },
          { name: 'Disabled', element: <segmentGroup.Disabled /> },
          { name: 'InitialValue', element: <segmentGroup.InitialValue /> },
        ]}
      />
      <Demo
        hidden
        title='Select'
        items={[
          { name: 'Basic', element: <select.Basic /> },
          { name: 'Advanced', element: <select.Advanced /> },
          { name: 'Controlled', element: <select.Controlled /> },
          { name: 'Multiple', element: <select.Multiple /> },
        ]}
      />
      <Demo
        title='TagsInput'
        items={[
          { name: 'Basic', element: <tagsInput.Basic /> },
          { name: 'BlurBehavior', element: <tagsInput.BlurBehavior /> },
          { name: 'DisabledEditing', element: <tagsInput.DisabledEditing /> },
          { name: 'InitialValue', element: <tagsInput.InitialValue /> },
          { name: 'MaxWithOverflow', element: <tagsInput.MaxWithOverflow /> },
          { name: 'OnEvent', element: <tagsInput.OnEvent /> },
          { name: 'PasteBehavior', element: <tagsInput.PasteBehavior /> },
          { name: 'Validated', element: <tagsInput.Validated /> },
        ]}
      />
      <Demo
        title='PinInput'
        items={[
          { name: 'Basic', element: <pinInput.Basic /> },
          { name: 'Blurred', element: <pinInput.Blurred /> },
          { name: 'Customized', element: <pinInput.Customized /> },
          { name: 'InitialValue', element: <pinInput.InitialValue /> },
          { name: 'OTPMode', element: <pinInput.OTPMode /> },
          { name: 'WithMask', element: <pinInput.WithMask /> },
        ]}
      />
      <Demo
        title='Toast'
        items={[
          { name: 'Basic', element: <toast.Basic /> },
          { name: 'CustomRender', element: <toast.CustomRender /> },
          { name: 'Customized', element: <toast.Customized /> },
        ]}
      />
      <Demo
        title='FileUpload'
        items={[{ name: 'Basic', element: <fileUpload.Basic /> }]}
      />
      <Demo
        title='DataPicker'
        items={[
          { name: 'Basic', element: <datePicker.Basic /> },
          {
            name: 'RangeWithSingleGrid',
            element: <datePicker.RangeWithSingleGrid />,
          },
          { name: 'Standalone', element: <datePicker.Standalone /> },
        ]}
      />
      <Demo
        title='RatingGroup'
        items={[
          { name: 'Basic', element: <ratingGroup.Basic /> },
          { name: 'Controlled', element: <ratingGroup.Controlled /> },
          { name: 'Disabled', element: <ratingGroup.Disabled /> },
          { name: 'FormUsage', element: <ratingGroup.FormUsage /> },
          { name: 'HalfRatings', element: <ratingGroup.HalfRatings /> },
          { name: 'InitialValue', element: <ratingGroup.InitialValue /> },
          { name: 'ReadOnly', element: <ratingGroup.ReadOnly /> },
        ]}
      />
      <Demo
        title='Carousel'
        items={[
          { name: 'Basic', element: <carousel.Basic /> },
          { name: 'Controlled', element: <carousel.Controlled /> },
          { name: 'Customized', element: <carousel.Customized /> },
        ]}
      />
      <Demo
        title='ColorPicker'
        items={[
          { name: 'Basic', element: <colorPicker.Basic /> },
          { name: 'Controlled', element: <colorPicker.Controlled /> },
        ]}
      />
      <Demo
        title='NumberInput'
        items={[
          { name: 'Basic', element: <numberInput.Basic /> },
          { name: 'FormUsage', element: <numberInput.FormUsage /> },
          { name: 'Formatted', element: <numberInput.Formatted /> },
          { name: 'FractionDigits', element: <numberInput.FractionDigits /> },
          { name: 'MinMax', element: <numberInput.MinMax /> },
          { name: 'MouseWheel', element: <numberInput.MouseWheel /> },
          { name: 'NoClamp', element: <numberInput.NoClamp /> },
          { name: 'RenderFn', element: <numberInput.RenderFn /> },
          { name: 'Scrubber', element: <numberInput.Scrubber /> },
        ]}
      />
      <Demo
        title='Pagination'
        items={[
          { name: 'Basic', element: <pagination.Basic /> },
          { name: 'Controlled', element: <pagination.Controlled /> },
          { name: 'Customized', element: <pagination.Customized /> },
        ]}
      />
      <Demo
        title='Switch'
        items={[
          { name: 'Basic', element: <switcher.Basic /> },
          { name: 'Controlled', element: <switcher.Controlled /> },
          { name: 'Disabled', element: <switcher.Disabled /> },
          { name: 'InitialValue', element: <switcher.InitialValue /> },
          { name: 'RenderProp', element: <switcher.RenderProp /> },
        ]}
      />
    </div>
  )
}

export function LucideChevronDown(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='#888888'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='m6 9l6 6l6-6'
      ></path>
    </svg>
  )
}

render(<App />, document.getElementById('root'))

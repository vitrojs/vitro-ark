import * as menu from '@zag-js/menu'
import {
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'

import type { Observify } from '@vitro/zag'
import { type PropTypes } from '@vitro/zag'
import { useEffect, useMemo } from 'vitro'
import { Accessor } from '../types'
import { applyChildren } from '../utils'
import {
  MenuMachineProvider,
  MenuProvider,
  MenuTriggerItemProvider,
  useMenuContext,
  useMenuMachineContext,
} from './menu-context'
import { useMenu, type UseMenuProps } from './use-menu'
export type MenuProps = Observify<UseMenuProps & UsePresenceProps> & {
  // TODO simplify this
  children?: JSX.Element | ((api: Accessor<menu.Api<PropTypes>>) => JSX.Element)
}

export const Menu = ({
  lazyMount,
  onExitComplete,
  present,
  unmountOnExit,
  // ----
  'aria-label': ariaLabel,
  anchorPoint,
  closeOnSelect,
  dir,
  getRootNode,
  highlightedId,
  id,
  ids,
  loop,
  onFocusOutside,
  onInteractOutside,
  onOpenChange,
  onPointerDownOutside,
  onSelect,
  onValueChange,
  open,
  positioning,
  value,

  // ----
  children,
  ...props
}: MenuProps) => {
  const parentMenu = useMenuContext()
  const parentMachine = useMenuMachineContext()
  const menu = useMenu({
    'aria-label': ariaLabel,
    anchorPoint,
    closeOnSelect,
    dir,
    getRootNode,
    highlightedId,
    id,
    ids,
    loop,
    onFocusOutside,
    onInteractOutside,
    onOpenChange,
    onPointerDownOutside,
    onSelect,
    onValueChange,
    open,
    positioning,
    value,
  })
  const apiPresence = usePresence({
    lazyMount,
    onExitComplete,
    unmountOnExit,
    present: useMemo(() => menu().api().isOpen),
  })

  useEffect(() => {
    if (!parentMachine) return
    parentMenu?.().setChild(menu().machine)
    menu().api().setParent(parentMachine())
  })

  const triggerItemContext = useMemo(
    () => parentMenu?.().getTriggerItemProps(menu().api()),
  )
  const machineContext = () => menu().machine

  return (
    <MenuTriggerItemProvider value={triggerItemContext}>
      <MenuMachineProvider value={machineContext}>
        <MenuProvider value={menu().api}>
          <PresenceProvider value={apiPresence}>
            {applyChildren(children, menu().api)}
          </PresenceProvider>
        </MenuProvider>
      </MenuMachineProvider>
    </MenuTriggerItemProvider>
  )
}

import { Menu as ArkMenu, type MenuProps as ArkMenuProps } from '@vitro/ark'

import { MenuVariantProps, menu } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)
export type MenuProps = Assign<ArkMenuProps, MenuVariantProps>

const Menu: JSX.Component<MenuProps> = withProvider(ArkMenu.Root)
const MenuArrow = withContext(ArkMenu.Arrow, 'arrow')
const MenuArrowTip = withContext(ArkMenu.ArrowTip, 'arrowTip')
const MenuContent = withContext(ArkMenu.Content, 'content')
const MenuContextTrigger = withContext(ArkMenu.ContextTrigger, 'contextTrigger')
// const MenuIndicator = withContext(ArkMenu.Indicator, 'indicator')
const MenuItem = withContext(ArkMenu.Item, 'item')
const MenuItemGroup = withContext(ArkMenu.ItemGroup, 'itemGroup')
const MenuItemGroupLabel = withContext(ArkMenu.ItemGroupLabel, 'itemGroupLabel')
const MenuOptionItem = withContext(ArkMenu.OptionItem, 'optionItem')
// const MenuOptionItemIndicator = withContext(
//   ArkMenu.OptionItemIndicator,
//   'optionItemIndicator',
// )

// const MenuOptionItemText = withContext(ArkMenu.OptionItemText, 'optionItemText')
const MenuPositioner = withContext(ArkMenu.Positioner, 'positioner')
const MenuSeparator = withContext(ArkMenu.Separator, 'separator')
const MenuTrigger = withContext(ArkMenu.Trigger, 'trigger')
const MenuTriggerItem = withContext(ArkMenu.TriggerItem, 'triggerItem')

const Root = Menu
const Arrow = MenuArrow
const ArrowTip = MenuArrowTip
const Content = MenuContent
const ContextTrigger = MenuContextTrigger
// const Indicator = MenuIndicator
const Item = MenuItem
const ItemGroup = MenuItemGroup
const ItemGroupLabel = MenuItemGroupLabel
const OptionItem = MenuOptionItem
// const OptionItemIndicator = MenuOptionItemIndicator
// const OptionItemText = MenuOptionItemText
const Positioner = MenuPositioner
const Separator = MenuSeparator
const Trigger = MenuTrigger
const TriggerItem = MenuTriggerItem

export {
  // Menu,
  // MenuArrow,
  // MenuArrowTip,
  // MenuContent,
  // MenuContextTrigger,
  // MenuIndicator,
  // MenuItem,
  // MenuItemGroup,
  // MenuItemGroupLabel,
  // MenuOptionItem,
  // MenuOptionItemIndicator,
  // MenuOptionItemText,
  // MenuPositioner,
  // MenuSeparator,
  // MenuTrigger,
  // MenuTriggerItem,

  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  // Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  OptionItem,
  // OptionItemIndicator,
  // OptionItemText,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
}

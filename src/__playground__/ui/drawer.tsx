import {
  Dialog as ArkDrawer,
  type DialogProps as ArkDrawerProps,
} from '@vitro/ark'

import { drawer, type DrawerVariantProps } from 'styled-system/recipes'

import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)
export type DrawerProps = Assign<ArkDrawerProps, DrawerVariantProps>

const Drawer: JSX.Component<DrawerProps> = withProvider(ArkDrawer.Root)
const DrawerBackdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
const DrawerBody = withContext('div', 'body')
const DrawerCloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
const DrawerContent = withContext(ArkDrawer.Content, 'content')
const DrawerDescription = withContext(ArkDrawer.Description, 'description')
const DrawerFooter = withContext('div', 'footer')
const DrawerHeader = withContext('div', 'header')
const DrawerPositioner = withContext(ArkDrawer.Positioner, 'positioner')
const DrawerTitle = withContext(ArkDrawer.Title, 'title')
const DrawerTrigger = withContext(ArkDrawer.Trigger, 'trigger')

const Root = Drawer
const Backdrop = DrawerBackdrop
const Body = DrawerBody
const CloseTrigger = DrawerCloseTrigger
const Content = DrawerContent
const Description = DrawerDescription
const Footer = DrawerFooter
const Header = DrawerHeader
const Positioner = DrawerPositioner
const Title = DrawerTitle
const Trigger = DrawerTrigger

export {
  // Drawer,
  // DrawerBackdrop,
  // DrawerBody,
  // DrawerCloseTrigger,
  // DrawerContent,
  // DrawerDescription,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerPositioner,
  // DrawerTitle,
  // DrawerTrigger,
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
}

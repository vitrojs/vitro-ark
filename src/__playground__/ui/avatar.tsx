import {
  Avatar as ArkAvatar,
  type AvatarProps as ArkAvatarProps,
} from '@vitro/ark'

import { type AvatarVariantProps, avatar } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

export type AvatarProps = AvatarVariantProps & ArkAvatarProps

const { withProvider, withContext } = createStyleContext(avatar)

const Avatar: JSX.Component<AvatarProps> = withProvider(ArkAvatar.Root, 'root')
const AvatarFallback = withContext(ArkAvatar.Fallback, 'fallback')
const AvatarImage = withContext(ArkAvatar.Image, 'image')

const Root = Avatar
const Fallback = AvatarFallback
const Image = AvatarImage

export {
  // Avatar,
  // AvatarFallback,
  // AvatarImage,

  Fallback,
  Image,
  Root,
}

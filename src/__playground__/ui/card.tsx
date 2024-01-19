import { card } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export type CardProps = JSX.IntrinsicElements['div']

const Card: JSX.Component<CardProps> = withProvider('div', 'root')
const CardBody = withContext('div', 'body')
const CardDescription = withContext('p', 'description')
const CardFooter = withContext('div', 'footer')
const CardHeader = withContext('div', 'header')
const CardTitle = withContext('h3', 'title')

const Root = Card
const Body = CardBody
const Description = CardDescription
const Footer = CardFooter
const Header = CardHeader
const Title = CardTitle

export {
  // Card,
  // CardBody,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
  Description,
  Footer,
  Header,
  Body,
  Root,
  Title,
}

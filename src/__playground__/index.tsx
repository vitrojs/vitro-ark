import { Portal, render } from 'vitro'
import './index.css'

import { Route, Router } from '@vitro/router'
import { container, flex, stack } from 'styled-system/patterns'
import { button, dialog, iconButton } from 'styled-system/recipes'

import { X } from '@vitro/lucide'
import { css } from 'styled-system/css'
import { Dialog } from '../dialog'
import { Environment } from '../environment/environment'

const Layout = () => {
	return (
		<Environment>
			<div
				class={flex({
					p: '2',
				})}
			>
				<Route />
			</div>
		</Environment>
	)
}

const dialogStyles = dialog()

container({})
const App = () => {
	return (
		<Router
			routes={[
				{
					path: '/',
					to: () => (
						<div class={[container(), css({ w: 'full', p: '8' })]}>
							<div class={[container(), flex({ justifyContent: 'center' })]}>
								<Dialog.Root>
									<Dialog.Trigger asChild>
										<button class={[dialogStyles.trigger, button()]}>
											Open Dialog
										</button>
									</Dialog.Trigger>
									<Portal>
										<Dialog.Backdrop class={dialogStyles.backdrop} />
										<Dialog.Positioner class={dialogStyles.positioner}>
											<Dialog.Content class={dialogStyles.content}>
												<div class={stack({ gap: '8', p: '6' })}>
													<div class={stack({ gap: '1' })}>
														<Dialog.Title class={dialogStyles.title}>
															Dialog Title
														</Dialog.Title>
														<Dialog.Description
															class={dialogStyles.description}
														>
															Dialog Description
														</Dialog.Description>
													</div>
													<div
														class={stack({
															gap: '3',
															direction: 'row',
															w: 'full',
														})}
													>
														<Dialog.CloseTrigger asChild>
															<button
																class={[
																	dialogStyles.closeTrigger,
																	button({ variant: 'outline' }),
																	css({ w: 'full' }),
																]}
															>
																Cancel
															</button>
														</Dialog.CloseTrigger>
														<button class={[button(), css({ w: 'full' })]}>
															Confirm
														</button>
													</div>
													<Dialog.CloseTrigger
														asChild
														class={[dialogStyles.closeTrigger]}
													>
														<button
															class={[
																css({ pos: 'absolute', top: '2', right: '2' }),
																iconButton({ variant: 'ghost', size: 'sm' }),
															]}
														>
															<X />
														</button>
													</Dialog.CloseTrigger>
												</div>
											</Dialog.Content>
										</Dialog.Positioner>
									</Portal>
								</Dialog.Root>
							</div>
						</div>
					),
				},
			]}
		>
			<Layout />
		</Router>
	)
}

render(<App />, document.getElementById('root'))

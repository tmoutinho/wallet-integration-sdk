import { WagmiConfig, createClient } from 'wagmi'
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from 'connectkit'
import { ConnectKitStatus } from './connect-kit-status'

const alchemyId = process.env.ALCHEMY_ID

const client = createClient(
  getDefaultClient({
    appName: 'Your App Name',
    alchemyId,
  })
)

export default function ConnectKitIntegration() {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <div className="grid gap-2">
          <ConnectKitButton />
          <ConnectKitStatus />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

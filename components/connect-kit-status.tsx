import { useAccount } from 'wagmi'

export function ConnectKitStatus() {
  const { address, isConnecting, isDisconnected } = useAccount()
  if (isConnecting) return <div>Connecting...</div>
  if (isDisconnected) return <div>Disconnected</div>

  return <div>{address?.slice(0, 15)}... </div>
}

import dynamic from 'next/dynamic'
import Link from 'next/link'

const ConnectKit = dynamic(() => import('@/components/connect-kit'), {
  ssr: false,
})

export default function ConnectKitPage() {
  return (
    <div className="p-10">
      <Link
        href="/"
        className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20 mb-4"
      >
        Back
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-black">
        ConnectKit
      </h1>
      <p className="mt-1 opacity-50">ConnectKit with frame</p>

      <div className="mt-4">
        <ConnectKit />
      </div>
    </div>
  )
}

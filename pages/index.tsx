import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="p-10">
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Wallet integrations
        </h1>
        <p className="mt-1 opacity-50">
          This page demonstrates how to integrate RainbowKit with ConnectKit
          with frame
        </p>

        <div className="flex mt-4 gap-4">
          <Link
            href="/rainbow-kit"
            className="inline-flex justify-center rounded-lg text-sm font-medium py-2 px-3 bg-slate-900 text-white hover:bg-slate-700 "
          >
            RainbowKit
          </Link>

          <Link
            href="/connect-kit"
            className="inline-flex justify-center rounded-lg text-sm font-medium py-2 px-3 bg-slate-900 text-white hover:bg-slate-700 "
          >
            ConnectKit
          </Link>
        </div>
      </div>
    </main>
  )
}

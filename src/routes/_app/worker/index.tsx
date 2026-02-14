import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { QrCode } from 'lucide-react'

import { Scanner } from '@yudiel/react-qr-scanner'

export const Route = createFileRoute('/_app/worker/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isPaused, setIsPaused] = useState(true)
  const [qrCodeString, setQrCodeString] = useState('')

  const handleScan = (detectedCodes: any) => {
    console.log('Detected codes:', detectedCodes)
    // detectedCodes is an array of IDetectedBarcode objects
    detectedCodes.forEach((code: any) => {
      console.log(`Format: ${code.format}, Value: ${code.rawValue}`)
    })
    setIsPaused(true)
    setQrCodeString(detectedCodes[0].rawValue)
  }

  return (
    <div className="flex-1 p-5 pb-10 flex flex-col-reverse bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="mb-40 relative text-center overflow-hidden flex flex-col items-center gap-4">
        <p className="text-2xl text-amber-300">{qrCodeString}</p>
        {!isPaused && (
          <div className="w-3/5 h-auto max-w-75">
            <Scanner
              onScan={handleScan}
              onError={(error) => console.log(error)}
              paused={isPaused}
            />
          </div>
        )}

        <div className="p-2 bg-cyan-500 hover:bg-cyan-600 text-xs text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50">
          <button
            className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
            onClick={() => setIsPaused(!isPaused)}
          >
            <QrCode className="w-12 h-12 text-cyan-100" />
            <span>Scan</span>
          </button>
        </div>
        <button
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg"
          onClick={() => setIsPaused(true)}
        >
          Stop
        </button>
      </section>
    </div>
  )
}

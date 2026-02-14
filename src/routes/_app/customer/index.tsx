import { createFileRoute } from '@tanstack/react-router'
import { QrCode, BrushCleaning } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import { FormEvent, useState } from 'react'

export const Route = createFileRoute('/_app/customer/')({
  component: RouteComponent,
})

const defaultQrCodeValue = 'user-id-123'

function RouteComponent() {
  const [qrCodeValue, setQrCodeValue] = useState(defaultQrCodeValue)
  const [shouldShowQrCode, setShouldShowQrCode] = useState(false)
  const [inputQrCode, setInputQrCode] = useState('')

  const onQrValueInput = (event: FormEvent<HTMLInputElement>) => {
    setInputQrCode(event.currentTarget.value)
    setQrCodeValue(event.currentTarget.value)
  }

  const onClear = () => {
    setShouldShowQrCode(false)
    setQrCodeValue(defaultQrCodeValue)
    setInputQrCode('')
  }

  const onQrCode = () => {
    setShouldShowQrCode(true)
  }

  return (
    <div className="flex-1 p-5 pb-10 flex flex-col-reverse bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="mb-40 relative text-center overflow-hidden flex flex-col items-center gap-4">
        {shouldShowQrCode && (
          <div className="p-4 border rounded-sm border-amber-100 bg-gray-50 radius">
            <QRCodeCanvas value={qrCodeValue} />
          </div>
        )}

        <p className="text-2xl text-amber-300">
          {shouldShowQrCode && qrCodeValue}
        </p>

        <div className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50">
          <button
            className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
            onClick={() => onQrCode()}
          >
            <QrCode className="w-12 h-12 text-cyan-100" />
          </button>
        </div>
        <button
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg cursor-pointer"
          onClick={() => onClear()}
        >
          <BrushCleaning />
        </button>
        <input
          className="h-2 border-1 p-3 border-amber-200 text-amber-200 placeholder-gray-400"
          type="text"
          id="qr-code-value"
          placeholder="Enter QR code value.."
          value={inputQrCode}
          onInput={(event) => onQrValueInput(event)}
        ></input>
      </section>
    </div>
  )
}

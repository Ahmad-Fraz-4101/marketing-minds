import DashboardLayout from '../components/DashboardLayout'

function SupportUs() {
  return (
    <DashboardLayout userName="Friend">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Support Us</h1>
        <p className="text-gray-400 mb-8">
          If you find this project helpful, you can support its development by sending a small contribution.
          Scan the QR code below with your preferred payment app.
        </p>

        <div className="bg-opsly-card rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-800">
          {/* QR Image */}
          <div className="w-64 h-64 bg-opsly-dark rounded-xl flex items-center justify-center mb-4 border border-gray-700 overflow-hidden">
            {/* 
              Place your image at:
              Opsly/public/qr-support.png
              and it will be served at /qr-support.png
            */}
            <img
              src="/qr-support.jpeg"
              alt="Support us QR code"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-gray-300 text-sm text-center mb-2">
            Point your camera or payment app at this QR to support us.
          </p>
          <p className="text-gray-500 text-xs text-center">
            (Replace <code>qr-support.png</code> in the <code>Opsly/public</code> folder with your real QR image.)
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default SupportUs



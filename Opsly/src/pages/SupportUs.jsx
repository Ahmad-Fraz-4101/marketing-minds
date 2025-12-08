import DashboardLayout from '../components/DashboardLayout'
import { HiHeart, HiQrcode, HiLightningBolt } from 'react-icons/hi'

function SupportUs() {
  return (
    <DashboardLayout userName="Friend">
      <div className="flex items-center justify-center min-h-[calc(100vh-180px)] px-4 md:px-8 overflow-hidden">
        <div className="w-full max-w-4xl bg-gradient-to-br from-opsly-card to-opsly-dark border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
              <HiHeart className="text-opsly-purple text-2xl" />
              <span className="text-sm text-opsly-purple font-semibold">We appreciate your support</span>
              <HiHeart className="text-opsly-purple text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Support Us</h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Your contribution keeps this project alive and helps us ship new features faster.
              Every bit makes a difference. Thank you!
            </p>
          </div>

          {/* Main Card */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* QR Code Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <HiQrcode className="text-opsly-purple text-2xl" />
                <h2 className="text-2xl font-semibold text-white">Scan to Support</h2>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg mb-4 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                <img
                  src="/qr-support.jpeg"
                  alt="Support us QR code"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <p className="text-gray-300 text-center text-sm md:text-base max-w-md">
                Open your payment app (easypaisa, jazzcash, or bank) and scan this QR to contribute instantly.
              </p>
            </div>

            {/* Benefits / Motivation */}
            <div className="flex-1 bg-opsly-dark/60 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <HiLightningBolt className="text-opsly-purple text-2xl" />
                <h3 className="text-xl font-semibold text-white">Where your support goes</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-opsly-purple">•</span>
                  <span>More features and faster improvements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-opsly-purple">•</span>
                  <span>Better stability, reliability, and support.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-opsly-purple">•</span>
                  <span>Infrastructure costs to keep the service running smoothly.</span>
                </li>
              </ul>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Thank you for your generosity! 💜 Every contribution, no matter how small, helps us keep going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default SupportUs



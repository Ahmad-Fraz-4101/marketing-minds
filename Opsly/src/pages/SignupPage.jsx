import { Link, useNavigate, Navigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp, isAuthenticated, loading: authLoading } = useAuth()

  // Redirect if already authenticated
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      navigate('/marketing', { replace: true })
    }
  }, [isAuthenticated, authLoading, navigate])

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-opsly-dark">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // Redirect if authenticated
  if (isAuthenticated) {
    return <Navigate to="/marketing" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      const { error: signUpError } = await signUp(email, password, {
        full_name: name,
      })
      
      if (signUpError) {
        setError(signUpError.message || 'Failed to create account. Please try again.')
      } else {
        setSuccess('Account created successfully! Please check your email to verify your account before signing in.')
        // Redirect after a delay
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      console.error('Signup error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-opsly-dark">
      {/* Left Section - Signup Form */}
      <div className="flex-1 bg-opsly-dark p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239933ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative z-10 max-w-md w-full">
          {/* Logo */}
          <div className="text-2xl font-bold text-white mb-12">
            <span className="text-opsly-purple">Ö</span>psly
          </div>

          {/* Welcome Message */}
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400 mb-8">Please enter your details to get started</p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 text-red-200 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 text-green-200 rounded-lg text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-white text-opsly-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-opsly-purple disabled:opacity-50"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-white text-opsly-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-opsly-purple disabled:opacity-50"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-white text-opsly-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-opsly-purple pr-12 disabled:opacity-50"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-white text-opsly-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-opsly-purple pr-12 disabled:opacity-50"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            {/* Sign Up Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-b from-opsly-purple to-purple-700 text-white rounded-lg font-semibold mb-6 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Continue With Google */}
          <button 
            onClick={() => navigate('/marketing')}
            className="w-full py-3 bg-white text-opsly-dark rounded-lg font-semibold border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FaGoogle className="text-xl" />
            Continue With Google
          </button>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-opsly-purple hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="flex-1 bg-opsly-gray p-12 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239933ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Illustration */}
          <div className="relative mb-8 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.35)] border border-purple-500/30 bg-white/5 backdrop-blur">
            <img
              src="/frame70.png"
              alt="Welcome illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Promotional Text */}
          <p className="text-2xl text-white text-center">
            Business Operations, done when you're{' '}
            <span className="text-opsly-purple">asleep</span>
          </p>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-2 bg-opsly-purple rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage


import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sign-in-sign-up.css'
import '../../styles/forgot-password.css'
import AuthLayout from './AuthLayout'

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout containerClassName='sign-in-sign-up forgot-password'>
      <div className="subtitle">
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password</p>
      </div>

      <form className="space-y-2">
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="input-field"
          />
        </div>
        <button type="submit" className="button btn-primary">
          Send Reset Link
        </button>
      </form>

      <div className="cta-text mt-6 text-center text-sm">
        Remembered your password?{" "}
        <Link to="/sign-in" className="text-link underline-offset-4">
          Back to Sign In
        </Link>
      </div>
    </AuthLayout>
  )
}

export default ForgotPasswordPage

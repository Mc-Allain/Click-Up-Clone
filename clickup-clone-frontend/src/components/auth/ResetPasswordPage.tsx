import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/reset-password.css'
import AuthLayout from './AuthLayout'

const ResetPasswordPage: React.FC = () => {
  const isExpired = false;  // Example value - replace with actual logic

  return (
    <AuthLayout containerClassName='sign-in-sign-up reset-password'>
      {!isExpired ? (
        <>
          <div className="subtitle">
            <h2>Set New Password</h2>
            <p>Enter and confirm your new password</p>
          </div>

          <form className="space-y-2">
            <div className="input-group">
              <label className="input-label">New Password</label>
              <input type="password" placeholder="••••••••" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="input-field" />
            </div>
            <button type="submit" className="button btn-primary">Update Password</button>
          </form>

          <div className="cta-text mt-6 text-center text-sm">
            Remembered your password?{" "}
            <Link to="/sign-in" className="text-link underline-offset-4">
              Back to Sign In
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="subtitle">
            <h2>Link Expired</h2>
            <p>Your reset link has expired. Please request a new one.</p>
          </div>

          <div className="cta-text mt-6 text-center text-sm">
            <Link to="/forgot-password" className="text-link underline-offset-4">
              Request New Reset Link
            </Link>
          </div>
        </>
      )}
    </AuthLayout>
  )
}

export default ResetPasswordPage
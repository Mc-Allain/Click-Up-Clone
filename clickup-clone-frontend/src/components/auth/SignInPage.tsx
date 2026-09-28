import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sign-in-sign-up.css'
import AuthLayout from './AuthLayout'

const SignInPage: React.FC = () => {
  return (
    <AuthLayout cardClassName="h-165" containerClassName='sign-in-sign-up'>
      {/* Sign In */}
      <div className="title">
          <h1>Task Manager</h1>
          <p>A Basic ClickUp Clone</p>
        </div>
        <div className="subtitle">
          <h2>Welcome Back!</h2>
          <p>Sign in to your account</p>
        </div>
        <form className="space-y-2">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input type="email" placeholder="name@example.com" className="input-field" />
          </div>
          <div className="input-group">
            <div className="flex justify-between">
              <label className="input-label">Password</label>
              <Link to="/forgot-password" className="text-link text-sm font-normal! no-underline!">Forgot Password?</Link>
            </div>
            <input type="password" placeholder="••••••••" className="input-field" />
          </div>
          <button className="button btn-primary">Sign In</button>
        </form>

        <fieldset className="horizontal-label">
          <legend>
            <h1 className="text-gray-500 font-medium">OR</h1>
          </legend>
        </fieldset>

        <button className="google-button">
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png" alt="Google Logo" className="google-logo" />
          <span>Sign in with Google</span>
        </button>

        <div className="cta-text">
          Don’t have an account? <Link to="/sign-up" className="text-link underline-offset-4">Sign Up</Link>
        </div>
    </AuthLayout>
  )
}

export default SignInPage
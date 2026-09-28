'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sign-in-sign-up.css'
import { useState } from 'react'
import InfoModal from '../common/InfoModal'
import AuthLayout from './AuthLayout'
import HLine from '../common/HLine'

const SignUpPage: React.FC = () => {
  const [isTosOpen, setTosOpen] = useState(false);
  const [isPpOpen, setPpOpen] = useState(false);

  return (
    <AuthLayout cardClassName="h-165" containerClassName='sign-in-sign-up'>
      {/* Sign Up */}
      <div className="title">
        <h1>Task Manager</h1>
        <p>A Basic ClickUp Clone</p>
      </div>
      <div className="subtitle">
        <h2>Get Started!</h2>
        <p>Create your account</p>
      </div>
      <form className="space-y-2">
        <div className="input-group">
          <label className="input-label">Full Name</label>
          <input type="text" placeholder="Your Name" className="input-field" />
        </div>
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input type="email" placeholder="name@example.com" className="input-field" />
        </div>
        <div className="input-group">
          <label className="input-label">Password</label>
          <input type="password" placeholder="Create a password" className="input-field" />
        </div>
        <button className="button btn-primary">Sign Up</button>
      </form>
      <p className="tos-pp">
        By signing up, you agree to our <span className="text-link" onClick={() => setTosOpen(true)}>Terms of Service</span> and <span className="text-link" onClick={() => setPpOpen(true)}>Privacy Policy</span>.
      </p>
      <HLine />
      <div className="cta-text">
        Already have an account? <Link to="/sign-in" className="text-link underline-offset-4">Sign In</Link>
      </div>

      <InfoModal
        isOpen={isTosOpen}
        setOpen={setTosOpen}
        title="Terms of Service"
        content="By using this application, you agree to follow our community guidelines,
                respect intellectual property, and avoid misuse of provided features.
                Continued use signifies acceptance of these terms."
      />

      <InfoModal
        isOpen={isPpOpen}
        setOpen={setPpOpen}
        title="Privacy Policy"
        content="We value your privacy. Basic usage data may be collected to improve
          performance and user experience. We do not sell or share personal
          information with third parties without consent."
      />
    </AuthLayout>
  )
}

export default SignUpPage
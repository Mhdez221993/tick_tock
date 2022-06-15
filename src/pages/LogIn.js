export default function LogIn() {
  return (
    <div className="login-container">
      <header className="login-header"></header>
      <div className="login-wrapper">
        <div className="login-options-container">
          <div className="login-title-container">
            <div className="login-title">Sign up for TickTock</div>
          </div>
          <div className="login-options">
            <LoginOption src="/email.png" text="Use phone or email" />
            <LoginOption src="/facebook.png" text="Continue with Facebook" />
            <LoginOption src="/google.png" text="Continue with Google" />
            <LoginOption src="/twitter.png" text="Continue with Twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

function LoginOption({text, src, onClick}) {
  return (
    <div className="login-option-wrapper" onClick={onClick}>
      <div className="login-option-icon-wrapper"><img src={src} alt={text} className="login-option-icon" /></div>
      <div className="login-option-text">{text}</div>
    </div>
  )
}

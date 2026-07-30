import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import RobotScene from "../../components/login/RobotScene.jsx";
import FloatingParticles from "../../components/login/FloatingParticles.jsx";
import BackgroundGlow from "../../components/login/BackgroundGlow.jsx";
import "./Login.css";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.616Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.71H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.707A5.41 5.41 0 0 1 3.68 9c0-.593.102-1.17.284-1.707V4.961H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.826.957 4.039l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.167 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [error, setError] = useState("");

  const handleChange = useCallback((field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (error) setError("");
  }, [error]);

  const handleSubmit = useCallback(
  (event) => {
    event.preventDefault();

    // Empty fields validation
    if (!form.email || !form.password) {
      setError("Enter both your email and password to continue.");
      return;
    }

    // Demo credentials
    if (
      form.email !== "admin@gmail.com" ||
      form.password !== "1234"
    ) {
      setError("Invalid email or password.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    window.setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      setIsSubmitting(false);

      navigate("/dashboard");
    }, 1200);
  },
  [form, navigate]
);

  return (
    <motion.main
      className="login-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundGlow />
      <FloatingParticles count={34} />

      <div className="login-page__content">
        <motion.section
          className="login-visual"
          variants={itemVariants}
          aria-hidden="true"
        >
          <div className="login-visual__frame">
            <RobotScene />
          </div>
          <div className="login-visual__caption">
            <span className="login-visual__eyebrow">Prepzo Intelligence</span>
            <h2 className="login-visual__title">
              Your interview,<br />rehearsed until it&apos;s instinct.
            </h2>
          </div>
        </motion.section>

        <motion.section
          className="login-card-wrapper"
          variants={cardVariants}
        >
          <div className="login-card">
            <motion.div className="login-card__brand" variants={itemVariants}>
              <div className="login-card__logo" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <defs>
                    <linearGradient id="logoGrad" x1="0" y1="0" x2="26" y2="26">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="55%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <rect width="26" height="26" rx="8" fill="url(#logoGrad)" />
                  <path
                    d="M13 6.2 15.1 11.1 20 13 15.1 14.9 13 19.8 10.9 14.9 6 13 10.9 11.1 13 6.2Z"
                    fill="#050816"
                  />
                </svg>
              </div>
              <span className="login-card__brandname">Prepzo</span>
            </motion.div>

            <motion.div className="login-card__heading" variants={itemVariants}>
              <h1>AI Interview Coach</h1>
              <p>Sign in to keep building your edge.</p>
            </motion.div>

            <motion.form
              className="login-form"
              variants={itemVariants}
              onSubmit={handleSubmit}
              noValidate
            >
              <div
                className={`form-group ${focusedField === "email" ? "is-focused" : ""} ${
                  form.email ? "has-value" : ""
                }`}
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@domain.com"
                />
                <span className="form-group__underline" />
              </div>

              <div
                className={`form-group ${focusedField === "password" ? "is-focused" : ""} ${
                  form.password ? "has-value" : ""
                }`}
              >
                <label htmlFor="password">Password</label>
                <div className="password-field">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={form.password}
                    onChange={handleChange("password")}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M2 9s2.7-5 7-5 7 5 7 5-2.7 5-7 5-7-5-7-5Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <circle cx="9" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M2 9s2.7-5 7-5c1.5 0 2.7.45 3.7 1.05M16 9s-1 1.9-2.8 3.35M4.4 4.4 13.6 13.6M7.2 7.2a2.1 2.1 0 0 0 2.97 2.97"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <span className="form-group__underline" />
              </div>

              <div className="login-form__row">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              {error && (
                <motion.p
                  className="form-error"
                  role="alert"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="btn-primary__glow" />
                {isSubmitting ? (
                  <span className="btn-primary__spinner" aria-hidden="true" />
                ) : (
                  "Sign in"
                )}
              </motion.button>

              <div className="divider">
                <span />
                <p>or continue with</p>
                <span />
              </div>

              <motion.button
                type="button"
                className="btn-google"
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <GoogleIcon />
                Continue with Google
              </motion.button>
            </motion.form>

            <motion.p className="signup-text" variants={itemVariants}>
              New to Prepzo? <Link to="/signup">Create an account</Link>
            </motion.p>

            <motion.p className="terms-text" variants={itemVariants}>
              By continuing you agree to our{" "}
              <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </motion.p>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}

# 🎨 Customization Guide

## How to Customize Your Applications

---

## 1️⃣ Change Colors

### For 3D E-Commerce (LumaShop)

**File:** `frontend/src/index.css`

```css
:root {
  --dark-navy: #0D1B2A;      /* Main background */
  --electric-blue: #3A86FF;  /* Buttons & accents */
  --white: #ffffff;          /* Text on dark */
  --light-gray: #E8E8E8;     /* Secondary text */
}
```

**Popular Color Combinations:**

```css
/* Modern Blue */
--primary: #0066FF;
--secondary: #00A8FF;

/* Dark Green */
--primary: #1B4D3E;
--secondary: #2D7A62;

/* Luxury Gold */
--primary: #D4AF37;
--secondary: #1C1C1C;

/* Neon Purple */
--primary: #9D4EDD;
--secondary: #3A86FF;
```

### For To-Do List (TaskMaster)

**File:** `todo-app/src/index.css`

```css
:root {
  --primary: #667eea;        /* Main color */
  --secondary: #764ba2;      /* Secondary color */
  --success: #10b981;        /* Completed tasks */
  --danger: #ef4444;         /* Delete buttons */
  --warning: #f59e0b;        /* Alerts */
}
```

---

## 2️⃣ Change Fonts

### For 3D E-Commerce

**File:** `frontend/src/index.css`

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Change to any Google Font */
}

h1, h2, h3 {
  font-family: 'Inter', sans-serif;
}
```

### Add Google Fonts

**File:** `frontend/index.html`

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

Then in CSS:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

---

## 3️⃣ Change Logo & Branding

### Change App Name

**File:** `frontend/src/components/Navbar.jsx`

```javascript
<Link to="/" className="logo">
  <h2>YourBrandName</h2>  {/* Change this */}
</Link>
```

### Add Logo Image

**Place image in:** `frontend/public/logo.png`

**Edit Navbar.jsx:**
```javascript
<Link to="/" className="logo">
  <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
</Link>
```

---

## 4️⃣ Change Product Information

**File:** `frontend/src/pages/ProductPage.jsx`

```javascript
const PRODUCT_DATA = {
  id: '1',
  name: 'YOUR PRODUCT NAME',           // ← Change product name
  description: 'Your description here', // ← Change description
  price: 99.99,                        // ← Change price
  colors: [
    { name: 'Color1', hex: '#ff0000' },
    { name: 'Color2', hex: '#0000ff' },
  ],
  specs: {
    feature1: 'Value1',
    feature2: 'Value2',
  }
}
```

---

## 5️⃣ Change Page Titles

### For 3D E-Commerce

**File:** `frontend/index.html`

```html
<title>Your Store Name - Premium Products</title>
```

### For To-Do List

**File:** `todo-app/index.html`

```html
<title>My Task Manager - Stay Productive</title>
```

---

## 6️⃣ Change Button Styles

**File:** `frontend/src/index.css`

```css
.btn-primary {
  background-color: #0066FF;     /* Change this */
  border-radius: 8px;            /* Corner radius */
  padding: 12px 24px;            /* Padding */
  font-weight: 600;              /* Font weight */
}

.btn-primary:hover {
  background-color: #0052CC;     /* Hover color */
  transform: translateY(-2px);   /* Lift on hover */
}
```

---

## 7️⃣ Change Background

### For 3D E-Commerce

**File:** `frontend/src/index.css`

```css
body {
  /* Gradient background */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Or solid color */
  background-color: #0D1B2A;
  
  /* Or image */
  background-image: url('/background.jpg');
  background-size: cover;
}
```

### For To-Do List

**File:** `todo-app/src/index.css`

```css
body {
  /* Change gradient */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 8️⃣ Change Animations

**File:** `frontend/src/index.css`

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);    /* Change direction */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in;   /* Change duration */
}
```

---

## 9️⃣ Add Custom Features

### Add Contact Form

**Create:** `frontend/src/pages/Contact.jsx`

```javascript
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Send to backend
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input 
          type="email" 
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea 
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
```

### Add FAQ Section

**Create:** `frontend/src/pages/FAQ.jsx`

```javascript
import React, { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    { q: 'What is shipping cost?', a: 'Free shipping on orders over $50' },
    { q: 'How long is warranty?', a: '2 years warranty included' },
    { q: 'Can I return items?', a: 'Yes, 30-day return policy' },
  ]

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.q}
          </button>
          {openIndex === index && <p>{faq.a}</p>}
        </div>
      ))}
    </div>
  )
}

export default FAQ
```

---

## 🔟 Change Authentication

### Use Google Login (Optional)

**Install Google Auth:**
```bash
cd frontend
npm install @react-oauth/google
```

**Use in AuthPage.jsx:**
```javascript
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      console.log(credentialResponse)
    }}
  />
</GoogleOAuthProvider>
```

---

## 📱 Change Responsive Breakpoints

**File:** `frontend/src/App.css`

```css
/* Mobile */
@media (max-width: 480px) {
  /* Styles for very small screens */
}

/* Tablet */
@media (max-width: 768px) {
  /* Styles for tablets */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Styles for large screens */
}
```

---

## 💾 Save Changes

1. Edit files as shown above
2. Server auto-reloads (if running `npm run dev`)
3. Refresh browser to see changes
4. Hard refresh if still seeing old version: `Ctrl+Shift+R`

---

## 🎨 Online Color Pickers

- **Coolors.co**: https://coolors.co
- **Color Hunt**: https://colorhunt.co
- **Material Design Colors**: https://material.io/design/color

---

## 📚 CSS Gradient Generator

https://cssgradient.io

---

**Start customizing! 🎨**

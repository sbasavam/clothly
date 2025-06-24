# Clothly - Laundry & Ironing Web App

Clothly is a responsive and modern web application that simplifies laundry services for corporate professionals. Users can book washing, ironing, and special fabric care services, track their orders, manage profiles and addresses — all from a beautifully designed UI.

---

## 🌟 Features
- Fast pickup & delivery scheduling
- Eco-friendly washing processes
- Affordable & transparent pricing
- User authentication and profile management
- Admin dashboard to manage orders & services

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite + React Router)
- Tailwind CSS for modern UI styling
- Framer Motion for animations

**Backend (Pluggable):**
- Node.js + Express 
- PostgreSQL (hosted or via Supabase)

---

## 📁 Folder Structure (src)
```
├── components/        # Reusable UI components
├── pages/             # Page-specific components
│   ├── customer/      # User-side pages (dashboard, book, profile...)
│   ├── admin/         # Admin pages (manage orders, services...)
│   └── shared/        # Shared pages (home, not found...)
├── routes/            # Route setup for customer & admin
├── App.jsx            # App wrapper
├── main.jsx           # App entry point
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sbasavam/clothly-front-end.git
cd clothly
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Tailwind (already setup)
Tailwind is pre-configured. You can customize `tailwind.config.js` as needed.

### 4. Start the Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧪 Supabase (Optional Backend Setup)
- Create an account at [supabase.io](https://supabase.io)
- Create a new project and database
- Set up tables for users, services, bookings
- Get your API URL and public key
- Store them in `.env.local`:

```
VITE_SUPABASE_URL=https://clothly-vert.vercel.app
```

Use Supabase Auth and Supabase JS Client for real-time updates and user handling.

---

## 📦 Future Enhancements
- completing the rest modules 
- Razorpay or Stripe integration for payments
- Push/email notifications for delivery updates
- Admin analytics dashboard

---

## 🙌 Contributions
Open to contributions. Submit a pull request or open an issue to suggest features or report bugs.

---


---

## 👤 Author
**Sanganabasava M**  
Frontend Developer | React.js Enthusiast  
📧 sanganabasavam1999@gmail.com  
📞 +91 81509 19941

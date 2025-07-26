A modern React.js application for filtering products dynamically based on multiple criteria like category, price range, and rating. Built using Vite, Redux Toolkit, and Tailwind CSS, this app is fast, responsive, and features both light and dark themes.

🛠️ Tech Stack Used
React.js (Functional components + Hooks)

Redux Toolkit (State management)

Vite (Fast build tool)

Tailwind CSS (Utility-first styling)

JavaScript (ES6+)

✅ Features Implemented
🔄 Dynamic Filtering
By Category (e.g., Electronics, Books, Apparel)

By Price Range (Using slider or input)

By Rating (Star-based filtering)

📦 Reusable Components
ProductCard – For displaying each product

Sidebar – Filter controls

Navbar, ThemeToggle, etc.

⚙️ Redux Toolkit Store Setup
Centralized state for filters and products

Simple and scalable logic

Easy debugging and maintainability

🎨 Responsive & Clean UI
Tailwind CSS ensures responsive and consistent design

Fully mobile-friendly layout

Modern and elegant design

🌗 Light and Dark Theme Support
Toggle between Light and Dark mode

Remembers user’s preference

🧠 Performance Optimization
Uses React.memo, useMemo, and useCallback

Optimized component re-renders

Lightweight and scalable

📁 Folder Structure
├── public/
├── src/
│   ├── app/              # Redux store configuration
│   ├── components/       # Reusable UI components
│   ├── features/         # Redux slices and logic
│   ├── pages/            # Page-level components
│   └── index.js          # Entry point
🚀 How to Run the App
1. Clone or Download the Project
bash
Copy
Edit
git clone https://github.com/your-username/product-filter-app.git
cd product-filter-app
If using a ZIP file, extract it and open the folder in your terminal/code editor.

2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
The app will be running at:
👉 http://localhost:5173

⏱ Time Taken
Task	Time
Component and Feature Development	~2–3 hours

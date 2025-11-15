# 🍽️ The Gourmet Table  
A modern, elegant restaurant reservation platform built with **React**.  
The Gourmet Table provides a seamless book-a-table experience, full menu exploration, chef story, and full back-office for reservation management.

---

## 🚀 Features

### 👤 Authentication
- User **Login** & **Signup**  
- Admin **Login**  
- Session management to separate user and admin dashboards

### 🏠 Homepage  
- Elegant **Hero** section with restaurant branding  
- **Gallery** showcasing restaurant ambiance & dishes  
- **Booking Widget** to select date, time, and number of people  
- **Information Section** about restaurant  
- **Testimonials** from customers  
- **Footer** with contact & social info  

### 🍽️ Menu System  
- Category tabs: Appetizers, Main Courses, Desserts, Drinks, Specials  
- Menu items with name, description, price  
- Styled menu layout  

### 📅 Booking / Reservation Flow  
- **Step 1:** BookYourTable — select number of people, date, time  
- **Step 2:** Confirmation — review and confirm reservation  
- Reservations saved and visible to user  

### 📝 My Reservations  
- Page for users to view all their reservations  
- List of past bookings  

### 👩‍🍳 About & Contact  
- Story about the restaurant and **Chef Houda Abida**  
- Contact form + business info  

### 🔧 Admin Dashboard  
- View all reservations (admin)  
- Manage menu items: add, edit, delete  
- Clean admin layout

---

## 🛠️ Tech Stack
- React (function components + hooks)  
- JavaScript (ES6+)  
- CSS (modular / component-based)  
- Node.js / npm  
- Git & GitHub

---

## 📦 Installation

1. **Clone the repository**  
   ```bash
   git clone <YOUR_REPO_URL>
   cd the-gourmet-table
2. **Install dependencies**
    ```bash
    npm install
3. **Run locally**
    ```bash
    npm start
4. 
   Open your browser and navigate to http://localhost:5173 (or the port shown in terminal)

5. **Build for production**
    ```bash
    npm run build

## 📁 Project Structure

src/
├── Component/
│   ├── 1-Login/
│   │   ├── Login.jsx  
│   │   └── Sign-up.jsx  
│   ├── 2-Home/
│   │   ├── Hero.jsx  
│   │   ├── Header.jsx  
│   │   ├── Gallery.jsx  
│   │   ├── BookingWidget.jsx  
│   │   ├── InformationSection.jsx  
│   │   ├── Testimonial.jsx  
│   │   ├── Footer.jsx  
│   │   └── Home.jsx  
│   ├── 3-Booking/
│   │   ├── Reservations.jsx  
│   │   └── Reservations.css  
│   ├── 4-Contact/
│   │   ├── AboutUs.jsx  
│   │   ├── Contact.jsx  
│   │   └── Contact.css  
│   ├── 5-Booking-table/
│   │   ├── BookYourTable.jsx  
│   │   ├── BookingDetails.jsx  
│   │   ├── Confirmation.jsx  
│   │   └── Booking.css  
│   ├── 6-Menu/
│   │   ├── Menu.jsx  
│   │   ├── MenuHeader.jsx  
│   │   ├── CategoryTabs.jsx  
│   │   ├── MenuItem.jsx  
│   │   ├── Appetizeers.jsx  
│   │   ├── MainCourses.jsx  
│   │   ├── Desserts.jsx  
│   │   ├── Drinks.jsx  
│   │   ├── Specials.jsx  
│   │   └── Menu.css  
│   └── Admin/
│       ├── AdminLayout.jsx  
│       ├── AdminReservations.jsx  
│       ├── MenuManagement.jsx  
│       └── Admin.css  
├── App.js  
├── App.css  
├── index.js  
├── index.css  
└── reportWebVitals.js  

## 🖼️ Screenshot of the project
![Homepage](./public/Images/Screenshot_projet%20.png)  
## 🎨 Design Features
- **Responsive Design:** Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI:** Clean, minimalist design with elegant restaurant aesthetics
- **Smooth Animations:** Hover effects and smooth transitions on buttons, images, and cards
- **Color Scheme:** Elegant palette with primary color #D4AF37 and complementary tones
- **Typography:** Playfair Display for headings, system fonts for body text

## 🛍️ Menu / Product Features
- Menu items displayed with images, names, descriptions, and prices
- Support for categories: Appetizers, Main Courses, Desserts, Drinks, Specials
- Multiple images per dish (main & hover/zoom view)
- Price display in Moroccan Dirham (DH)
- Detailed description for each menu item

## 📝 Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks

## 🔗 Routes
- `/` - Homepage
- `/menu` - Menu page
- `/booking` - Book your table
- `/reservations` - My reservations
- `/contact` - Contact page
- `/admin` - Admin dashboard

## 📧 Contact Information
- **Email:** support@gourmettable.com
- **Phone:** +212 650502976
- **Business Hours:** Mon-Fri: 9AM-6PM UTC +1
## 🎨 Design Features
- **Responsive Design:** Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI:** Clean, minimalist design with elegant restaurant aesthetics
- **Smooth Animations:** Hover effects and smooth transitions on buttons, images, and cards
- **Color Scheme:** Elegant palette with primary color #D4AF37 and complementary tones
- **Typography:** Playfair Display for headings, system fonts for body text

## 🛍️ Menu / Product Features
- Menu items displayed with images, names, descriptions, and prices
- Support for categories: Appetizers, Main Courses, Desserts, Drinks, Specials
- Multiple images per dish (main & hover/zoom view)
- Price display in Moroccan Dirham (DH)
- Detailed description for each menu item

## 📝 Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks

## 🔗 Routes
- `/` - Homepage
- `/menu` - Menu page
- `/booking` - Book your table
- `/reservations` - My reservations
- `/contact` - Contact page
- `/admin` - Admin dashboard

## 📧 Contact Information
- **Email:** support@gourmettable.com
- **Phone:** +212 650502976
- **Business Hours:** Mon-Fri: 9AM-6PM UTC +1

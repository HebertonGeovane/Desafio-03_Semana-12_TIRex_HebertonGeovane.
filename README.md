# Furniro - Furniture Store

![Furniro Logo](./src/assets/Meubel%20House_Logos-05.svg) 

Furniro is a web application for a furniture store, built with **React**, **TypeScript**, and styled with **Tailwind CSS**. The project simulates a database using `db.json` to manage products and includes features such as a shopping cart, pagination, purchase and contact forms, and integration with **AWS** for hosting and image storage. The site will be hosted on an **AWS EC2 instance**, with images stored in an **S3 Bucket**.

---

## Key Features

- **Login Page:** User authentication for accessing the system.
- **Shopping Cart:** Add and remove items with real-time updates.
- **Product Carousel:** Display featured or popular items using **shadcn/ui Carousel**.
- **Pagination:** Navigate through product categories and listings.
- **Purchase Form:** Complete orders with customer details.
- **Contact Form:** Send messages to the company.
- **AWS Integration:**
  - Hosting on an **EC2 instance**.
  - Image storage in an **S3 Bucket**.

---

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - React Router (for navigation)
  - shadcn/ui (for UI components like Carousel)
- **Simulated Backend:**
  - JSON Server (db.json)
- **Hosting and Storage:**
  - AWS EC2 (hosting)
  - AWS S3 (image storage)

---

## How to Run the Project Locally

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps to Set Up

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/seu-usuario/furniro.git
   cd furniro

2. **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install

3. **Start JSON Server (Simulated Database)**
    ```bash
    npx json-server --watch db.json --port 3000

4. **Start the React Project**
    ```bash
    npm run dev

## Project Structure
furniro/
├── public/               # Static assets (images, SVGs)
├── src/
│   ├── assets/           # Images and icons (e.g., Meubel House_Logos-05.svg)
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom hooks (e.g., useCart, usePagination)
│   ├── lib/              # Utilities
│   ├── pages/            # Application pages
│   ├── App.css           # Global styles
│   └── main.tsx          # Entry point
├── db.json               # Simulated database
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation

## AWS Hosting
### EC2 Instance
### The site will be hosted on an AWS EC2 instance.

### Access the site using the public IP address of the instance or a configured domain.

### S3 Bucket for Images
### All images are stored in an S3 Bucket.

### Image URLs are dynamically loaded in the frontend.

Contact
Heberton Geovane 

GitHub: @heberton-geovane

Technical Configurations (Vite + ESLint)
This project uses Vite as the bundler and ESLint for linting. Below are some relevant configurations:

Vite Plugins
@vitejs/plugin-react: Uses Babel for Fast Refresh.

@vitejs/plugin-react-swc: Uses SWC for Fast Refresh (optional).



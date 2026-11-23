# Product Explorer Dashboard

A modern and responsive Product Explorer Dashboard built with React and Axios. This project demonstrates how to fetch and manage API data using React's `useEffect` hook, custom hooks, and a reusable API service layer.

## Project Overview

The Product Explorer Dashboard retrieves product information from the [DummyJSON API](https://dummyjson.com/) and displays it in a clean, organized interface.

It demonstrates how React applications communicate with external APIs while managing loading states, errors, and successfully fetched data.

## Features

- **API Integration:** Fetches product data using Axios.
- **Custom Hook:** Uses `useProducts` to manage product fetching and state.
- **Loading State:** Displays a loading indicator while data is being retrieved.
- **Error Handling:** Provides feedback when an API request fails.
- **Reusable Components:** Organizes the interface into reusable components.
- **Responsive Design:** Uses Tailwind CSS to create a responsive layout.
- **Request Cancellation:** Uses AbortController to cancel unfinished requests when necessary.

## Technologies Used

- React
- JavaScript
- Vite
- Axios
- Tailwind CSS
- DummyJSON API
- Git and GitHub

## Project Structure

```text
src/
├── api/
│   ├── client.js
│   └── products.js
├── components/
│   ├── Loading.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── hooks/
│   └── useProducts.js
├── pages/
│   └── ProductPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/axios.git
```

### 2. Navigate to the project folder

```bash
cd axios/week9-data-fetching
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## API Source

This project uses the DummyJSON Products API:

https://dummyjson.com/products

## Learning Objectives

Through this project, I practiced:

- Fetching API data with Axios.
- Managing side effects using `useEffect`.
- Managing component state with `useState`.
- Creating and using custom React hooks.
- Separating API services from UI components.
- Handling loading and error states.
- Using AbortController to manage API request cancellation.
- Building reusable React components.

## Author

**Ritha IRAGENA**

GitHub: [rithairagena13-spec](https://github.com/rithairagena13-spec)

---

*Built as part of Week 9: Data Fetching in React with useEffect.*
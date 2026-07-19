# TravelTrucks

TravelTrucks is a web application for browsing and booking camper vans. Users can search campers using filters, view detailed information about each vehicle, read reviews, and send a booking request.

## Live Demo

https://project.vercel.app

## Repository

https://github.com/angikkate/travel-trucks

## Features

- Browse available campers
- Filter campers by:
  - Location
  - Camper form
  - Engine type
  - Transmission
- Load more campers
- View detailed camper information
- Camper gallery
- Vehicle specifications
- Customer reviews
- Booking form with validation
- Loading spinner
- Success notification after booking request

## Technologies

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- Redux Persist
- Axios
- Formik
- Yup
- React Hot Toast
- React Icons
- CLSX
- CSS Modules

## Installation

Clone the repository:

```bash
git clone https://github.com/angikkate/travel-trucks.git
```

Go to the project folder:

```bash
cd travel-trucks
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── api/
├── assets/
├── components/
├── pages/
├── redux/
├── utils/
├── App.jsx
└── main.jsx
```

## Booking Form

The booking form validates:

- Name (required)
- Email (required, valid email format)

After successful submission, a notification confirms that the booking request has been sent.

## Author

Kateryna Kyrylchuk
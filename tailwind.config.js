/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        subtitle : '#BAC0C7',
        'border-color' : '#E6E8EA',
        'icon-color': '#E6E8EA'
      },
      screens : {
        dt : '1440px'
      },
      fontFamily : {
        'inter' : ['Inter', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      height:{
        'galleryDesktop': '300px',
        'galleryMobile': '250px',
        'mapViewRestaurant': '526px',
        'cardViewRestaurantGrid': '191.67px',
        'firstCardViewRestaurantGrid': '615px',
        'reservationForm':'304px'
      },
      width:{
        'galleryDesktop': '300px',
        'galleryMobile': '250px',
        'mapViewRestaurant': '1240px',
        'cardViewRestaurantGrid': '295px',
        'firstCardViewRestaurantGrid': '925px',
        'reservationForm':'400px'
      },
      gridTemplateColumns:{
        'viewRestaurant': '925px, 295px',
      },
      gridTemplateRows:{
        'viewRestaurant': '192px, 192px,192px',
      },
      borderRadius:{
        'btnReservation': '99px',
      }
    },
  },
  plugins: [],
}
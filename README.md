# Thailand Trip Planner 🇹🇭

A beautiful, interactive web app for planning your Thailand trip day by day.

## Features

✨ **Main Features:**
- 6-day itinerary planner (Apr 24-29, 2026)
- Day-by-day activity management (To-Do / To-Go lists)
- Going/Not Going toggle for each day
- 3 replacement suggestion options when not going on a day
- Responsive design that works on mobile and desktop
- Single-page application

## Getting Started

### Installation & GitHub Pages Setup

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win

2. **Initialize Git Repository:**
   ```bash
   cd path/to/thailand-trip
   git init
   git add .
   git commit -m "Initial commit: Add Thailand trip planner"
   ```

3. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Create a new repository named `thailand-trip` (or your preferred name)
   - Do NOT initialize with README, .gitignore, or license

4. **Connect Local Repo to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/thailand-trip.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "GitHub Pages"
   - Select `main` branch as the source
   - Your site will be published at: `https://YOUR_USERNAME.github.io/thailand-trip/`

## Usage

- **Select a Day**: Click on any day box to view/edit that day's details
- **Add Activities**: Type an activity and click "Add" (or press Enter)
- **Delete Activities**: Click the ✕ button on any activity
- **Toggle Going Status**: Check/uncheck "Going on this day"
- **View Suggestions**: When "Not Going", 3 alternative activities are suggested

## Project Structure

```
thailand-trip/
├── index.html          # Main HTML file (single-page app)
├── styles.css          # All styling
├── script.js           # All functionality
├── README.md           # This file
└── days/               # Day files (for future expansion)
```

## Future Features

You can add more features later such as:
- Photo gallery for each day
- Budget tracker
- Weather forecast
- Local restaurant recommendations
- Interactive map
- Data persistence (localStorage or backend)

## Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- JavaScript (ES6+)

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

**Enjoy your Thailand trip! 🌴**
 Web Project

This project is a simple web application designed to showcase a trip to Thailand from April 24th to April 29th. The application allows users to navigate through different days of the trip, each represented by a separate box.

## Project Structure

The project consists of the following files:

- **index.html**: The main HTML file that serves as the entry point for the web page. It includes links to the CSS and JavaScript files and provides the structure for displaying the daily boxes.

- **styles.css**: This file contains the CSS styles for the web page, defining the layout, colors, fonts, and other visual aspects of the site.

- **script.js**: This file contains the JavaScript code that handles the interactivity of the web page, such as switching between the daily boxes and loading the corresponding day's content.

- **days/**: A directory containing individual HTML files for each day of the trip:
  - **day1.html**: Content for Day 1 of the trip.
  - **day2.html**: Content for Day 2 of the trip.
  - **day3.html**: Content for Day 3 of the trip.
  - **day4.html**: Content for Day 4 of the trip.
  - **day5.html**: Content for Day 5 of the trip.
  - **day6.html**: Content for Day 6 of the trip.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Use the navigation boxes to switch between different days of the trip.

## Future Enhancements

This project is a starting point and can be expanded with additional features such as:

- Adding images and multimedia content for each day.
- Implementing a more sophisticated navigation system.
- Including user feedback or comments for each day's activities.

Feel free to contribute and enhance the project further!
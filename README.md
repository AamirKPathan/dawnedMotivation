# Dawned Motivation Browser

This is a standalone webpage built for Dawned OS. It provides a motivational quote, a clean search bar, and the same footer used in the main OS. The page is designed to be opened from Dawned OS as an external app and is hosted on GitHub Pages.

## Features

### Motivational Quotes
Quotes are loaded from the Quotable API, which supports browser access and works reliably across Chrome, Edge, Firefox, and GitHub Pages. A random quote is displayed at the top of the page and refreshes every hour. If the API is unavailable, a set of local fallback quotes is used.

### Search Bar
A centered search bar allows users to perform Google searches. Results open in a new browser tab.

### Dawned OS Footer
The footer matches the exact layout used in Dawned OS:
- Left section: Dawned OS label  
- Center section: Live digital clock  
- Right section: Made by Aamir  

### Gradient Theme
The page uses the Dawned OS gradient background.

## File Structure

index.html      Main page structure
style.css       Styling for the page and footer
main.js         Quote loading, search logic, and clock

Code

## How It Works

### Quotes
Quotes are fetched from:
https://api.quotable.io/random

If the API fails, a fallback list of quotes is used.

### Access
The page is available at:  
https://aamirkpathan.github.io/dawnedMotivation/

### Search
The search bar creates a Google search URL and opens it in a new tab.

### Clock
A JavaScript clock updates every second and displays the current time in the footer.

## Deployment
This page is hosted on GitHub Pages. API functionality required.
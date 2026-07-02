# Dawned Motivation Browser

This is a standalone webpage built for Dawned OS. It provides a simple motivational quote and a clean search bar, along with the same footer used in the main OS. The page is designed to be opened from Dawned OS as an external app.

## Features

### Motivational Quotes
Quotes are loaded from the TypeFit API. A random quote is selected and displayed at the top of the page. The quote refreshes every hour.

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
https://type.fit/api/quotes

A random quote is selected from the list and displayed.

### Access
Access at this [link](https://aamirkpathan.github.io/dawnedMotivation/)
### Search
The search bar creates a Google search URL and opens it in a new tab.

### Clock
A simple JavaScript clock updates every second and displays the current time in the footer.

## Deployment
This page is intended to be hosted on GitHub Pages. Some APIs may not work when running locally due to browser restrictions, so hosting is recommended.

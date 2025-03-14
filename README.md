# Video Streaming Platform

## Overview

This project is a functional YouTube clone that mimics some of the core features of YouTube. Built with React and Redux, it integrates the YouTube API for dynamic video content and includes optimizations for performance and user experience.

## Features

### 1. Caching
- Stores search results locally for repeated queries.
- Reduces redundant API calls, improving site speed and performance.
- Example: If a user searches for "chess" and repeats the query later, results are fetched from the Redux store instead of making a new API call.

### 2. Debouncing for Search Optimization
- Delays API calls until the user stops typing.
- Prevents unnecessary API calls for partial queries.
- Example: If a user types "i", "iP", "iPh", "iPho", the API call is delayed until the user completes typing "iPhone".

### 3. API Integration (YouTube API)
- Integrated YouTube API for fetching dynamic video content.
- Displays popular videos currently trending in India.

### 4. Shimmer UI for Loading States
- Implements a shimmer effect to indicate loading content.
- Enhances user experience by showing placeholders for video thumbnails, titles, and descriptions while data is being fetched (applicable to both Home and Search pages).

### 5. Improved Site Speed
- Optimized API calls to avoid redundant requests.
- Increased site speed by 50% by eliminating unnecessary calls, such as empty search queries.

### 6. Simulated Live Chat with User Input
- Simulates a live chat by pushing random messages every 200ms.
- Allows users to input their messages in real time.

### 7. Search Suggestion API
- Displays search suggestions dynamically as the user types in the search bar.

### 8. Comment Section API
- Fetches and displays video comments for each respective video.
- Enables social interaction by showing comments relevant to the video.

### 9. Search Results API
- Dynamically fetches and displays video lists based on user input.

### 10. Responsiveness
- The app is now fully responsive, optimized for both desktop and mobile views.
- Ensures a seamless experience across various screen sizes using Tailwind CSS.

## Live Demo

[Live](https://youtubeclone-phi-one.vercel.app/)

## How to Clone and Run

### Prerequisites

- Node.js (v14 or later)
- NPM or Yarn installed on your machine

### Steps to Run

1. Clone the repository:
   ```terminal
   git clone https://github.com/namachi007/Video_Streaming_Platform.git

2. Navigate to the project directory:
    cd youtube-clone

3. Install dependencies:
    npm install

4. Start the development server:
    npm start

5. Open your browser and navigate to:
    http://localhost:3000
    
## Contributing

Feel free to fork this repository and contribute by creating pull requests for bug fixes, feature improvements, or documentation enhancements. Contributions are always welcome!

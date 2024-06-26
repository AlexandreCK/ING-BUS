# ING Bank Bus

## Introduction

This project serves as a demonstration for an internal initiative at ING Bank aimed at raising awareness among employees about the energy waste associated with deleted emails. The project was developed during my Erasmus stay in the Netherlands.

### Project Cornerstone

We're on a mission to reduce our data storage footprint and CO2 emissions at ING! Did you know that permanently deleting just 7 emails can make a difference equivalent to driving 1 kilometer less in a diesel car? That's why we're creating a fun and engaging way to raise awareness about email cleanup among ING colleagues across the Netherlands. Join us on a virtual bus ride as it travels past ING offices in major cities, filling up with permanently deleted emails and getting greener with every stop. The more emails we delete together, the faster our bus travels!

## Features

- **Interactive Map**: Displays the bus route and all the office locations.
- **Progress Tracking**: Tracks the progress of the bus based on the number of deleted emails.
- **Parameter Modification**: Allows users to modify various parameters of the bus route.
- **Post Creation**: Enables users to make posts (pop-ups) at each office location to share updates and milestones.

## Getting Started

### Prerequisites

- **Node.js** (Latest version: v21.6.1)
- **npm** 
- **React** (Version: 18.2.0)
- **Vite** (Version: 5.2.0, included as a dependency and used for development server and build process)

### Installation

1. Clone the repository:
   
   ```sh
   git clone https://github.com/AlexandreCK/ING-BUS.git
   cd ing-bus

3. Install dependencies:

   ```sh
   npm install
   ```
   
### Running The Project

   To start the project run:
   ```sh
   cd ing-bus
   npm run dev
   ```
   This will start the development server and you can view the project by navigating to the provided link in the console in your web browser.
   
## Usage
### Interactive Map

- **View Route**: Check out the bus route and office locations on the map.
- **Track Progress**: See how many emails have been deleted and how far the bus has traveled.
- **Post Updates**: Click on office locations to view post updates.

### Modifying parameters

You can adjust various parameters such as the number of emails deleted per kilometer traveled or making new posts. This can be done in the admin section of the web app.

## Project Structure

   ```sh
   /ing-bus
      /info-docs           # Relevant documents provided for certain features
      /node_modules        # Project dependencies
      /public              # Public assets
      /src                 # Source files
        /assets            # Static assets like images and styles
        /components        # React components
          Footer.jsx
          Header.jsx
          LocationCities.jsx
          Map.jsx
          Navbar.jsx
          Overlay.jsx
          Routing.jsx
        /utils             # Utility functions
      App.jsx              # Main application component
      index.css            # Global styles
      main.jsx             # Entry point for the React application
      .eslintrc.cjs        # ESLint configuration
      .gitignore           # Git ignore file
      index.html           # Main HTML file
      package-lock.json    # NPM lock file
      package.json         # NPM configuration file
      README.md            # Project README file
      vite.config.js       # Vite configuration file
   ```

## FAQ

### Common Issues

- **Office selection**: Occasionally, when selecting an office location from the administration panel, the selection might not be immediately visible in the UI. To resolve this, simply close and reopen the post creation panel. The previously selected office location should now be correctly displayed.

# License

## Code License

The code for this project is licensed under the [MIT License](LICENSE). This means you are free to use, modify, and distribute the code, as long as the original license and copyright notices are included in all copies or substantial portions of the software.

## Assets License

The logos and proprietary assets included in this project are the property of ING Bank. Their use is restricted and not covered under the open source license above. Permission to use these assets must be obtained from ING Bank.

**Proprietary Assets:**

- ING Bank logos
- Any other proprietary graphics or content

For more details, please contact ING Bank directly to obtain the necessary permissions.

# Contact

Author - Alexandre CK

Feel free to reach out if you have any questions or suggestions!

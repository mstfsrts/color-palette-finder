# Color Palette Finder

Color Palette Finder is a web application that allows users to generate and view color palettes based on a HEX color code. The app is responsive, interacts with an external API to fetch color data, and provides user-friendly error and loading handling.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [JavaScript Files Description](#javascript-files-description)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Responsive design
- Single Page Application (SPA)
- Interacts with an external API to fetch color data
- Displays loading and error messages to the user
- User-friendly interface for generating color palettes
- Uses DOM manipulation for dynamic content updates

## Demo

You can view a live demo of the application [here](https://mstfsrts.github.io/color-palette-finder/).

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- The Color API

## Setup

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**

    ```sh
    git clone https://github.com/mstfsrts/color-palette-finder
    ```

2. **Navigate to the project directory**

    ```sh
    cd color-palette-finder
    ```

3. **Install dependencies**

    ```sh
    npm install
    ```

4. **Open `index.html` in your browser**

    You can use a live server extension if you are using Visual Studio Code, or simply open the `index.html` file in your preferred browser.

## Usage

1. Enter a HEX color code (e.g., `#ff5733`) in the input field.
2. Click the "Submit" button or press "Enter".
3. View the color and its suggested palettes.
4. Click "Yes" to fetch the palette or "No" to reset the background color.

## Project Structure

color-palette-finder/
├── public/
│   └── style.css
├── src/
│   ├── app.js
│   ├── buttonControl.js
│   ├── color.js
│   ├── constants.js
│   ├── eventHandlers.js
│   ├── service.js
│   ├── submitHandler.js
│   ├── utils.js
│   └── view.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── prettier.config.js
└── README.md


## JavaScript Files Description

- **app.js**: Entry point of the application. Imports necessary modules and initializes the view and event handlers.
- **buttonControl.js**: Contains functions to enable and disable the submit button based on user interactions.
- **color.js**: Manages the background color update and the display of the color palette.
- **constants.js**: Stores constant values used throughout the application such as element IDs and API configurations.
- **eventHandlers.js**: Sets up event listeners for user interactions like button clicks and input changes.
- **service.js**: Handles API calls to fetch color data and color palettes from the Color API.
- **submitHandler.js**: Processes the form submission, validates the HEX code, and updates the background color.
- **utils.js**: Utility functions for common tasks like HEX code validation, showing/hiding loading indicators, and displaying error messages.
- **view.js**: Dynamically creates and updates the HTML content of the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [The Color API](https://www.thecolorapi.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

# KBC (Kaun Banega Crorepati) Web App

Welcome to the KBC (Kaun Banega Crorepati) Web App! This project is a recreation of the popular game show "Kaun Banega Crorepati" using React. Test your general knowledge and try to win the top prize by answering multiple-choice questions correctly.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Multiple-choice questions:** Answer questions to win virtual currency.
- **Progressive difficulty:** Questions increase in difficulty as you progress.
- **Sound effects:** Different sounds for correct and incorrect answers.
- **Animations:** Visual feedback for correct and incorrect answers.
- **Dynamic score:** Track your earnings as you play.
- **Game Over:** Displays total earnings when the game ends.

## Screenshots

![Start Page](screenshots/start-page.png)
*Start page of the game.*

![Main Page](screenshots/main-page.mp4)
*Main page of the game.*

![Correct Answer](screenshots/correct-answer.png)
*Correct answer with green highlight and sound effect.*

![Wrong Answer](screenshots/wrong-answer.png)
*Wrong answer with red highlight and sound effect.*

![Game Over](screenshots/game-over.png)
*Game over screen showing the total earnings.*

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SauravKumarLal/kbc.git
   cd kbc-web-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Start the game:** The game starts automatically when you open the app.
2. **Answer questions:** Click on the answer you think is correct.
3. **Track your progress:** Your current earnings are displayed on the right.
4. **Game Over:** When you answer a question incorrectly, the game ends and your total earnings are displayed.

## Project Structure

```
kbc
│   README.md
│   package.json
│   .gitignore
├───public
│       index.html
│      
├───src
│   │   index.js
│   │   App.js
│   │   app.css
│   ├───components
│   │       Trivia.jsx
│   ├───assets
|   |       bg.jgp
│   │       download.gif
│   │       correct.mp3
│   │       wrong.mp3
│   ├───data
|   |
│   │       play.mp3
│   │       correct.mp3
│   │       wrong.mp3
│   └───           data.js
└───screenshots
        main-page.png
        correct-answer.png
        wrong-answer.png
        game-over.png

```

- **public:** Contains the HTML file.
- **src:** Contains the source code for the app.
  - **assets:** Contains the background files.
  - **components:** Contains the Trivia, Timer, Start(.jsx) component.
  - **data:** Contains the questions data.
  - **sounds:** Contains the sound files.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



// Global variable to track the active player (X or O)
let activePlayer = 'X';
// Array to store all selected squares with player markers (e.g., "0X", "3O")
let selectedSquares = [];

// Function to place X or O on the board
function placeXOrO(squareNumber) {
  // Prevent placing on an already selected square
  if (!selectedSquares.some(el => el.includes(squareNumber))) {
    let select = document.getElementById(squareNumber); // Get the clicked square element

    // Set background image based on the active player
    if (activePlayer === 'X') {
      select.style.backgroundImage = 'url("images/X.png")'; // Updated to new X image
    } else {
      select.style.backgroundImage = 'url("images/O.png")'; // Updated to new O image
    }

    // Record the move in the selectedSquares array
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions(); // Check if the move results in a win

    // Switch to the next player
    if (activePlayer === 'X') {
      activePlayer = 'O';
    } else {
      activePlayer = 'X';
    }

    audio('./media/play_sound.mp3'); // Play sound for placing a piece

    // If it's the computer's turn, delay and trigger its move
    if (activePlayer === 'O') {
      disableClick();
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }

    return true;
  }
}

// Function for the computer to make a random move
function computersTurn() {
  let success = false; // Flag to track if a valid move is made
  let pickASquare;

  // Keep trying until a valid move is made
  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9)); // Randomly select a square (0-8)
    if (placeXOrO(pickASquare)) {
      success = true; // Exit loop if the move is successful
    }
  }
}

// Function to temporarily disable clicks during the computer's turn
function disableClick() {
  document.body.style.pointerEvents = 'none'; // Disable all pointer events
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto'; // Re-enable after 1 second
  }, 1000);
}

// Function to play audio from a given URL
function audio(audioURL) {
  let audio = new Audio(audioURL); // Create a new Audio object
  audio.play(); // Play the audio file
}

// Function to check win conditions after each move
function checkWinConditions() {
  const winCombos = [
    ['0X','1X','2X'], ['3X','4X','5X'], ['6X','7X','8X'], // Horizontal wins
    ['0X','3X','6X'], ['1X','4X','7X'], ['2X','5X','8X'], // Vertical wins
    ['0X','4X','8X'], ['2X','4X','6X'] // Diagonal wins
  ];

  // Check each winning combination
  for (let combo of winCombos) {
    if (selectedSquares.includes(combo[0]) &&
        selectedSquares.includes(combo[1]) &&
        selectedSquares.includes(combo[2])) {
      drawWinLine(combo[0][0], combo[2][0]); // Draw win line if a combo is found
      return;
    }
  }

  // Check for a tie if all squares are filled without a win
  if (selectedSquares.length >= 9) {
    audio('./media/tic_sound.mp3'); // Play tie sound
    setTimeout(resetGame, 1000); // Reset game after 1 second
  }
}

// Function to draw an animated win line on the canvas
function drawWinLine(startSquare, endSquare) {
  const coords = {
    '0': {x: 100, y: 100}, '1': {x: 304, y: 100}, '2': {x: 508, y: 100},
    '3': {x: 100, y: 304}, '4': {x: 304, y: 304}, '5': {x: 508, y: 304},
    '6': {x: 100, y: 508}, '7': {x: 304, y: 508}, '8': {x: 508, y: 508}
  }; // Coordinates for each square's center

  let canvas = document.getElementById('win-lines');
  let ctx = canvas.getContext('2d');

  let x1 = coords[startSquare].x;
  let y1 = coords[startSquare].y;
  let x2 = coords[endSquare].x;
  let y2 = coords[endSquare].y;

  // Animation variables
  let animationProgress = 0;
  const animationSpeed = 0.05; // Speed of the animation
  const totalDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  function animateLineDrawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas each frame
    animationProgress += animationSpeed;

    // Calculate the current endpoint based on progress
    let currentX = x1 + (x2 - x1) * animationProgress;
    let currentY = y1 + (y2 - y1) * animationProgress;

    ctx.beginPath();
    ctx.moveTo(x1, y1); // Start point
    ctx.lineTo(currentX, currentY); // Draw to current point
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(70, 255, 33, 0.8)'; // Green win line
    ctx.stroke();

    // Continue animation until progress reaches 1
    if (animationProgress < 1) {
      requestAnimationFrame(animateLineDrawing);
    } else {
      disableClick(); // Disable clicks during win state
      audio('./media/win_sound.mp3'); // Play win sound
      setTimeout(resetGame, 2000); // Reset game after 2 seconds
    }
  }

  requestAnimationFrame(animateLineDrawing); // Start the animation
}

// Function to reset the game after a win or tie
function resetGame() {
  let canvas = document.getElementById('win-lines');
  if (canvas) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the win line
  }

  // Clear all square backgrounds
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    if (square) {
      square.style.backgroundImage = ''; // Remove X or O images
    }
  }

  selectedSquares = []; // Reset the move history
  activePlayer = 'X'; // Reset to player X
}
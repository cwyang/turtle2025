# Turtle Graphics Web Application

A web-based implementation of turtle graphics inspired by the Logo programming language. Draw using simple commands that control a virtual turtle on the canvas.

## How to Use

1. Open `index.html` in your web browser.
2. Type commands in the command editor panel.
3. Click "Run" to execute your commands.
4. Click "Reset" to clear the canvas and reset the turtle.
5. Click "Help" to view available commands.
6. Click "Save" to download your drawing as a PNG image.

## Available Commands

- `pen up` - Lifts the pen (stops drawing)
- `pen down` - Puts the pen down (starts drawing)
- `color [RGB]` - Sets the drawing color (e.g., `color 255,0,0` for red)
- `move [distance]` - Moves the turtle forward by the specified distance
- `rotate [angle]` - Rotates the turtle (negative angle for counterclockwise)

## Example Program

```
pen down
color 255,0,0
move 100
rotate 90
move 100
rotate 90
move 100
rotate 90
move 100
```

This will draw a red square.

## Files

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `turtle.js` - JavaScript code for the turtle graphics engine

## License

MIT 
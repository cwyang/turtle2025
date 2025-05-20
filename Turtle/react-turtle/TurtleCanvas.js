// TurtleCanvas.js
class TurtleCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.turtleImg = new Image();
        this.turtleImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2MC45IDI3NC44QzM3Ni45IDI0Ni4xIDM4MSAyMTAgMzcwLjYgMTc2LjlDMzYwLjIgMTQzLjggMzM1LjUgMTE2LjQgMzA0LjUgMTAyLjNDMjczLjUgODguMiAyMzcuMyA4OC4xIDIwNi4yIDAuOUMxNzUuMSA5Ny40IDE2NiAxMzIgMTYzLjkgMTcxLjJDMTYxLjcgMjEwLjMgMTY2LjQgMjU0IDE4NS40IDI4NC4zQzIwNC40IDMxNC42IDIzNy43IDMzMS41IDI3MS45IDMzOC42QzMwNi4xIDM0NS42IDM0NC45IDM0Mi43IDM2MC45IDI3NC44WiIgZmlsbD0iIzM4QjI3RiIvPjxwYXRoIGQ9Ik0yMzcuNCAyMjAuMUMyMjkuNiAyMTYuMiAyMjAuNSAyMTkuNCAyMTYuNiAyMjcuMkMyMTIuNyAyMzUgMjE1LjkgMjQ0LjEgMjIzLjcgMjQ4QzIzMS41IDI1MS45IDI0MC42IDI0OC43IDI0NC41IDI0MC45QzI0OC40IDIzMy4xIDI0NS4yIDIyNCAyMzcuNCAyMjAuMVoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTI3NC44IDIyMC4xQzI2NyAyMTYuMiAyNTcuOSAyMTkuNCAyNTQgMjI3LjJDMjUwLjEgMjM1IDI1My4zIDI0NC4xIDI2MS4xIDI0OEMyNjguOSAyNTEuOSAyNzggMjQ4LjcgMjgxLjkgMjQwLjlDMjg1LjggMjMzLjEgMjgyLjYgMjI0IDI3NC44IDIyMC4xWiIgZmlsbD0iYmxhY2siLz48cGF0aCBkPSJNMjQzLjUgMjY5LjRDMjQzLjUgMjY5LjQgMjQ0LjQgMjc1LjkgMjU1LjkgMjc1LjlDMjY3LjQgMjc1LjkgMjY4LjMgMjY5LjQgMjY4LjMgMjY5LjRIMjQzLjVaIiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xNjMuOCAxNzEuM0MxNjQuNSA4My40IDIzMC4xIC0zNS4zIDM1Mi42IDkuOUMzNDguNiAyNi4yIDM1NC42IDQyLjMgMzQ3LjQgNTcuNUMzNDAuMiA3Mi43IDMxOCA4NyAyOTUuNCA5M0MyNzIuOCA5OSAyNDkuOSA5Ni42IDIzMS4xIDk2LjZDMjEyLjIgOTYuNiAxOTcuNCA5OS45IDE4MC45IDExMC40QzE2NC40IDEyMSAxNDYuMiAxMzkgMTM5LjcgMTYxLjhDMTMzLjIgMTg0LjYgMTM4LjMgMjEyLjMgMTUzLjIgMjMxLjlDMTY4LjEgMjUxLjUgMTkzIDI2MyAyMTguNiAyNjkuMUMyNDQuMiAyNzUuMSAyNzEuMyAyNzUuNyAyOTYuOSAyNzIuOUMzMjIuNSAyNzAuMSAzNDcuMyAyNjMuOSAzNjcuOCAyNTIuN0MzODguMyAyNDEuNSA0MDQuNiAyMjUuNCA0MTAuOCAyMDUuM0M0MTcgMTg1LjIgNDEzLjMgMTYxLjEgMzk4LjQgMTQ0LjdDMzgzLjUgMTI4LjMgMzU3LjQgMTE5LjYgMzM0LjQgMTA5LjlDMzQ5LjcgMTExLjEgMzY0LjQgMTE2LjQgMzc3LjQgMTI1LjJDMzkwLjQgMTM0IDQwMS42IDE0Ni4zIDQwOS4yIDE2MC44QzQxNi44IDE3NS4zIDQyMC45IDE5Mi4xIDQyMCAyMDguOEM0MTkuMSAyMjUuNSA0MTMuMiAyNDIgNDAyLjQgMjU0LjhDMzkxLjUgMjY3LjYgMzc1LjYgMjc2LjcgMzU3LjkgMjgxLjVDMzQwLjIgMjg2LjMgMzIwLjYgMjg2LjggMzAyLjYgMjg0LjVDMjg0LjcgMjgyLjIgMjY4LjMgMjc3LjIgMjUzLjYgMjcwLjRDMjM4LjggMjYzLjYgMjI1LjYgMjU1IDIxNSAyNDMuNkMyMDQuNCwyMzIuMyAxOTYuMyAyMTguMSAxOTIuMiAyMDIuM0MxODggMTg2LjUgMTg3LjYgMTY5IDE5Mi42IDE1My4xQzE5Ny42IDEzNy4yIDIwOC4yIDEyMyAyMjIuOCAxMTMuNUMyMzcuNSAxMDMuOSAyNTYuMiA5OS4xIDI3NC43IDk5QzI5My4zIDk4LjkgMzExLjkgMTAzLjQgMzI3LjcgMTEzQzM0My41IDEyMi42IDM1Ni41IDEzNy41IDM2Mi45IDE1Ni4xQzM2OS4zIDE3NC43IDM2OS4xIDE5NyAzNjIuNCAyMTUuNEMzNTUuNiAyMzMuOCAzNDIuMyAyNDguNiAzMjYuMSAyNTcuOUMzMDkuOSAyNjcuMiAyOTAuOSAyNzEgMjcyLjQgMjY5LjlDMjUzLjkgMjY4LjkgMjM2IDI2MyAyMjEuMyAyNTIuM0MyMDYuNiAyNDEuNiAxOTUuMSAyMjYgMTg5LjMgMjA3LjlDMTgzLjQgMTg5LjggMTgzLjIgMTY5LjEgMTg4LjYgMTUwLjlDMTk0IDE2Ni45IDIwNS4xIDE4MC40IDIxOS4yIDE4OS41QzIzMy40IDE5OC42IDI1MC40IDIwMy4yIDI2Ni43IDIwMi45QzI4MyAyMDIuNiAyOTguOCAxOTcuNiAzMTIgMTkwQzMyNS4yIDE4Mi4zIDMzNSAxNzIgMzQxLjMgMTU5LjZDMzM5LjEgMTY0LjQgMzM2LjEgMTY4LjkgMzMyLjYgMTczQzMyOS4xIDE3Ny4xIDMyNS4xIDE4MC44IDMyMC44IDE4NC4xQzMxNi41IDE4Ny40IDMxMS44IDE5MC4yIDMwNi45IDE5Mi42QzMwMiAxOTUgMjk2LjkgMTk3IDE5MS43IDE0Ny45QzE4My4xIDE0OS4xIDE3NS41IDE1NC42IDE3MS44IDE2Mi43QzE2OCAxNzAuOCAxNjguNiAxODAgMTc0IDE4Ny40QzE1OS4yIDE4MS4yIDE1MC41IDE2NC44IDE2My44IDE3MS4zWiIgZmlsbD0iIzExNDQyOCIvPjwvc3ZnPg==';
        
        this.state = {
            turtle: {
                x: 0,
                y: 0,
                angle: 0,
                penDown: false,
                color: 'black',
                penSize: 2
            },
            isInitialized: false
        };
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas);
        this.resetTurtle();
        this.drawTurtle();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeCanvas);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.commands !== this.props.commands && this.props.commands) {
            this.executeCommands(this.props.commands);
        }
    }

    resizeCanvas = () => {
        const canvas = this.canvasRef.current;
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        
        if (!this.state.isInitialized) {
            this.resetTurtle();
        }
    }

    resetTurtle = () => {
        const canvas = this.canvasRef.current;
        this.setState({
            turtle: {
                x: canvas.width / 2,
                y: canvas.height / 2,
                angle: 0,
                penDown: false,
                color: 'black',
                penSize: 2
            },
            isInitialized: true
        }, () => this.drawTurtle());
    }

    clearCanvas = () => {
        const canvas = this.canvasRef.current;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    drawTurtle = () => {
        const { x, y, angle } = this.state.turtle;
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(angle * Math.PI / 180);
        this.ctx.drawImage(this.turtleImg, -16, -16, 32, 32);
        this.ctx.restore();
    }

    executeCommands = (commandsText) => {
        if (!this.state.isInitialized) {
            this.resetTurtle();
        }
        
        const commands = commandsText.trim().split('\n');
        let turtle = { ...this.state.turtle };
        
        for (const cmd of commands) {
            const parts = cmd.trim().toLowerCase().split(' ');
            if (parts.length === 0 || parts[0] === '') continue;
            
            const command = parts[0];
            
            switch (command) {
                case 'pen':
                    if (parts[1] === 'up') {
                        turtle.penDown = false;
                    } else if (parts[1] === 'down') {
                        turtle.penDown = true;
                    }
                    break;
                
                case 'color':
                    if (parts.length >= 2) {
                        const colorParts = parts.slice(1).join(' ').split(',');
                        if (colorParts.length === 3) {
                            const [r, g, b] = colorParts.map(c => parseInt(c.trim()));
                            turtle.color = `rgb(${r}, ${g}, ${b})`;
                        }
                    }
                    break;
                
                case 'move':
                    if (parts.length >= 2) {
                        const distance = parseFloat(parts[1]);
                        if (!isNaN(distance)) {
                            const radians = turtle.angle * Math.PI / 180;
                            const newX = turtle.x + distance * Math.cos(radians);
                            const newY = turtle.y + distance * Math.sin(radians);
                            
                            if (turtle.penDown) {
                                this.ctx.beginPath();
                                this.ctx.moveTo(turtle.x, turtle.y);
                                this.ctx.lineTo(newX, newY);
                                this.ctx.strokeStyle = turtle.color;
                                this.ctx.lineWidth = turtle.penSize;
                                this.ctx.stroke();
                            }
                            
                            turtle.x = newX;
                            turtle.y = newY;
                        }
                    }
                    break;
                
                case 'rotate':
                    if (parts.length >= 2) {
                        const angle = parseFloat(parts[1]);
                        if (!isNaN(angle)) {
                            turtle.angle += angle;
                        }
                    }
                    break;
            }
        }
        
        this.setState({ turtle }, () => this.drawTurtle());
    }

    reset = () => {
        this.clearCanvas();
        this.resetTurtle();
        if (this.props.onReset) {
            this.props.onReset();
        }
    }

    saveAsImage = () => {
        const canvas = this.canvasRef.current;
        return canvas.toDataURL('image/png');
    }

    render() {
        return (
            <div className="canvas-container w-full h-96">
                <canvas ref={this.canvasRef} className="w-full h-full"></canvas>
            </div>
        );
    }
} 
// App.js

// Import components
// Note: Since we're using script tags with Babel, these aren't actually necessary
// but I'm including them to show how it would work in a real React app
// const TurtleCanvas = window.TurtleCanvas;
// const HelpModal = window.HelpModal;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.turtleCanvasRef = React.createRef();
        this.state = {
            commands: '',
            isHelpModalOpen: false
        };
    }

    handleCommandChange = (e) => {
        this.setState({ commands: e.target.value });
    }

    handleRunClick = () => {
        if (this.turtleCanvasRef.current) {
            this.turtleCanvasRef.current.executeCommands(this.state.commands);
        }
    }

    handleResetClick = () => {
        if (this.turtleCanvasRef.current) {
            this.turtleCanvasRef.current.reset();
            this.setState({ commands: '' });
        }
    }

    handleSaveClick = () => {
        if (this.turtleCanvasRef.current) {
            const imageUrl = this.turtleCanvasRef.current.saveAsImage();
            const link = document.createElement('a');
            link.download = 'turtle-drawing.png';
            link.href = imageUrl;
            link.click();
        }
    }

    toggleHelpModal = () => {
        this.setState(prevState => ({ isHelpModalOpen: !prevState.isHelpModalOpen }));
    }

    render() {
        return (
            <div>
                <h1 className="text-3xl font-bold text-center mb-6">Turtle Graphics</h1>
                
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Canvas Area */}
                    <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                        <TurtleCanvas ref={this.turtleCanvasRef} />
                    </div>
                    
                    {/* Command Area */}
                    <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-3">Commands</h2>
                        <textarea 
                            value={this.state.commands}
                            onChange={this.handleCommandChange}
                            className="w-full h-64 p-2 border border-gray-300 rounded resize-none mb-4 font-mono" 
                            placeholder="Enter commands here...
Example:
pen down
color 255,0,0
move 100
rotate 90
move 100"
                        />
                        
                        <div className="flex gap-2 mb-4">
                            <button 
                                onClick={this.handleRunClick}
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                            >
                                Run
                            </button>
                            <button 
                                onClick={this.handleResetClick}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
                            >
                                Reset
                            </button>
                            <button 
                                onClick={this.toggleHelpModal}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                            >
                                Help
                            </button>
                            <button 
                                onClick={this.handleSaveClick}
                                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                
                <HelpModal isOpen={this.state.isHelpModalOpen} onClose={this.toggleHelpModal} />
            </div>
        );
    }
}

// 앱 실행
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}); 
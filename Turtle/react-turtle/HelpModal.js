// HelpModal.js
class HelpModal extends React.Component {
    render() {
        if (!this.props.isOpen) return null;
        
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2 className="text-2xl font-bold mb-4">Turtle Graphics Commands</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>pen up</strong> - 펜을 올려 그리기를 중지합니다</li>
                        <li><strong>pen down</strong> - 펜을 내려 그리기를 시작합니다</li>
                        <li><strong>color [RGB]</strong> - 그리기 색상을 설정합니다 (예: color 255,0,0 - 빨간색)</li>
                        <li><strong>move [거리]</strong> - 거북이를 지정된 거리만큼 앞으로 이동시킵니다</li>
                        <li><strong>rotate [각도]</strong> - 거북이를 회전시킵니다 (음수 각도는 시계 반대 방향)</li>
                    </ul>
                    <div className="mt-6 text-center">
                        <button 
                            onClick={this.props.onClose}
                            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        );
    }
} 
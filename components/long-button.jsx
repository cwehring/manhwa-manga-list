import React, {useState} from 'react';

function LongButton({text, onClick, backgroundColor, hoverColor, textColor}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button 
            style={{
                backgroundColor: isHovered ? hoverColor : backgroundColor,
                color: textColor,
                width: '10em',
                borderColor: '#FFAEAE',
                borderStyle: 'solid',
                borderWidth: '0.1em',
                borderRadius: '0.5em',
                cursor: 'pointer',
                fontFamily: 'Catamaran-SemiBold, sans-serif',
                fontSize: '1em',
                }} 
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </button>
    );
}

export default LongButton;

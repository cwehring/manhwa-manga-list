import React, {useState} from 'react';

function ShortButton({text, onClick, backgroundColor, hoverColor, textColor}) {
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
                padding: '0.35em',
                width: '6em',
                border: 'none',
                borderRadius: '0.5em',
                cursor: 'pointer',
                fontFamily: 'Catamaran-SemiBold, sans-serif',
                fontSize: '1.6em',
                }} 
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </button>
    );
}

export default ShortButton;

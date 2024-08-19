import React, { CSSProperties } from 'react';
import './buttons.scss';

type buttontype = "Menu" | "Element";

interface Props {
    label: string;
    onExcecute: () => void;
    type: buttontype;
    style? :CSSProperties
}

function Buttons({ label, onExcecute, type,style }: Props) {
    const excecuteFunction = () => {
      onExcecute &&   onExcecute();
    };

    return (
        <>
            {type === 'Menu' ? (
                <div className="square" onClick={excecuteFunction}>
                    {label}
                </div>
            ) : <button style={style} onClick={excecuteFunction}>{label}</button>} {/* Use `null` or `undefined` instead of an empty string */}
        </>
    );
}

export default Buttons;
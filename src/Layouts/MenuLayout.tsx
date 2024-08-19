import React, { useState } from 'react';
import './menu.scss';
import Buttons from 'src/components/Buttons/Buttons';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { resetData, setData } from 'src/store/files.store';
import { RootState } from 'src/store';
import { useNavigate } from 'react-router-dom';



function MenuLayout() {
    const dispatch = useAppDispatch()

    const [state, setState] = useState<boolean>(false)

    const navigate=useNavigate()
    const data = useAppSelector((state: RootState) => state.dataSlice);
    const changeColor = () => {
        const newState = !state;

        dispatch(
            newState
                ? setData({
                    background_color: "white",
                    text_color: "black",
                    color: "violet",
                    centerelement: "white",
                })
                : resetData()
        );

        setState(newState);
    };


    const isBlackBackground = data.background_color !== '#282c34';

    return (
        <div className='banner_container'>
            <div className="banner" style={{ 'backgroundColor': data.background_color }}>
                <a href="#home" className={`banner-link ${isBlackBackground ? 'hover-violet' : 'hover-orange'}`} style={{ color: data.text_color }}>Home</a>
                <a href="#about" className={`banner-link ${isBlackBackground ? 'hover-violet' : 'hover-orange'}`} style={{ color: data.text_color }}>Streams</a>
                <a href="#services" className={`banner-link ${isBlackBackground ? 'hover-violet' : 'hover-orange'}`} style={{ color: data.text_color }}>Party</a>
                <a
                    href="#contact"
                    className={`banner-link ${isBlackBackground ? 'hover-violet' : 'hover-orange'}`}
                    style={{ color: data.text_color }}
                >
                    Premium
                </a>
                <div className='logo_Web' >
                    <h3 style={{ color: data.text_color }}>Gamor</h3>
                </div>
                <div className="sidebuttons">

                    <Buttons label='Swith Theme' onExcecute={changeColor} type='Menu' />
                    <Buttons label='Sign in' onExcecute={() => { 
                        navigate('/sign')
                    }} type='Menu' />
                    <Buttons label='Create Account' onExcecute={() => { }} type='Menu' />
                </div>
            </div>

        </div>
    );
}

export default MenuLayout;
import React, { ChangeEvent, FormEvent } from 'react';
import ContentTabs from 'src/components/SwitchButtons/Switch';
import './Right.scss'
import ATSInput from 'src/components/input/Input';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { RootState } from 'src/store';
import { setData } from 'src/store/files.store';
import { setGame } from 'src/store/games.store';
import { setImage } from 'src/store/image.store';

function Right() {
    const data = useAppSelector((state: RootState) => state.dataSlice);
    const dispatch = useAppDispatch()
    const games = useAppSelector((state: RootState) => state.GamesSlice);

    const searchGame = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            const gamesearched = games.games.filter(x => x.name.includes(e.target.value))
            dispatch(setGame({ games: gamesearched }))
        }

    }


    const showIMG = (e: string) => {

        dispatch(setImage({ image: e }))
    }
    return (

        <div className='container_right' style={{ background: data.background_color, color: data.text_color, width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>


                <div className='choosePlatform'>
                    <span color='gray'>01. Choose Platform</span>


                    <ContentTabs />

                    <div style={{ marginTop: 45 }} >
                        <span color='gray'>02. Searching Games</span>

                        <ATSInput style={{ background: data.background_color, color: data.text_color, height: '40px', width: "300px" }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => searchGame(e)} />
                        {games.games.length ? <ul className="lista-con-boton" style={{ paddingTop: '20px', 'background': data.background_color, color: data.text_color }}>
                            {games.games && games.games.map((s, index) => {
                                return (
                                    <li key={index}>
                                        <span className="item-texto" style={{ color: data.text_color, background: data.background_color }}>{s.name}</span>
                                        <button className="boton-plus" onClick={() => showIMG(s.img)}>+</button>
                                    </li>

                                )
                            })}


                        </ul> :
                            <div style={{paddingTop:'25px'}}>


                                <span> Debe seleccionar una categoria </span>


                            </div>}

                    </div>



                </div>
            </div>





        </div>

    );
}

export default Right;
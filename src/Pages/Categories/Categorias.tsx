import React from 'react'
import { categories } from 'src/data'
import './Categorias.scss'
import { GameInterface } from 'src/Interfaces/GamesInterfaces';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setGame } from 'src/store/games.store';
import { RootState } from 'src/store';

function Categorias() {
    const dispatch = useAppDispatch()

    const getRandomImage = (images: any) => images[Math.floor(Math.random() * images.length)].path;
    const data = useAppSelector((state: RootState) => state.dataSlice);
    

    const getGames = (index: number) => {
        const games = categories.find(x => x.id === index)?.games
        if (games) {
            dispatch(setGame({ games }))


        }


    }
    return (
        <div style={{ display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '95px', flexDirection: 'column', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'flex-start', width: '93%' }}>
                <h3>Trending Categories</h3>
            </div>

            <div className='categories_list' style={{color:data.text_color}}>
                {categories.map((s, index) => (
                    <div key={index} className='categories' onClick={()=>getGames(index)}>
                        <div className='category-content'>
                            <h5>{s.name}</h5>

                            <div className='category-image'>
                                {s.img_path && s.img_path.length > 0 ? (
                                    <img src={getRandomImage(s.img_path)} alt={s.name} />
                                ) : (
                                    ''
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categorias
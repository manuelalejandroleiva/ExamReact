import React from 'react';
import SplitScreenContainer from 'src/components/splitScreen/SplitScreenContainer';
import MenuLayout from 'src/Layouts/MenuLayout';
import Left from './PagesCenter/Left/Left';
import Center from './PagesCenter/Center/Center';
import Right from './Right/Right';
import Categorias from './Categories/Categorias';
import { useAppSelector } from 'src/store/hooks';
import { RootState } from 'src/store';

function Index() {
    // Función para obtener una imagen aleatoria del array de imágenes
    const data = useAppSelector((state: RootState) => state.dataSlice);

    return (
        <div className='App' style={{ background: data.background_color, color: data.text_color, width: '100%' }}>
            <div className='menu-layout'>
                <MenuLayout />
            </div>

            <div className='container'>
                <SplitScreenContainer
                    leftContent={<Left />}
                    centerContent={<Center />}
                    rightContent={<Right />}
                />
            </div>
            <Categorias />
        </div>
    );
}

export default Index;
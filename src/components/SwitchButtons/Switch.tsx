import React, { useState, useEffect, useCallback } from 'react';
import './Switch.scss';
import Buttons from '../Buttons/Buttons';
import { useAppSelector } from 'src/store/hooks';
import { RootState } from 'src/store';

interface Props {
    onChange?: (input: string) => void;
}

const ContentTabs = ({ onChange }: Props) => {
    const [tab, changeTab] = useState<"Party" | "Match" | "Streams">("Party");
    const data = useAppSelector((state: RootState) => state.dataSlice);
    const isBlackBackground = data.background_color === '#1a2028';

    const handleTabChange = useCallback((newTab: "Party" | "Match" | "Streams") => {
        changeTab(newTab);
        onChange && onChange(newTab);
    }, [onChange]);

    const getButtonStyle = (currentTab: "Party" | "Match" | "Streams") => ({
        backgroundColor: tab === currentTab
            ? (isBlackBackground ? '#30363e' : 'white')
            : (isBlackBackground ? 'gray' : 'white'),
        color: tab === currentTab
            ? (isBlackBackground ? 'white' : 'black')
            : (isBlackBackground ? 'white' : 'black'),
        height: '45px',
        borderRadius: '20%', // Makes the button circular
        boxShadow: !isBlackBackground && tab === currentTab ? '0px 4px 8px rgba(0, 0, 0, 0.3)' : 'none'
    });

    const tabs = () => (
        <div
            className={`button-row`}
            style={{ flexDirection: 'row', width: '100%', paddingTop: 20 }}
        >
            <Buttons
                onExcecute={() => {
                    tab !== "Party" && handleTabChange("Party");
                }}
                style={getButtonStyle("Party")}
                type='Element'
                label={"Party"}
            />

            <Buttons
                onExcecute={() => {
                    tab !== "Match" && handleTabChange("Match");
                }}
                style={getButtonStyle("Match")}
                type='Element'
                label={"Match"}
            />

            <Buttons
                onExcecute={() => {
                    tab !== "Streams" && handleTabChange("Streams");
                }}
                style={getButtonStyle("Streams")}
                type='Element'
                label={"Streams"}
            />
        </div>
    );

    useEffect(() => {
        if (tab) {
            onChange && handleTabChange(tab);
        }
    }, [tab, handleTabChange, onChange]);

    return (
        <>
            {tabs()}
        </>
    );
};

export default ContentTabs;
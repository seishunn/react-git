import React from 'react';
import cl from "../Card.module.scss";

interface ICardInfoProps {
    name: string
    stars: number
    updatedAt: string
    createdAt: string
    pushedAt: string
}

const CardInfo: React.FC<ICardInfoProps> = ({name, pushedAt, stars, updatedAt, createdAt}) => {
    return (
        <div className={cl.card_info}>
            <div className={cl.name}>{name}</div>
            <div className={cl.card_info__table}>
                <div><span>Stars:</span>{stars}</div>
                <div><span>Updated at:</span> {new Date(updatedAt).toLocaleDateString()}</div>
                <div><span>Created at:</span> {new Date(createdAt).toLocaleDateString()}</div>
                <div><span>Pushed at:</span> {new Date(pushedAt).toLocaleDateString()}</div>
            </div>
        </div>
    );
};

export default CardInfo;

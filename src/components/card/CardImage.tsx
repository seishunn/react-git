import React from 'react';
import cl from "./Card.module.scss";

interface ICardImageProps {
    avatar: string
}

const CardImage: React.FC<ICardImageProps> = ({avatar}) => {
    return (
        <div className={cl.card_image}>
            <img src={avatar} alt=""/>
        </div>
    );
};

export default CardImage;

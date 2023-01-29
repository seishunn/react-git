import React from 'react';
import cl from "./Card.module.scss";

interface ICardDescriptionProps {
    description: string
}

const CardDescription: React.FC<ICardDescriptionProps> = ({description}) => {
    return (
        <div className={cl.description}>
            <div className={cl.description_title}>Description</div>
            <div className={cl.description_block}>
                {description}
            </div>
        </div>
    );
};

export default CardDescription;

import React from 'react';
import cl from "./Contributor.module.scss";
import {IContributors} from "../Card";

interface IContributorProps {
    index: number
    contributor: IContributors
}

const Contributor: React.FC<IContributorProps> = ({contributor, index}) => {
    return (
        <div className={cl.contributor}>
            <div className={cl.contributor_id}>{index + 1}</div>
            <div className={cl.contributor_image}>
                <img src={contributor.avatar_url} alt=""/>
            </div>
            <div className={cl.contributor_title}>
                {contributor.login}
            </div>
        </div>
    );
};

export default Contributor;

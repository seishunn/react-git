import React, {useEffect, useState} from 'react';
import cl from "./Card.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import {IRepo} from "../main/repository/Repository";
import {getContributors, getCurrentRepo} from "../../actions/repos";
import Contributor from "./contributor/Contributor";
import CardImage from "./CardImage";
import CardInfo from "./contributor/CardInfo";
import CardDescription from "./CardDescription";
import Loader from "../loader/Loader";

export interface IContributors {
    avatar_url: string,
    login: string
}

const Card = () => {
    const navigate = useNavigate();
    const [repo, setRepo] = useState<IRepo>({
        id: null,
        full_name: "",
        created_at: "",
        description: "",
        html_url: "",
        name: "",
        pushed_at: "",
        stargazers_count: 0,
        updated_at: "",
        owner: {
            id: null,
            avatar_url: "",
            login: "",
        }
    });
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [contributors, setContributors] = useState<IContributors[]>([]);
    const {username, reponame} = useParams();

    useEffect(() => {
        getCurrentRepo(username!, reponame!, setRepo, setIsAuth);
        getContributors(username!, reponame!, setContributors)
    }, [])

    return (
        <div>
            {isAuth && <Loader/>}
            <div className="container">
                <button onClick={() => navigate(-1)}>Назад</button>
                <div className={cl.card}>
                    <CardImage avatar={repo.owner.avatar_url}/>
                    <CardInfo
                        name={repo.name}
                        stars={repo.stargazers_count}
                        createdAt={repo.created_at}
                        pushedAt={repo.pushed_at}
                        updatedAt={repo.updated_at}
                    />
                </div>
                <CardDescription description={repo.description}/>
                <div className={cl.contributors}></div>
                {contributors.map((c, index) =>
                    <Contributor contributor={c} index={index}/>
                )}
            </div>
        </div>
    );
};

export default Card;
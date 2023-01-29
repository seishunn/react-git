import React from 'react';
import cl from "./Navbar.module.scss";

interface INavbarProps {
    searchValue: string
    changeSearchValue: (str: string) => void
    searchHandler: () => void
}

const Navbar: React.FC<INavbarProps> = ({searchValue, changeSearchValue, searchHandler}) => {
    return (
        <div className={cl.navigation}>
            <div className="container">
                <div className={cl.navigation_search}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={event => changeSearchValue(event.target.value)}
                        placeholder={"Search a repository"}/>
                    <button onClick={searchHandler}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, {useCallback, useEffect, useState} from 'react';
import cl from "./Main.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getRepos} from "../../actions/repos";
import Repository from "./repository/Repository";
import Loader from "../loader/Loader";
// Reducers
import {reposReducer} from "../../reducers/repos-reducer";
import Navbar from "../navbar/Navbar";
import {createPages} from "../../utils/pagesCount";
import Page from "../page/Page";
// Actions
const {setCurrentPage} = reposReducer.actions;

const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const repos = useAppSelector(state => state.repos.items);
    const isFetching = useAppSelector(state => state.repos.isFetching);
    const currentPage = useAppSelector(state => state.repos.currentPage);
    const perPage = useAppSelector(state => state.repos.perPage);
    const totalCount = useAppSelector(state => state.repos.totalCount);
    const pages: number[] = [];
    const pagesCount = Math.ceil(totalCount / perPage);
    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [])

    const searchHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue, currentPage, perPage));
    }

    const setCurrentPageHandler = useCallback((page: number) => {
        dispatch(setCurrentPage(page))
    }, []);

    return (
        <div>
            {isFetching && <Loader/>}
            <Navbar
                searchValue={searchValue}
                changeSearchValue={setSearchValue}
                searchHandler={searchHandler}
            />
            <div className={cl.repos}>
                {repos.map(repo => <Repository repo={repo}/>)}
            </div>
            <div className={cl.pages}>
                <Page
                    style={{marginRight: "10px"}}
                    page={1}
                    currentPage={currentPage}
                    changePage={setCurrentPageHandler}
                />
                {pages.map(page => <Page
                    key={page}
                    page={page}
                    currentPage={currentPage}
                    changePage={setCurrentPageHandler}
                /> )}
            </div>
        </div>
    );
};

export default Main;

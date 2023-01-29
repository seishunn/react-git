import {AppDispatch} from "../reducers";
import axios from "axios";
// Reducers
import {reposReducer} from "../reducers/repos-reducer";
import {IRepo} from "../components/main/repository/Repository";
import {IContributors} from "../components/card/Card";

// Actions
const {setRepos, setIsFetching} = reposReducer.actions;

const DefaultURL = "https://api.github.com/";

export const getRepos = (searchQuery: string = "stars:%3E1", currentPage: number, perPage: number) => {
    if (searchQuery === "") {
        searchQuery = "stars:%3E1";
    }

    return async (dispatch: AppDispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(DefaultURL + `search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setRepos(response.data))
    }
}

export const getCurrentRepo = async (userName: string, repoName: string, setRepo: (repo: IRepo) => void, setIsAuth: (isAuth: boolean) => void) => {
    setIsAuth(true);
    const response = await axios.get(DefaultURL + `repos/${userName}/${repoName}`);
    setRepo(response.data)
    setIsAuth(false);
}

export const getContributors = async (userName: string, repoName: string, setContributors: (contributors: IContributors[]) => void) => {
    const response = await axios.get(DefaultURL + `repos/${userName}/${repoName}/contributors?page=1&per_page=10`);
    setContributors(response.data)
}
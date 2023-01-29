import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isFetching: false,
    currentPage: 1,
    perPage: 16,
    totalCount: 0
};

export const reposReducer = createSlice({
    name: "repos",
    initialState,
    reducers: {
        setRepos(state, action) {
            state.items = action.payload.items;
            state.totalCount = action.payload.total_count
            state.isFetching = false;
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
})

export default reposReducer.reducer;
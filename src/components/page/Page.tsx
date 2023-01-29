import React from 'react';
import classNames from "classnames";
import cl from "../main/Main.module.scss";

interface IPageProps {
    page: number
    currentPage: number
    changePage: (page: number) => void

    [propName: string]: any
}

const Page: React.FC<IPageProps> = ({page, currentPage, changePage, ...props}) => {
    return (
        <div
            className={classNames(cl.page, {[cl.page_active]: currentPage === page})}
            key={page}
            onClick={() => changePage(page)}
            {...props}
        >{page}</div>
    );
};

export default React.memo(Page);

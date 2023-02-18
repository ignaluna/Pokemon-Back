import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./recipes.module.css"
import { setCurrentPage } from "../../Redux/actions";



const Paginaldo = ({ totalPost, postPerPage }) => {
    const pages = [];
    const { currentPage } = useSelector(state => state)
    const dispatch = useDispatch();

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className={styled.paginaldo}>
            {
                pages.map((page, index) => <button
                    className={page === currentPage ? styled.paginaldo : styled.currentPage}
                    onClick={() => dispatch(setCurrentPage(page))} key={index}>{page}</button>)
            }
        </div>
    )
}

export default Paginaldo;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import s from './Pages.module.css';


export default function Pages({ totalCards, cardsxPage }) {
    const dispatch = useDispatch();
    const currPage = useSelector(state => state.currentPage);
    // console.log('total Cards: ', totalCards);
    // console.log('cardsxPage : ', cardsxPage);
    // console.log('currPage : ', currPage);

    const totalPages = Math.ceil((totalCards - 9) / cardsxPage) + 1;
    const pages = []; // array para nros de paginas
    for (let i = 0; i < totalPages; i++) { pages.push(i + 1) } //completo con numeros de pagina
    // console.log('Pages: ', pages);

    return (
        <div className={s.pagesDiv}>
            {pages.map(pageNum =>
                <button
                    key={pageNum}
                    onClick={() => {
                        dispatch(setCurrentPage(pageNum))
                    }}
                    value={pageNum}
                    className={currPage === pageNum ? s.activo : s.inactivo}
                > {pageNum}</button>
            )
            }
        </div>
    );
};
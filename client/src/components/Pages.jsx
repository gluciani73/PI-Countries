import React from "react";
import s from './Pages.module.css';


export default function Pages({ totalCards, cardsxPage, currPage, pageChange }) {
    // console.log('total Cards: ', totalCards);
    console.log('cardsxPage : ', cardsxPage);
    console.log('currPage : ', currPage);
    console.log('pageChange : ', pageChange);
    const totalPages = Math.ceil((totalCards - 9) / cardsxPage) + 1;
    const pages = []; // array para nros de paginas
    for (let i = 0; i < totalPages; i++) { pages.push(i + 1) } //completo con numeros de pagina
    console.log('Pages: ', pages);
    return (
        <div className={s.pagesDiv}>
            {pages.map(pageNum =>
                <button
                    key={pageNum}
                    onClick={() => {
                        pageChange(pageNum);
                    }}
                    value={pageNum}
                    className={currPage === pageNum ? s.activo : s.inactivo}
                > {pageNum}</button>
            )
            }
        </div>
    );
};
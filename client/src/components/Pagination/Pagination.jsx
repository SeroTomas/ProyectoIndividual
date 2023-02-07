import { useSelector } from 'react-redux'
import style from './pagination.module.css'

const Pagination = ({currentPage, setCurrentPage, countries }) => {

    let pages = Math.ceil(countries / 10)

    return (
        <div className={style.paginadoContainer}>
            <button disabled = {currentPage === 1} onClick={() => {setCurrentPage(currentPage - 1)}}>Prev</button>
            <button disabled = {currentPage === pages} onClick={() => {setCurrentPage(currentPage + 1)}}>Next</button>
        </div>
    )
}
export default Pagination;

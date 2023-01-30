import style from './pagination.module.css'

const Pagination = ({countries, paginado }) => {
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries / 10); i++) {
        pageNumbrers.push(i)
    }
    return (
        <div className={style.paginadoContainer}>
            <ul className={style.ul}>
                {pageNumbrers &&
                    pageNumbrers.map(number => (
                        <li key={number}>
                            <a className={style.numeroPaginado} href onClick={() => paginado(number)}> {number} </a>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default Pagination;

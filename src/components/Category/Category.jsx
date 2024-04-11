import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Card from '../Card/Card';
import { useEffect, useState } from "react"
import Pagination from "react-bootstrap/Pagination";



const Category = ({category}) => {
    const [state, setState] = useState({
        maxPage: 20,
        limit: 6,
        activePage: 1
    });


    const url = `https://fakestoreapi.com/products/category/${category.toLowerCase()}?page=${state.activePage}`;

    let { data, loading, error } = useFetch(url);

    useEffect(() => {
        // Calculate maxPage after fetching data
        if (!loading && data) {
            const totalProducts = data.length; // Assuming API returns total products
            const maxPage = Math.ceil(totalProducts / state.limit);
            setState(prevState => ({ ...prevState, maxPage }));
        }
    }, [data, loading, state.limit]);

    const handlePageChange = (pageNumber) => {
        setState({ ...state, activePage: pageNumber });
        console.log(state);
        console.log(url);

        // let {data, loading, error} = useFetch(url);
    };

    return (
        <div className='container my-3'>
            <h2>{category}</h2>
            {
                error ?
                    <p>Something is wrong</p>
                    : loading
                        ? <p>Loading...</p>
                        :
                        <div className='row'>
                            {
                                data?.slice((state.activePage-1)*state.limit, ((state.activePage-1)*state.limit)+state.limit).map((val) => <div className='col-2' key={val.id}>
                                <Card item={val} />
                                </div>)
                            }
                        </div>
            }
            <div className='container my-3'>
                <Pagination className="d-flex justify-content-center">
                    {state.activePage != 1 ? <Pagination.First
                        onClick={() => handlePageChange(1)} /> : <Pagination.First disabled />}
                    {state.activePage != 1 ? <Pagination.Prev
                        onClick={() => handlePageChange(state.activePage - 1)} /> : <Pagination.Prev disabled />}
                    {state.activePage - 2 > 0 ? <Pagination.Item
                        onClick={() => handlePageChange(state.activePage - 2)}>{state.activePage - 2}</Pagination.Item> : <></>}
                    {state.activePage - 1 > 0 ? <Pagination.Item
                        onClick={() => handlePageChange(state.activePage - 1)}>{state.activePage - 1}</Pagination.Item> : <></>}
                    {state.activePage > 0 ? <Pagination.Item active>{state.activePage}</Pagination.Item> : <></>}
                    {state.activePage + 1 <= state.maxPage ? <Pagination.Item
                        onClick={() => handlePageChange(state.activePage + 1)}>{state.activePage + 1}</Pagination.Item> : <></>}
                    {state.activePage + 2 <= state.maxPage ? <Pagination.Item
                        onClick={() => handlePageChange(state.activePage + 2)}>{state.activePage + 2}</Pagination.Item> : <></>}
                    {state.activePage != state.maxPage ? <Pagination.Next
                        onClick={() => handlePageChange(state.activePage + 1)} /> : <Pagination.Next disabled />}
                    {state.activePage != state.maxPage ? <Pagination.Last onClick={() => handlePageChange(20)} /> : <Pagination.Next disabled />}
                </Pagination>
            </div>
        </div>
    )
}


export default Category
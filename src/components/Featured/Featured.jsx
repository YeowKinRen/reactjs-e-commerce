import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Card from '../Card/Card';


const Featured = () => {
    const url = "https://fakestoreapi.com/products?limit=6";

    const { data, loading, error } = useFetch(url);

    return (
        <div className='container my-3'>
            <h2>Featured products</h2>
            {
                error ?
                    <p>Something is wrong</p>
                    : loading
                        ? <p>Loading...</p>
                        :
                        <div className='row'>
                            {
                                data?.map((val) => <div className='col-2' key={val.id}>
                                    <Card item={val} />
                                </div>)
                            }
                </div>
            }
        </div>
    )
}


export default Featured
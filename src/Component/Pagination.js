import { number } from 'prop-types';
import React from 'react'

const Pagination = ({pageSize,totalResults,paginate}) => {
    const pageNumbers = [];

    // for(let i=1; i<=Math.ceil(totalPosts / pageSize);i++){
    //     pageNumbers.push(i);
    // }
    for(let i=1; i<=Math.ceil(totalResults / pageSize);i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <a onClick={()=>paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                </li>  
            ))}
        </ul>
    </nav>
  )
}

export default Pagination
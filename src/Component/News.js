import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes, { any } from 'prop-types';
import "./News.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import _ from 'lodash';





const News = (props) => {
  // const apiKey = "34151da7741b4e8e8b716860c2a11853";
  // const apiKey = "6fda8cc2e0884dbdb33f10df53ce9ddb"
  const apiKey = "076f11c98ae14599bab2a1ffe9be17eb";
  // const apiKey = process.env.REACT_APP_APIKEY;




  const [loading, setLoading] = useState(true);
  const [news, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [filterVal, setFilterVal] = useState('');
  const [searchApiData, setSearchApiData] = useState([]);
 




  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getarticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    try {
      const articledata = await axios.get(url, {
        params: { page: setPage},
      });
      setArticles(articledata.data.articles);
      setTotalResults(articledata.data.totalResults);
      setSearchApiData(articledata.data.articles);

      // setArticles(_(articledata.data.articles).slice(0).take(props.pageSize).value());
      // console.log(articledata.data.articles);
      setLoading(false)
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    getarticles();
  }, [setPage])

  
 


  //creating pagination number navigation logic
  const pageCount = news ? Math.ceil(totalResults / props.pageSize) : 0;
  if (pageCount === 1) { return null };
  const pages = _.range(1, pageCount + 1);

  
  const pagination = async (pageNo) => {
    await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${pageNo}&pageSize=${props.pageSize}`).then((res) => {
      setPage(pageNo);
      setArticles(res.data.articles);
    }).catch((err) => {
      console.log(err);
    })

  }

//Creating filter search
  const handleFilter =(e)=>{
    e.preventDefault()
 
    if(e.target.value === ""){
      axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`).then((res)=>{
        setArticles(res.data.articles);
      }).catch((err)=>console.log(err));
    }else{
      const filterResult = searchApiData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setArticles(filterResult)
    }
    setFilterVal(e.target.value)

  }

  // const submitFilter= async (s)=>{
    
  //   s.preventDefault()
  //   return await axios.get(`https://newsapi.org/v2/top-headlines?q=${filterVal}country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`).then((res)=>{
  //     setArticles(res.data.articles);
  //     console.log(res.data.articles);
  //     setPage(0)
  //   }).catch((err)=>console.log(err));
  //   setFilterVal(filterVal)
  // }
  



  const handleNextClick = async () => {
    // console.log("next");
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

    }
    else {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
      try {
        const nextdata = await axios.get(url);
        setPage(page + 1);
        setArticles(nextdata.data.articles);
      }
      catch (err) {
        console.log(err)
      }
    }

  }

  const handlePrevClick = async () => {
    // console.log("prev");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    try {
      const prevdata = await axios.get(url);
      setPage(page - 1);
      setArticles(prevdata.data.articles);
    }
    catch (err) {
      console.log(err)
    }
  }

  // console.log(pages);




  return (
    <>

      <form className='search-form' >
        <input
          placeholder="Search for the news..."
          value={filterVal}
          onChange={(e) =>handleFilter(e)}
        />
      </form>
      

      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Top {capitalizeFirstLetter(props.category)} News Headlines</h1>
      <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>

        <nav>
          <ul className='pagination pagination-lg'>
            {pages.map(value => (
              <li key={value} className={value === page ? "page-item active" : "page-item"}>
                <a onClick={() => pagination(value)} className="page-link">{value}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>

      {loading && <Spinner />}
      <div className="container">

        <div className="row">
          {news.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
          <nav>
            <ul className='pagination pagination-lg'>
              {pages.map(value => (
                <li key={value} className={value === page ? "page-item active" : "page-item"}>
                  <a onClick={() => pagination(value)} className="page-link">{value}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'business',
}

News.prop = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
import React ,{useState , useEffect} from "react";

import { NewsItem } from "../newsItems/NewsItems";
import { Spinner } from "../spinner/spinner";
import './news.css'
import InfiniteScroll from 'react-infinite-scroll-component';
export const  News = (props)=> {

const [articles,setArticles] = useState([]);

const [page,setPage] = useState(1);
const [totalResults,setTotalResults] = useState(0);


  const update = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=ffbc931f56624ee081eda3133997d675&page=${page}&pageSize=12`
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(totalResults)
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
  }
useEffect(()=>{
     update();
},) 
    

   const  fetchData = async () => {
        // this.setState({ disable: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=ffbc931f56624ee081eda3133997d675&page=${page+1}&pageSize=12`;
        setPage(page+1);
            let data = await fetch(url);
            let parseData = await data.json();
            setArticles(articles.concat(parseData.articles));
            
            console.log(totalResults , page)
      };

    // PrevPage = async () => {

    //     this.setState({ disable: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ffbc931f56624ee081eda3133997d675&page=${this.state.page - 1}&pageSize=12`
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({ disable: false })

    //     // console.log(this.state.page)
    //     this.setState({ articles: parseData.articles })
    //     this.setState({ page: this.state.page - 1 })
    //     this.setState({ disable: false })

    // }
    // NextPage = async () => {
    //     if (this.state.page > Math.floor(this.state.totalResults / 12)) {
    //         this.setState({ disable: true })
    //     }
    //     else {
    //         this.setState({ disable: true })
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ffbc931f56624ee081eda3133997d675&page=${this.state.page + 1}&pageSize=12`
    //         let data = await fetch(url);
    //         let parseData = await data.json();
    //         this.setState({ disable: false })

    //         // console.log(parseData.articles)
    //         this.setState({ articles: parseData.articles })
    //         this.setState({ page: this.state.page + 1 })
    //         this.setState({ disable: false })
    //     }
    // }



        return (
            <>
                <div className="container my-3  ">
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button disabled={this.state.page < 2} onClick={this.PrevPage} className="btn btn-primary me-md-2" type="button">Previous Page</button>
                        <button disabled={this.state.disable} onClick={this.NextPage} className="btn btn-primary" type="button">Next Page</button>
                    </div> */}
                    <h1 className="headline__title my-3 MX-2">Today's top Headlines</h1>
                    {/* {this.state.disable && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={totalResults} //This is important field to render the next data
                        next={fetchData}
                        hasMore={true}
                        loader={<Spinner />}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }>

                    <div className="news_grid">
                        {articles.map((element) => {
                            return <div key={element.url} >
                                <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : "https://fdn.gsmarena.com/imgroot/news/22/06/watchos-9-announced/-952x498w6/gsmarena_000.jpg"} url={element.url} />
                            </div>
                        })}
                    </div>
                        </InfiniteScroll>
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button disabled={this.state.page < 2} onClick={this.PrevPage} className="btn btn-primary me-md-2" type="button">Previous Page</button>
                        <button disabled={this.state.page > Math.floor(this.state.totalResults / 12)} onClick={this.NextPage} className="btn btn-primary" type="button">Next Page</button>
                    </div> */}
                </div>
            </>

        )
    
}
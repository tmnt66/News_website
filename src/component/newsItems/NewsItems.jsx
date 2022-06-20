import React from "react";

import '../news/news.css'

export const  NewsItem = (props)=> {

        let  {title, description ,url ,  imgUrl} = props;
        return (
            <div className='news__item'>
                
                <div className="card" style={{width : "17rem"} }>
                    <img src={imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}.</p>
                            <a target="_blank" rel="noreferrer" href={url} className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    
}
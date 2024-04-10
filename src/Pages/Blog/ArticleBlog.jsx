import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import IconsMedia from '../../Components/IconsMedia/IconsMedia';
import DataContentBlog from './Components/DataContentBlog';

function ArticleBlog(props) { 
  //* Parametro search router id. 
  let { articleId } = useParams();
  console.log(`tetas:  ${articleId}`)
  //* Filtrar el articulo de portada.
  let currentArticle = DataContentBlog.find(article => article.id === parseInt(articleId));
  //* Filtrar los articulos de secciones.
  let filterSectionNotice = DataContentBlog.filter(obj => obj.id !== parseInt(articleId)) 


  return (
    <>
      <article className='blogNotice'>
        <section className='blogNotice__container'>
            <div className='blogNotice__notice'>
              <h2>{currentArticle.title}</h2>
              <p>{currentArticle.date}</p>
              <img src={currentArticle.image} alt="" />
              <p>{currentArticle.text}</p>
              <div className='blogNotice__icons'>
                {IconsMedia.map((obj,index)=>(
                    <NavLink  to={obj.link} target='_black' key={index}>
                      {obj.icon}
                    </NavLink> 
                ))}
              </div>
            </div>
            <div className='blogNotice__section'>
              <p>Más de nuestro blog</p>
              {
                filterSectionNotice.map((obj)=>(
                  <NavLink className='blogNotice__section--container' key={obj.id} to={`/blog/${obj.id}`}>
                    <img src={obj.image}/>
                    <div className='blogNotice__content'>
                      <p>{obj.title}</p>
                      <p>{obj.text}</p>
                    </div>
                  </NavLink>  
                ))
              }
            </div>
        </section>
      </article>
    </>
  )
}

ArticleBlog.propTypes = {}

export default ArticleBlog;

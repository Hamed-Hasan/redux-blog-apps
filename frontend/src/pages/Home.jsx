import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import { toggleCategory } from '../redux/actionCreators/filterCreators';
import fetchBlogsData from "../redux/thunk/fetchBlogs"
const Home = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog?.blogs[0])
    const filters = useSelector((state) => state.filter?.filters)
    const {category, stock} = filters;
 
  
    
   
    const activeClass = " text-slate-900 bg-[#3ABAB4] border-white";
  
    useEffect(() => {
        dispatch(fetchBlogsData())
    }, []);

    let content;
    if(blogs) {
      content =blogs?.map((blog) => (
        <BlogCard key={blog.title} blog={blog}/>
      ))
    }
    if(blogs?.length && (stock || category?.length)) {
      content = blogs.filter((blog) => {
        if(stock){
          return blog.status === true;
        }
        return blog
      })
      .filter((blog) => {
        if(category?.length){
          return category.includes(blog.category)
        }
        return blog
      })
      .map((blog) => <BlogCard key={blog.title} blog={blog}/>)
    }
    return (
        <div className='max-w-7xl gap-14 mx-auto py-10'>
        <div className='mb-10 flex justify-end gap-5'>
        <button
         className={`border text-slate-400 px-3 py-2 rounded-full font-semibold ${category.includes('sports') ? 
          activeClass : null}`}
          onClick={() => dispatch(toggleCategory('sports'))}
        >
          Sports
        </button>
        <button
          className={`border px-3 py-2 rounded-full text-slate-400 font-semibold ${
            category.includes("politics") ? activeClass : null
          }`}
          onClick={() => dispatch(toggleCategory('politics'))}
        >
          Politics
        </button>
      </div>
       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4'>
        {content}
      </div>
        </div>
    );
};

export default Home;
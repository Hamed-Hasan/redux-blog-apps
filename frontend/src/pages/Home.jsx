import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import fetchBlogsData from "../redux/thunk/fetchBlogs"
const Home = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs[0])
  
  
    useEffect(() => {
        dispatch(fetchBlogsData())
    }, []);

    let content;
    if(blogs) {
      content =blogs?.map((blog) => (
        <BlogCard key={blog.title} blog={blog}/>
      ))
    }
    return (
        <div className='max-w-7xl gap-14 mx-auto py-10'>
       
       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4'>
        {content}
      </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { useParams } from 'react-router-dom';

import '../main';
import blogDetail from '../utils/blogDetail'
const Blog = () => {
    const {blogId} = useParams()
    const [blog] = blogDetail(blogId)
    console.log("🚀 ~ file: Blog.jsx:8 ~ Blog ~ blog", blog)
  
    return (
        <div class="max-w-screen-xl mx-auto">
       
    
        <main class="mt-10">
    
          <div class="pb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
            <div class="absolute left-0 bottom-0 w-full h-full z-10 blog"
              
              ></div>
            <img src={blog.data?.image} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <a href="#"
                class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{blog.data?.category}</a>
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            {blog.data?.title}
              </h2>
              {/* <div class="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                  <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div>
              </div> */}
            </div>
          </div>
    
          <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            
    {
        blog.data?.keyFeature?.map((feature) => {
            return (
                
            <div key={feature} class="border-l-4 border-gray-500 pl-4 pb-6 italic rounded">
            {feature}
          </div>
            )
        })
    }
    
    
          </div>
        </main>
    
      
      </div>
    );
};

export default Blog;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
    // console.log("🚀 ~ file: BlogCard.jsx:4 ~ BlogCard ~ blog", blog)
    const navigate = useNavigate()
    const navigateToBlogDetail = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#0B1120] border-2 flex flex-col border-[#3ABAB4]">
      <div>
      <img class="w-full h-52" src={blog.image}/>
      </div>

      <div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-1 text-gray-300">{blog.title.slice(0,17)}</div>
        <div className=' flex-1'>
        <ul className='space-y-1'>
            {
                blog.keyFeature?.map((feature) => {
                    return (
                        <li key={feature} className='text-sm text-gray-400'>
                            {feature}
                        </li>
                    )
                })
            }
        </ul>
      </div>
        </div>
        <div class="flex justify-evenly">
          <span class="inline-block bg-teal-900 text-[#3ABAB4] rounded-full px-3 text-sm font-semibold  mr-2 pb-1">{blog.category}</span>
          <span class="inline-block bg-teal-900 text-[#3ABAB4] rounded-full px-3 text-sm font-semibold  mr-2 pb-1">Publish Date {blog.date}</span>
        </div>
        <div className='flex gap-2 mt-5 m-3'>
       
          <button
          onClick={() => navigateToBlogDetail(blog._id)}
            className='bg-[#3ABAB4] border-2 border-[#0B1120] rounded-full py-1 px-2 flex-1 text-white text-bold'
          >
            View Details
          </button>
     

  
      </div>
      </div>
      </div>
    );
};

export default BlogCard;
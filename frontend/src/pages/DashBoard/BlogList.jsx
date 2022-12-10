import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBlog from '../../redux/thunk/deleteProduct';
import fetchBlogsData from '../../redux/thunk/fetchBlogs';
import updateBlog from '../../redux/thunk/updateBlog';



const BlogList = () => {
  const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog?.blogs[0])
    updateBlog()
    useEffect(() => {   
        dispatch(fetchBlogsData())
    });
    const handleEdit = () => {
      setEdit(true)
    }
    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
        <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
          <header class='px-5 py-4 border-b border-gray-100'>
            <div class='font-semibold text-gray-800'>Blogs</div>
          </header>
  
          <div class='overflow-x-auto p-3'>
            <table class='table-auto w-full'>
              <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                <tr>
                  <th></th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>Blog Name</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>Category</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>In Stock</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>Rating</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-center'>Edit</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-center'>Action</div>
                  </th>
                </tr>
              </thead>
  
            <tbody className='text-sm divide-y divide-gray-100'>
            {blogs?.map(({title, category, status, rating, _id}) => (
               <tr>
                  <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                  </td>
                
                  <td class='p-2'>
                    {
                      edit ? (
                        <input type='text' className='w-full border-2 rounded p-1' defaultValue={title} id='title'  />
                      ) : (
                        <div class='font-medium text-gray-800'>{title}</div>
                       
                      )
                    }
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{category}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left'>
                        {status ? (
                            <p className='text-green-500 font-medium'>Available</p>
                        ) : (
                            <p className='text-red-500 font-medium'>Stock out</p>
                        )}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                      {rating}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                            <button
                            // onClick={() => dispatch(deleteBlog(_id))}
                            onClick={handleEdit}
                            >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                            </button>
                            {
                              edit && <button
                              onClick={() => dispatch(updateBlog(_id))}
                              className="bg-green-600 text-white px-2 pb-1 ml-3 rounded-full">save</button>

                            }
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                            <button
                            onClick={() => dispatch(deleteBlog(_id))}
                            >
                            <svg
                          class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                            </button>
                    </div>
                  </td>
               </tr>
            ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default BlogList;
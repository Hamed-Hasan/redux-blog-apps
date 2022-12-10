import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlog from '../../redux/thunk/addBlog';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const today = new Date().toLocaleTimeString();
    const submit = (data) => {
    
        const blogs = {
            title: data.title,
            date: today,
            category: data.category,
            rating: data.rating,
            image: data.image,
            status: data.status === 'true' ? true : false,
            keyFeature: [
                data.keyFeature1,
                data.keyFeature2,
                data.keyFeature3,
                data.keyFeature4
            ],
            spec: [],
        }   
        dispatch(addBlog(blogs))
        
    }

    return (
        <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-[#0B1120]'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='model'>
            Title
          </label>
          <input type='text' className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300' id='model' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='image'>
            Image
          </label>
          <input type='text' className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3 text-slate-300' htmlFor='brand'>
            Category
          </label>
          <select className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300' name='category' id='category' {...register("category")}>
            <option value='sports'>Sports</option>
            <option value='politics'>Politics</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='price'>
            Rating
          </label>
          <input type='text' name='rating' className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300' id='rating' {...register("rating")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3 text-slate-300'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-slate-300 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-slate-300 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='keyFeature1'>
            Key Feature 1
          </label>
          <input
            type='text'
            className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300'
            name='keyFeature1'
            id='keyFeature1'
            {...register("keyFeature1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='keyFeature2'>
            Key Feature 2
          </label>
          <input
            type='text'
            className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300'
            name='keyFeature2'
            id='keyFeature2'
            {...register("keyFeature2")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='keyFeature3'>
            Key Feature 3
          </label>
          <input
            type='text'
            name='keyFeature3'
            className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300'
            id='keyFeature3'
            {...register("keyFeature3")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2 text-slate-300' htmlFor='keyFeature4'>
            Key Feature 4
          </label>
          <input
            type='text'
            name='keyFeature4'
            className='border-2 rounded p-1 border-slate-400 bg-slate-900 text-slate-300'
            id='keyFeature4'
            {...register("keyFeature4")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddBlog;
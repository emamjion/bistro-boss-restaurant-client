import React from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";


const img_hosting_token=import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    
    const onSubmit = data => {
        // console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            // console.log(imgRes);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                // console.log(data, imgURL);

                const { name, price, category, details } = data;
                const newMenuItem = { name, price: parseFloat(price), category, details, image: imgURL };
                console.log(newMenuItem);
            }
        })

    };
    // console.log(errors);
    // console.log(watch("example"));
    // console.log(img_hosting_token);
    
    return (
        <div className='w-full px-6'>
            <HelmetCompo title={'Bistro Boss | Dashboard | Add Item'} />
            <SectionTitle 
                subHeading={"What's new?"}
                heading={'Add An Item'}
            />
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 bg-[#f2f2f2] p-8 mb-6'>
                <div className='mb-6'>
                    <span className='text-xl font-medium mb-2 block'>Recipe Name*</span>
                    <input 
                        className='px-4 py-2 w-full rounded' 
                        type="text" 
                        placeholder='Recipe Name'
                        {...register("name", {required: true, maxLength: 120})}
                    />
                </div>
                <div className='mb-6 flex items-center gap-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Category*</span>
                        </label>
                        <select 
                            className="select select-bordered"
                            {...register("category", { required: true })}
                            defaultValue="Category"
                        >
                            <option disabled>Category</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className='w-1/2'>
                        <span className='text-xl font-medium mb-2 block'>Price*</span>
                        <input 
                            className='px-4 py-2 w-full rounded' 
                            type="number" 
                            placeholder='Price'
                            {...register("price", { required: true })}
                        />
                    </div>
                </div>
                <div className='mb-6'>
                    <span className='text-xl font-medium mb-2 block'>Recipe Details*</span>
                    <textarea 
                        className='px-4 py-2 w-full h-[160px] rounded resize-none'
                        placeholder='Recipe Details'
                        {...register("details", { required: true })}
                    >

                    </textarea>
                </div>
                <div>
                    <span className='text-xl font-medium mb-2 block'>Item Image*</span>
                    <input 
                        type="file" 
                        className="file-input w-full max-w-xs"
                        {...register("image", { required: true })}
                    />
                </div>
                <div className='mt-6 pb-6'>
                    <input className='bg-[#835D23] px-6 py-2 rounded text-white font-medium cursor-pointer' type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;
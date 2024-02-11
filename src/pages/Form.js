import React, { useState } from 'react'
import { Controller, useController, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { string, date, z } from 'zod'
import { Datepicker } from 'flowbite-react';
import LogoImg from '../components/layout/LogoImg';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
    name: string().min(2),
    email: string().email(),
    mobile_1: z.string().regex(phoneRegex, 'Invalid Number!'),
    mobile_2: z.string().regex(phoneRegex, 'Invalid Number!'),
    tel_1: z.string().regex(phoneRegex, 'Invalid Number!'),
    tel_2: z.string().regex(phoneRegex, 'Invalid Number!'),
    facebookAccount: string(),
    WhatsApp_B_Phone: z.string().regex(phoneRegex, 'Invalid Number!'),
    address: z.string().min(2),
    country: z.string().min(2),
})
function Form() {
    const { register, control, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) });
    const { errors } = formState;

    // const { field } = useController({ name: "date", control });

    const onSubmit = (data) => {
        console.log(data.date);
    };
    return (
        <div className='dark-theme min-h-screen max-h-full w-full overflow-auto py-5'>
            <div className='flex flex-col items-center'>
                <div className='logo-container !mt-0'>
                    <hr className='line-left !mt-0' />
                    {/* <img src={logo} /> */}
                    <LogoImg />
                    <hr className='line-right !mt-0' />
                </div>
                <span className='company_name'>
                    BRIDG
                </span>
            </div>
            <div className='mx-auto w-[90%] md:w-[95%] lg:w-[70%] xl:w-[60%] form  pt-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="John william"
                                    className=''
                                    {...register('name')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Name</span>
                            </label>
                            <div className="error">{errors.name?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="example@gmail.com"
                                    {...register('email')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Email</span>
                            </label>
                            <div className="error">{errors.email?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="http://example"
                                    {...register('facebookAccount')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Facebook Account</span>
                            </label>
                            <div className="error">{errors.facebookAccount?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="+95503231321"
                                    {...register('WhatsApp_B_Phone')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>WhatsApp Business Phone Number</span>
                            </label>
                            <div className='text-white text-sm pt-1 ps-1'>Note : Not previously used as WhatsApp Account</div>
                            <div className="error">{errors.WhatsApp_B_Phone?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="3 Avenue"
                                    {...register('address')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Address</span>
                            </label>
                            <div className="error">{errors.address?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="USA"
                                    {...register('country')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Country</span>
                            </label>
                            <div className="error">{errors.country?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="6666666"
                                    {...register('tel_1')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Telephone 1</span>
                            </label>
                            <div className="error">{errors.tel_1?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="6666666"
                                    {...register('tel_2')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Telephone 2</span>
                            </label>
                            <div className="error">{errors.tel_2?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="+963999999"
                                    {...register('mobile_1')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Mobile 1</span>
                            </label>
                            <div className="error">{errors.mobile_1?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="+963999999"
                                    {...register('mobile_2')}
                                />
                                <span className='text-xl text-gray-600 text-opacity-80 absolute left-2 top-1/2 -translate-y-1/2 px-1 transition duration-200 input-text'>Mobile 2</span>
                            </label>
                            <div className="error">{errors.mobile_2?.message}</div>
                        </div>
                    </div>
                    <button
                        className="btn !px-12 mt-6 m-auto flex select-none"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div >
        </div >
    )
}

export default Form
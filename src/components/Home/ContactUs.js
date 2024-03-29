import React from 'react'
import { Controller, useController, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from 'zod'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const schema = z.object({
    first_name: string().min(2),
    last_name: string().min(2),
    email: string().email(),
    phone_number: z.string().regex(phoneRegex, 'Invalid Number!'),
})
function ContactUs({ ContactSection }) {
    const { register, control, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) });
    const { errors } = formState;

    // const { field } = useController({ name: "date", control });

    const onSubmit = (data) => {
        console.log(data.date);
    }
    return (
        <div ref={ContactSection} className='light-theme'>
            <div className='content pb-2 lg:pb-0 !min-h-full lg:min-h-screen'>
                <div className=' w-[85%] md:w-[95%] lg:w-[75%] xl:w-[65%] form h-full m-auto lg:pt-0'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 md:gap-8'>
                            <div className="field">
                                <label>
                                    <input
                                        type='text'
                                        placeholder="John"
                                        className='input'
                                        {...register('first_name')}
                                    />
                                    <span className='input-text'>First Name</span>
                                </label>
                                <div className="error">{errors.first_name?.message}</div>
                            </div>
                            <div className="field">
                                <label>
                                    <input
                                        type='text'
                                        placeholder="william"
                                        className='input'
                                        {...register('last_name')}
                                    />
                                    <span className='input-text'>Last Name</span>
                                </label>
                                <div className="error">{errors.last_name?.message}</div>
                            </div>
                            <div className="field">
                                <label>
                                    <input
                                        type='text'
                                        placeholder="example@gmail.com"
                                        className='input'
                                        {...register('email')}
                                    />
                                    <span className='input-text'>Your Email Address</span>
                                </label>
                                <div className="error">{errors.email?.message}</div>
                            </div>
                            <div className="field">
                                <label>
                                    <input
                                        type='text'
                                        placeholder="+95503231321"
                                        className='input'
                                        {...register('phone_number')}
                                    />
                                    <span className='input-text'>Phone Number</span>
                                </label>
                                <div className="error">{errors.phone_number?.message}</div>
                            </div>
                            <div className="field lg:col-span-2">
                                <label>
                                    <textarea
                                        type='text'
                                        placeholder="3 Avenue"
                                        className='input'
                                        rows={4}
                                        {...register('message')}
                                    />
                                    <span className='input-text'>Message ( Optional )</span>
                                </label>
                                <div className="error">{errors.message?.message}</div>
                            </div>
                        </div>
                        <button
                            className="btn !px-12 mt-4 m-auto flex select-none"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </form>
                    <p className='list_title py-3'>POLICIES</p>
                    <ul className='list'>
                        <li>Privacy policy</li>
                        <li>Information Security policy</li>
                        <li>Please send all data inquiries to dpo@bridge.rent</li>
                    </ul>
                    <p className='text-lg font-Gilroy-MediumItalic text-primary text-center mt-5'>© 2023 Bridge</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
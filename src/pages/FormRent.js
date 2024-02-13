import React, { useEffect, useRef, useState } from 'react'
import { Controller, useController, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { string, date, z, number } from 'zod'
import LogoImg from '../components/layout/LogoImg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const NumberRegex = new RegExp(
    /^[0-9]/
);
function FormRent() {
    const [validation, setValidation] = useState({
        number_of_pple: string().regex(NumberRegex, 'Invalid Number!'),
        occupation: string().min(2),
        total_annual: string().regex(NumberRegex, 'Invalid Number!'),
        moving_date: date(),
        requirement: string().min(2),
    })
    const schema = z.object(validation)
    const datePickerText = useRef()
    const { register, control, handleSubmit, formState, getValues, setValue } = useForm({ resolver: zodResolver(schema), defaultValues: { "occupation": "Student" } });
    const { errors } = formState;
    const [petField, setPetField] = useState(false)
    const { field } = useController({ name: "moving_date", control });
    const [occupation, setOccupation] = useState("Student")
    const onSubmit = (data) => {
        console.log(data);
    };
    const removeKeyObject = (obj, Present_key) => {
        return Object.keys(obj).filter(objKey =>
            objKey !== Present_key).reduce((newObj, key) => {
                newObj[key] = obj[key];
                return newObj;
            }, {}
            )
    }
    const handlePetCheck = (e) => {
        setPetField(e.target.checked)
        if (e.target.checked) {
            setValidation({
                ...validation, pet_breeds: string().min(2),
            })
        } else {
            setValue('pet_breeds', '')
            setValidation(removeKeyObject(validation, 'pet_breeds'))
        }
    };
    const handleSelect = (e) => {
        setOccupation(e.target.value)
        setValue("occupation", e.target.value)
    };
    const handleDateChange = (date) => {
        field.onChange(date)
        datePickerText.current.classList.remove("!text-active")
        datePickerText.current.classList.add("!text-white")
    }
    return (
        <div className='dark-theme min-h-screen max-h-full w-full overflow-auto py-5'>
            <div className='flex flex-col items-center'>
                <div className='logo-container !mt-0'>
                    <hr className='line-left !mt-0' />
                    <LogoImg />
                    <hr className='line-right !mt-0' />
                </div>
                <span className='company_name'>
                    Rent Request Form
                </span>
            </div>
            <div className='mx-auto w-[85%] md:w-[95%] lg:w-[80%] xl:w-[70%] form  py-10 md:pt-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-8'>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="John william"
                                    className='input'
                                    {...register('number_of_pple')}
                                />
                                <span className='input-text'>Number of people moving in</span>
                            </label>
                            <div className="error">{errors.number_of_pple?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <select
                                    defaultValue="Student"
                                    className='input'
                                    ref-setter={register('occupation')}
                                    onChange={handleSelect}
                                >
                                    <option>Working</option>
                                    <option>Student</option>
                                </select>
                                <span className='input-text'>Occupation</span>
                            </label>
                            <div className="error">{errors.occupation?.message}</div>
                        </div>
                        <div className={`field ${occupation == "Student" ? "hidden" : ""}`}>
                            <label>
                                <input
                                    type='text'
                                    placeholder="99,999"
                                    className="input"
                                    {...register('total_annual')}
                                />
                                <span className='input-text'>Total Annual Income of everyone</span>
                            </label>
                            <div className="error">{errors.total_annual?.message}</div>
                        </div>
                        <div className='md:col-span-2 space-y-2'>
                            <div className={`field ${occupation == "Working" ? "hidden" : ""}`}>
                                <label className='!w-fit cursor-pointer'>
                                    <input
                                        type='checkbox'
                                    />
                                    <span className='ms-2'>Do you have a UK Guarantors?</span>
                                </label>
                            </div>
                            <div className="field">
                                <label className='!w-fit cursor-pointer'>
                                    <input
                                        type='checkbox'
                                    />
                                    <span className='ms-2'>Are you able to pay 6 months upfront?</span>
                                </label>
                            </div>
                            <div className="field">
                                <label className='!w-fit cursor-pointer'>
                                    <input
                                        id='pets'
                                        type='checkbox'
                                        onChange={handlePetCheck}
                                    />
                                    <span className='ms-2'>Pets?</span>
                                </label>
                            </div>
                            {petField == true &&
                                <div className="field !mt-8">
                                    <label>
                                        <input
                                            type='text'
                                            placeholder="...."
                                            className="input"
                                            {...register('pet_breeds')}
                                        />
                                        <span className='input-text'>Pet breeds</span>
                                    </label>
                                    <div className="error">{errors.pet_breeds?.message}</div>
                                </div>
                            }
                        </div>
                        <div className="field">
                            <div className='relative'>
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date) => handleDateChange(date)}
                                    id='moving_date'
                                    placeholderText='1/1/2000'
                                    shouldCloseOnSelect={true}
                                    className='input'
                                    onFocus={() => !field.value && datePickerText.current.classList.add("!text-active", "!transform", "!-translate-y-11", "!-translate-x-2", "!scale-100", "!text-base")}
                                    onBlur={() => !field.value && datePickerText.current.classList.remove("!text-active", "!transform", "!-translate-y-11", "!-translate-x-2", "!scale-100", "!text-base")} />
                                <label htmlFor='moving_date' className='!static'>
                                    <span ref={datePickerText} className='input-text'>Earliest moving date</span>
                                </label>
                            </div>
                            <div className="error">{errors.moving_date?.message}</div>
                        </div>
                        <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="..."
                                    className='input'
                                    {...register('requirement')}
                                />
                                <span className='input-text'>Do you have any specific requirements?</span>
                            </label>
                            <div className="error">{errors.requirement?.message}</div>
                        </div>
                        {/* <div className="field">
                            <label>
                                <input
                                    type='text'
                                    placeholder="6666666"
                                    {...register('tel_1')}
                                />
                                <span className='input-text'>Telephone 1</span>
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
                                <span className='input-text'>Telephone 2</span>
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
                                <span className='input-text'>Mobile 1</span>
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
                                <span className='input-text'>Mobile 2</span>
                            </label>
                            <div className="error">{errors.mobile_2?.message}</div>
                        </div> */}
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

export default FormRent
import React from 'react'
import Feature from '../Features/Feature'
import feature_1 from '../../assets/images/features/feature_1.png'
import feature_2 from '../../assets/images/features/feature_2.png'
import feature_3 from '../../assets/images/features/feature_3.png'

function Features() {
    return (
        <div className='content'>
            <div className='grid grid-cols-1 lg:grid-cols-3 m-auto gap-28 pt-48 pb-10 lg:pb-0 lg:pt-32 '>
                <Feature img={feature_1} title={"Save Time"} content={"Transform the mundane tasks of applicant qualification and viewing admin with Bridge's intelligent AI technology."} />
                <Feature img={feature_2} title={"Never miss a lead"} content={"Bridge: Unify applicant management. Unlock insights into preferences, behavior, and feedback. Nurture prospects into loyal buyers or tenants"} />
                <Feature img={feature_3} title={"Get updates in your CRM"} content={"Bridge takes care of scheduling viewing appointments which will appear in your Alto diary the very next day."} />
            </div>
        </div>
    )
}

export default Features
import React from 'react'
import Feature from '../Features/Feature'
import feature_1 from '../../assets/images/features/feature_1.png'
import feature_2 from '../../assets/images/features/feature_2.png'
import feature_3 from '../../assets/images/features/feature_3.png'

function Features({ featureSection }) {
    return (
        <div ref={featureSection} id='features' className='content'>
            <div className='grid grid-cols-1 lg:grid-cols-3 m-auto gap-24 pt-48 pb-10 lg:pb-0 lg:pt-40 '>
                <Feature img={feature_1} title={"SAVE TIME"} content={"Transform the mundane tasks of applicant qualification and viewing admin with Bridge's intelligent AI technology."} />
                <Feature img={feature_2} title={"NEVER MISS A LEAD"} content={"Bridge: Unify applicant management. Unlock insights into preferences, behavior, and feedback. Nurture prospects into loyal buyers or tenants"} />
                <Feature img={feature_3} title={"GET UPDATES IN YOUR CRM"} content={"Bridge takes care of scheduling viewing appointments which will appear in your Alto diary the very next day."} />
            </div>
        </div>
    )
}

export default Features
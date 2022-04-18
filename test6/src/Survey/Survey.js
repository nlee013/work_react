import React, {useState} from 'react';
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {

    const [form, setForm] = useState({

        name:'',
        age:'',
        addr:'',
        tel:'',
        job:'',
        gender:'',
        hobby:''
    })

    const {name, age, addr, tel, job, email, gender, hobby} = form

    const [step, setStep] = useState(1)//초기값 이따가 수정예정

    const onText = (evt) => {

        //alert("test");
        const {value, name} = evt.target
        setForm({
            ...form,
            [name]:value
        })

    }

    const onNext = () => {
        
        setStep(step + 1)

    }
    const onPrev = () => {
        
        setStep(step - 1)

    }
    return (
        <div className='wrap'>
            {
                step==1 && 
                <SurveyStep1 onText={onText} name={name} age={age}
                addr={addr} tel={tel} onNext={onNext}/>
            }
            {
                step==2 && 
                <SurveyStep2 onText={onText} job={job} email={email}
                gender={gender} hobby={hobby} onNext={onNext} onPrev={onPrev}/>
            }
            {
                step==3 && 
                <SurveyStep3 form={form} onNext={onNext}/>
            }
            {
                step==4 && 
                <SurveyStep4 name={name} onPrev={onPrev}/>
            }   
            
            
        </div>
    );
};

export default Survey;
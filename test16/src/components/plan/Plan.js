import React, { useEffect, useRef, useState } from 'react';
import GlobalStyle from '../styled/Global'
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
import dataList from './data';

const Plan = () => {

    //const no = useRef(dataList.length + 1)

    //const [plans, setPlans] = useState(dataList)

    const [plans,setPlans] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/plans')
        .then(res=>res.json())
        .then(res=>setPlans(res))
    }, [])

    const onDel = (id) => {
        fetch(`http://localhost:4000/plans/${id}`, {
            method:'delete'
        })
        //화면삭제
        setPlans(plans.filter(plan=>plan.id !== id))
    }

    const fetchPlan = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json
        return data
    }

    const onToggle = async(id) => {
        //json data를 꺼내와서 수정할 예정
        const togglePlan = await fetchPlan(id)
        const updatePlan = {
                                ...togglePlan,
                                done:!togglePlan.done
                            }
        //수정한 데이터를 다시 넣기
        const res = await fetch(`http://localhost:4000/plans/${id}`,{
            method:'put',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updatePlan)
        })
        // setPlans(plans.map(plan=>plan.id === id ? {
        //     ...plan,
        //     done:!plan.done
        // }: plan))

        //화면 출력
        getToggle()
    }

    const getToggle = () => {
        const config = {method:'get'}
        fetch('http://localhost:4000/plans/', config)
        .then(res=>res.json())
        .then(res=>res.setPlans(res))
    }
    const onAdd = (form) => {
        //form.id = no.current++
        fetch('http://localhost:4000/plans',{
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(res=>setPlans([
            ...plans,
            res
        ]))
    }
    return (
        <div>
            <GlobalStyle/>
            <PlanAdd onAdd={onAdd}/>
            <PlanList plans={plans} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Plan;

/*

*/
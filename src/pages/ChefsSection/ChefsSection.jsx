import React, { useEffect, useState } from 'react';
import ChefsCart from './ChefsCart';

const ChefsSection = () => {


    const [chefDatas, setCheData] = useState([])

    const [loadding, useLoadding] = useState(true)

    useEffect(() => {
        fetch('https://food-cafe-server-site-rh-abir.vercel.app/alldata')
        .then(res => res.json())
        .then(data => setCheData(data))
        useLoadding(false)
    } ,[])


    if(loadding){
        return <progress className="progress w-56"></progress>
    }

    console.log(chefDatas)
    return (
        <div className='md:px-24'>
            <h2 className='text-center text-5xl my-20'>Our best Chefs</h2>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    chefDatas?.map(chefdata => <ChefsCart
                    key={chefdata.id}
                    chefdata = {chefdata}
                    ></ChefsCart>)
                }
            </div>
        </div>
    );
};

export default ChefsSection;
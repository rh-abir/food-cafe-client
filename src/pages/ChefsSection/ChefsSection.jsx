import React, { useEffect, useState } from 'react';
import ChefsCart from './ChefsCart';

const ChefsSection = () => {


    const [chefDatas, setCheData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alldata')
        .then(res => res.json())
        .then(data => setCheData(data))
    } ,[])

    

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
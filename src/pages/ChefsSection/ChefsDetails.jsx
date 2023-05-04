import React from 'react';
import { useLoaderData} from 'react-router-dom';

const ChefsDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData)
    return (
        <div>
            <h2>This is chfe detals page</h2>
        </div>
    );
};

export default ChefsDetails;
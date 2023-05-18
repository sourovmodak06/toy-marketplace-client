import React from 'react';
import useTitle from '../shared/hooks/useTitle';

const MyToys = () => {
    useTitle('My Toy')
    return (
        <div>
            <h2>My toy page ...</h2>
        </div>
    );
};

export default MyToys;
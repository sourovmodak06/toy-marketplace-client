import React from 'react';
import { Link } from 'react-router-dom';

const TableInfo = ({toy}) => {
    return (
        <>
            <tr>
                <td>
                  <h2>{toy.sellerName}</h2>
                </td>
                <td>
                  <h2>{toy.toyName}</h2>
                </td>
                <td>
                  <h2>{toy.toyCategory}</h2>
                </td>
                <td>
                  <h2>{toy.price}</h2>
                </td>
                <td>
                  <h2>{toy.quantity}</h2>
                </td>
                <td>
                  <Link to={`/allToys/${toy._id}`} className="btn">View Details</Link>
                </td>
              </tr>
        </>
    );
};

export default TableInfo;
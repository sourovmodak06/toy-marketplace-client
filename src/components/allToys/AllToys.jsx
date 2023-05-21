import React, { useEffect, useState } from "react";
import useTitle from "../shared/hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import TableInfo from "./TableInfo";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const AllToys = () => {
  useTitle("All Toy");
  const toys = useLoaderData();

  const [toyData, setToyData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  useEffect(() => {
    setToyData(toys);
    setSearchApiData(toys);
  },[])
  const handleFilter = (e) => {
    if (e.target.value == '') {
      setToyData(searchApiData)
    }else{
      const filterResult = searchApiData.filter(item => item.toyName.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setToyData(filterResult);
      }else{
        setToyData([{"toyName" : "No Data Found"}])
      }
    }
    setFilterValue(e.target.value);
  }

  const [currentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = toyData.slice(firstIndex,lastIndex);
  const npage = Math.ceil(toyData.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);


  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  return (
    <div className="px-10">

      <div className="flex justify-center py-10">
        <input type="search" className="input input-bordered" placeholder="Enter Toy Name..." value={filterValue} onInput={(e) => handleFilter(e)} />
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {records.map((toy) => (
              <TableInfo key={toy._id} toy={toy} ></TableInfo>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-2">
        <ul className="flex items-center gap-4">
          <li>
            <button className="btn" onClick={perPage}><FaCaretLeft></FaCaretLeft></button>
          </li>
          {
            number.map((n,i) => (
              <li key={i} className={`${currentPage === n ? 'bg-black text-white p-2 rounded-full' : ''}`}>
                <button onClick={() => changeCPage(n)}>{n}</button>
              </li>
            ))
          }
          <li>
            <button className="btn" onClick={nextPage}><FaCaretRight></FaCaretRight></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllToys;

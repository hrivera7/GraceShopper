import React from "react";
import { Dropdown } from "semantic-ui-react";
import {getProducts} from '../api'

export default function FilterProducts({ products, setProducts, setFilteredList, list }) {
console.log('this is products.length: ', products)
    
    

    const filterProducts = (selectedDepartment) => {    
    const newerList = products.filter(product => product.department === selectedDepartment);
    console.log('the selected department: ', selectedDepartment)
    console.log('the newerList: ', newerList)

    setFilteredList(newerList);
    }



  //grabs the products state. filters the array of objects and returns only the objects whose department matches value of the mapped item with no duplicates
  return (
    <Dropdown id="header-filter" placeholder="Filter by category">
      <Dropdown.Menu>
          <Dropdown.Item content='All Departments' onClick={async () => {
              setFilteredList([])
          }}/>
        {list.map((department, index) => (
          <Dropdown.Item key={`departmentId-${index}`} content={department} onClick={()=> {
              console.log('the department: ', department)
              setFilteredList([])
              filterProducts(department)
            }}/>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

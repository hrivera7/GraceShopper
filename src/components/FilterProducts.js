import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function FilterProducts({ products, setFilteredList, list }) {

    
    const filterProducts = (selectedDepartment) => {    
    const newerList = products.filter(product => product.department === selectedDepartment);
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

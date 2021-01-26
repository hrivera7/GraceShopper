import React from 'react'
import {Dropdown} from  'semantic-ui-react'

export default function FilterProducts({products}) {

    // const friendOptions = [
    //     {
    //       key: 'Jenny Hess',
    //       text: 'Jenny Hess',
    //       value: 'Jenny Hess',    
    //       onClick: function(){console.log(this.text)}    
    //     }
    //   ]
// let newList = [...products]


    const categoryList = [{key: 'value'}]

// const categoryList = products.map((product) => {
//     const {department, id} = product
// return (
//     {key: `${id}`, 
//     text: `${department}`,
//     value: `${department}`,
//     onClick: function(){
        
        
//     }
// }
// )
// })
//grabs the products state. filters the array of objects and returns only the objects whose department matches value of the mapped item with no duplicates
    return (
        <Dropdown
        id='header-filter'
        placeholder='Filter by category'
        fluid
        selection
        options={categoryList}
        
      />
    )
}

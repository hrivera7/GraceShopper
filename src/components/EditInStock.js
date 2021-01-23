import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default function EditInStock({productDetails, setProductDetails, inStock, setInStock}) {
   
    return (
      
      <Checkbox  name='inStock' label='In stock?' onChange={(event) => {
          setInStock(!inStock)
          console.log('instock is : ', inStock)
         // console.log('is it the opposite: ', inStock)
          setProductDetails({...productDetails, [event.target.name]: event.target.checked})
          console.log('the product details inStock: ', productDetails.inStock)
      }}/>  
    )
}

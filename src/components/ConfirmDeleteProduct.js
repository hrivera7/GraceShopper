import React, {useState} from 'react'
import {Button, Confirm} from 'semantic-ui-react'
import {deleteProduct, getProducts} from '../api'

export default function ConfirmDeleteProduct({id, name, setProducts}) {
   const [open, setOpen] = useState(false)

    const  show = () => setOpen( true )
   const handleConfirm = () => setOpen(false )
    const handleCancel = () => setOpen(false )

  return (
    <div>
      <Button onClick={show} color='red' icon='remove circle' />
      <Confirm
        open={open}
        content={`Are you sure you want to delete ${name}?`}
        cancelButton='Never mind'
        confirmButton="Let's do it"
        onCancel={handleCancel}
        onConfirm={async () => {
          await deleteProduct(id) 
          const {allProducts} = await getProducts()
          setProducts(allProducts)
          handleConfirm()
        }}
      />
    </div>
      
    )
}

import React, {useState} from 'react'
import { Button, Input,  Modal } from 'semantic-ui-react'
import {updateProduct} from '../api'

//import EditProductCard from './EditProductCard'

export default function EditProductModal({id, name, products, setProducts}) {
   
    const [open, setOpen] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: '',
        description : '',
        price: ''
    })

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => {setOpen(true)}}
        open={open}
        trigger={<Button icon='edit' />}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content >
          <Modal.Description>
          <Input
          autoComplete='off'
          style={{ width: "50%" }}
          name="name"
          value={productDetails.name}
          onChange={((event) => {
              setProductDetails({...productDetails, [event.target.name]: event.target.value})
          })}
          placeholder="Edit the product title..."
        />
          <br />
          <Input
          autoComplete='off'
          style={{ width: "50%" }}
          name="description"
          value={productDetails.description}
          onChange={((event) => {
              setProductDetails({...productDetails, [event.target.name]: event.target.value})
          })}
          placeholder="Edit the product description..."
        />
            <br />
          <Input
          autoComplete='off'
          style={{ width: "50%" }}
          name="price"
          value={productDetails.price}
          onChange={((event) => {
              setProductDetails({...productDetails, [event.target.name]: event.target.value})
          })}
          placeholder="Edit the product price..."
        />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' icon='cancel' onClick={() => setOpen(false)} />
        
          <Button icon='checkmark' onClick={async () => {
              const updatedProducts = await updateProduct(productDetails.name, productDetails.description, productDetails.price, id)
              updatedProducts.sort((a, b) => a.id - b.id);
              setProducts(updatedProducts)
              setOpen(false)
          }}/>
        </Modal.Actions>
      </Modal>
    )
}

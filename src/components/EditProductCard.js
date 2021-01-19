import React from 'react'
import {Button} from 'semantic-ui-react'

export default function EditProductCard({id}) {
    return (
        <Button id='editProductButton' icon='edit' onClick={() => {
            console.log('product id is: ', id)
        }} />
    )
}

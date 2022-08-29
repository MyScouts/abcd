import React from 'react'
import { Button, Row, Spinner } from 'react-bootstrap'

const ButtonLoading = ({ name, isLoading, ...props }) => {
    return (
        <Button {...props} disabled={isLoading}>
            <Row className='align-items-center justify-content-between px-4'>
                {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : <div></div>}
                {name}
                <div></div>
            </Row>
        </Button>
    )
}

export default ButtonLoading
import React, { Fragment, useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import geo from './geo.json'
import data from './data.json'
import { IsValidJSONString } from './lib'
import { Button, ButtonGroup } from '@material-ui/core';

const ValidateJSON = () => {
    // const [dataSet, setData] = useState(data)

    const dataItems = data.map(item => (
        <ListGroupItem key={item.id}>
            <ListGroupItemHeading>Country code: {item.countrycode}</ListGroupItemHeading>
            <ListGroupItemText>
                {item.meta}
            </ListGroupItemText>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button 
                variant="contained" 
                color="primary"
                onClick={()=> {
                    const results = IsValidJSONString(JSON.stringify(item))
                        if(results) {
                            alert('Valid JSON')
                        } else {
                            alert('Invalid JSON object')
                        }
                }}
                >Validate
            </Button>
            <Button variant="contained" disabled>asn: {item.asn}</Button>
            
            </ButtonGroup>
        </ListGroupItem>
    ))

    return <Fragment>
    <br/>
        <h3>JSON validator</h3>
        <hr/>
        <ListGroup>
            {dataItems}
        </ListGroup>
    </Fragment>
}

export default ValidateJSON;
import React, { Fragment, useState } from 'react';
import Navigate from './Navigate';
import Sort from './Sort';
import Union from './Union';
import ValidateJSON from './ValidateJSON';


const MainLayout = () => {

    const [selectedKey, setSlectedKey] = useState('home');

    return (
        <Fragment>
            <Navigate change={setSlectedKey} />
            {(() => {
                switch(selectedKey) {
                    case 'sort':
                        return <Sort />
                    case 'union':
                        return <Union />
                    default:
                        return <ValidateJSON />
                }
            })()}
        </Fragment>
    )
}

export default MainLayout;
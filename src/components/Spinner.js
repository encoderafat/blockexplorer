import React from 'react';
import { Loader, Dimmer} from 'semantic-ui-react';

const Spinner = () => {
    return (
        <Dimmer active>
            <Loader>Loading will take a few seconds.</Loader>
        </Dimmer>
    )
}

export default Spinner;
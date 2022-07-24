import { memo } from 'react';

import PropTypes from 'prop-types';

export const CountdownNumber = memo(({ label, number }) => {
    return (
        <div className='countdown__card'>
            <p className='countdown__card-label'>{ label }</p>
            <p className='countdown__card-number'>{ number }</p>
        </div>
    )
});

CountdownNumber.propTypes = {
    label: PropTypes.string,
    number: PropTypes.number
}

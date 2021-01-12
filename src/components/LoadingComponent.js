import React from 'react';

export const Loading = () => {
    //fa-pulse makes the icon spin
    return(
        <div className = "col-12">
            <span className = "fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};
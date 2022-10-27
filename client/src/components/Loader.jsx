import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div>
            {/* <h2>Loader</h2> */}
            <div className='oberlay'></div>
            <div className='absolute w-1/4 top-50 p-3 text-center left-50 bg-orange border border-gray-400'>
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>Loading</div>
            </div>

        </div>
    )
}

export default Loader

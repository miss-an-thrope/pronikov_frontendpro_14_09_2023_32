import React from 'react';
import '../../assets/scss/components/_aside.scss';

class Aside extends React.Component {
    constructor () {
        super();
    }
    
    render () {

        return (
            <>
                <aside className='aside'>
                        <nav className='aside__menu'>
                            <ul className='aside__list'>
                                <li className='aside__link'>
                                </li>
                                <li className='aside__link'>
                                </li>
                                <li className='aside__link'>
                                </li>
                                <li className='aside__link'>
                                </li>
                                <li className='aside__link'>
                                </li>
                            </ul>
                        </nav>
                </aside>
            </>
        )
    }
}

export default Aside;
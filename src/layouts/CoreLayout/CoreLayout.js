import React from 'react'
import Header from '../../components/Header'
import LeftNav from '../../components/LeftNav'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
    <div className='container text-center'>
        <LeftNav />

        <div className='core-layout__viewport'>
            {children}
        </div>
    </div>
)

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default CoreLayout

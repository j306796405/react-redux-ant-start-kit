import React from 'react'
import './HomeView.scss'
import { Button } from 'antd';

export const HomeView = () => (
    <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
    </div>
)

export default HomeView

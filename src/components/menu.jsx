import React from 'react'
import { Link } from 'react-router-dom';
export default class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Link to="/Home" style={{ color: 'black' }}><div>主页</div></Link>
                <Link to="/Stage" style={{ color: 'black' }}><div>我的主场</div></Link>
                <Link to="/Daily" style={{ color: 'black' }}><div>日常</div></Link>
                <Link to="/Share" style={{ color: 'black' }}><div>技术分享</div></Link>
                <Link to="/About" style={{ color: 'black' }}><div>关于我们</div></Link>
            </div>
        )
    }
}


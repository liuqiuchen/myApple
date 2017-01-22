// 普通组件
import React from 'react';
import '../css/appItem';

class AppItem extends React.Component {
    render () {
        return (
            <div className="appleItem">
                <div className="apple"><img width="35" height="35" src="./images/apple.jpg" alt=""/></div>
                <div className="info">
                    <div className="info_wrapper">
                        <div className="name">红苹果 - 1号</div>
                        <div className="weight">265克</div>
                    </div>
                </div>
                <div className="btn-div"><button>吃掉</button></div>
            </div>
        )
    }
}

export default AppItem;








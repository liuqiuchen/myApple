// 普通组件
import React from 'react';
import '../css/appItem';

class AppItem extends React.Component {
    render () {
        let { state, actions } =this.props;

        /**
         * 这个区域是 mock 数据区，也作为组件文档，请写清楚
         * 在组件发布时，请注释掉，提高性能
         */
        let mockState = {
            id: 1,
            weight: 256,
            isEaten: false
        };

        let mockActions = {
            eatApple: id => console.log('eatApple ', id)
        };

        // 启动模拟数据
        if(state == undefined) state = mockState;
        if(actions == undefined) actions = mockActions;

        return (
            <div className="appleItem">
                <div className="apple"><img width="35" height="35" src="./images/apple.jpg" alt=""/></div>
                <div className="info">
                    <div className="info_wrapper">
                        <div className="name">红苹果 - {state.id}号</div>
                        <div className="weight">{state.weight}克</div>
                    </div>
                </div>
                <div className="btn-div"><button onClick={() => actions.eatApple(state.id)}>吃掉</button></div>
            </div>
        )
    }
}

export default AppItem;








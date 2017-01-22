import React from 'react';
import { connect } from 'react-redux';
import AppItem from '../components/AppItem';
import '../css/appleBasket.scss';

class AppleBasket extends React.Component {
  
  render(){
    let { state } = this.props;

    let mockState = {
        isPicking: false,
        newAppleId: 1,
        apples: [
            {
                id: 1,
                weight: 235,
                isEaten: true
            },
            {
                id: 2,
                weight: 256,
                isEaten: false
            }
        ]
    };
      /**
       * 普通显示组件的state格式由组件开发人员自己约定即可，
       * 并在mockState 区域给出例子。当别人要使用你的显示组件时，
       * 必须根据你规定的格式传入state数据。
       * 在组件里面，我们一般会实现如下这样一个自动切换器，
       * 当组件的使用者在使用该组件时没有传入state, 就会显示内部的模拟state，为使用者带来预览效果。
       */
     if(state == undefined) {
         // 模拟数据
         state = mockState;
     }

    // 对state做显示级别的转化
    let stats = {
        appleNow: {
            quantity: 0,
            weight: 0
        },
        appleEaten: {
            quantity: 0,
            weight: 0
        }
    };

    let notEaten = [];
    state.apples.map(apple => {
        let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
        stats[selector].quantity++;
        stats[selector].weight += apple.weight;

        if(apple.isEaten == false) {
            notEaten.push(apple);
        }
    });

    let basketTipText = '';
    if(notEaten.length == 0) {
        basketTipText = <div className="appleList">
                            <div className="empty-tip">苹果篮子空空如也</div>
                        </div>;
    }

    return (
        <div className="appleBusket">
            <div className="title">苹果篮子</div>

            <div className="stats">
                <div className="section">
                    <div className="head">当前</div>
                    <div className="content">{stats.appleNow.quantity}个苹果，{stats.appleNow.weight}克</div>
                </div>
                <div className="section">
                    <div className="head">已吃掉</div>
                    <div className="content">{stats.appleEaten.quantity}个苹果，{stats.appleEaten.weight}克</div>
                </div>
            </div>

            <AppItem />

            {basketTipText}

            <div className="btn-div">
                <button>摘苹果</button>
            </div>

        </div>
    );
  }

}

export default connect()(AppleBasket);
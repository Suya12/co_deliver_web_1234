import { useState } from 'react'
import './style.css'

export default function Deliver_process() {
    const [order] = useState({
        time: 30,
        store: { name: '맥도날드' },
        menu: { name: '빅맥 세트' },
        splitType: '나눠먹기',
        price: '6,500원'
    })

    return (
        <div className="order-box">
            <h2 className="title">주문 현황</h2>

            <div className="row">
                <span className="arrival-time">{order.time}분 후</span>
            </div>

            <div className="row">
                <span className="arrival-time">도착예정</span>
            </div>

            <div className="info-box">
                <h2 className="title">주문 내역</h2>
                <div className="row">
                    <span>가게</span>
                    <span>{order.store.name}</span>
                </div>
                <div className="row">
                    <span>메뉴</span>
                    <span>{order.menu.name}</span>
                </div>
                <div className="row">
                    <span>따로먹기 / 나눠먹기</span>
                    <span>{order.splitType}</span>
                </div>
                <div className="row">
                    <span>결제금액</span>
                    <span>{order.price}</span>
                </div>
            </div>
        </div>
    )
}
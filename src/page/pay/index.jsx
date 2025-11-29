import { useState } from 'react'
import './style.css'

export default function Pay() {

    const [store] = useState({
        name: '샘플 가게',
        category: '한식',
        minimum_order: 10000,
        delivery_fee: 3000
    })

    const [menus] = useState([
        { id: 1, name: '메뉴 1', price: 8000 },
        { id: 2, name: '메뉴 2', price: 10000 },
        { id: 3, name: '메뉴 3', price: 12000 }
    ])

    const [selectedMenus, setSelectedMenus] = useState([])

    const handleMenuToggle = (menuId) => {
        setSelectedMenus(prev =>
            prev.includes(menuId)
                ? prev.filter(id => id !== menuId)
                : [...prev, menuId]
        )
    }

    const handleSubmit = () => {
        console.log('선택된 메뉴:', selectedMenus)
    }

    return (
        <div className="order-box">
            <h2 className="title">메뉴 선택 및 결제</h2>

            <div className="info-box">
                <div className="row">
                    <span>가게</span>
                    <span>{store.name}</span>
                </div>
                <div className="row">
                    <span>카테고리</span>
                    <span>{store.category}</span>
                </div>
                <div className="row">
                    <span>최소주문</span>
                    <span>{store.minimum_order}원</span>
                </div>
                <div className="row">
                    <span>배달팁</span>
                    <span>{store.delivery_fee}원</span>
                </div>
            </div>

            <label className="label">메뉴</label>

            <div className="menu-list">
                {menus.map(menu => (
                    <div key={menu.id} className="menu-item">
                        <div>
                            <div className="menu-name">{menu.name}</div>
                            <div className="menu-price">{menu.price}원</div>
                        </div>
                        <input
                            type="checkbox"
                            className="menu-check"
                            checked={selectedMenus.includes(menu.id)}
                            onChange={() => handleMenuToggle(menu.id)}
                        />
                    </div>
                ))}
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
                결제하기
            </button>
        </div>
    )
}

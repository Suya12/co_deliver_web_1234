import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

// 더미 데이터 - 실제로는 서버에서 가져올 데이터
const storeData = {
    name: '맥도날드',
    category: '기타',
    minimumOrder: '15,000',
    deliveryFee: '3,000',
};

const menuData = [
    { id: 1, name: '빅맥 세트', price: '6,500' },
    { id: 2, name: '맥치킨 세트', price: '6,000' },
    { id: 3, name: '맥스파이시 상하이 버거 세트', price: '6,800' },
];

export default function Co_order_create() {
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [eatType, setEatType] = useState('share');
    const [selectedMenus, setSelectedMenus] = useState([]);

    const handleMenuToggle = (menuId) => {
        setSelectedMenus(prev =>
            prev.includes(menuId)
                ? prev.filter(id => id !== menuId)
                : [...prev, menuId]
        );
    };

    const handleCreateOrder = () => {
        console.log({
            store: storeData,
            address,
            eatType,
            selectedMenus,
        });
        navigate('/co_deliver_list');
    };

    return (
        <div className="order-box">
            <h2 className="title">공동 주문 생성</h2>

            <div className="info-box">
                <div className="row">
                    <span>가게</span>
                    <span>{storeData.name}</span>
                </div>
                <div className="row">
                    <span>카테고리</span>
                    <span>{storeData.category}</span>
                </div>
                <div className="row">
                    <span>최소주문</span>
                    <span>{storeData.minimumOrder}원</span>
                </div>
                <div className="row">
                    <span>배달팁</span>
                    <span>{storeData.deliveryFee}원</span>
                </div>
            </div>

            <label className="label">배달 받을 위치</label>
            <input
                type="text"
                className="input-field"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="배달 받을 위치를 입력하세요"
            />

            <label className="label">함께 먹기 방식</label>
            <div className="radio-group">
                <label>
                    <input
                        type="radio"
                        name="type"
                        checked={eatType === 'share'}
                        onChange={() => setEatType('share')}
                    /> 나눠먹기
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        checked={eatType === 'individual'}
                        onChange={() => setEatType('individual')}
                    /> 각자 먹기
                </label>
            </div>

            <label className="label">대표 메뉴(선택 사항)</label>
            <div className="menu-list">
                {menuData.map(menu => (
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

            <button className="submit-btn" onClick={handleCreateOrder}>
                공동 주문 생성하기
            </button>
        </div>
    )
}

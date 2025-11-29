import './style.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

// 더미 데이터 - 실제로는 서버에서 가져올 데이터
const allOrders = [
    { id: 1, store: '맥도날드', minOrder: '15,000원', location: '교회 교육관 3층', type: 'direct', category: '기타' },
    { id: 2, store: '버거킹', minOrder: '18,000원', location: '○○아파트 101동', type: 'share', category: '기타' },
    { id: 3, store: '맘스터치', minOrder: '16,000원', location: '학교 정문 앞', type: 'direct', category: '기타' },
    { id: 4, store: '짜장면집', minOrder: '12,000원', location: '학교 후문', type: 'share', category: '중식' },
    { id: 5, store: '양자강', minOrder: '15,000원', location: '기숙사 앞', type: 'direct', category: '중식' },
    { id: 6, store: 'BBQ치킨', minOrder: '18,000원', location: '도서관 앞', type: 'share', category: '치킨' },
    { id: 7, store: '교촌치킨', minOrder: '17,000원', location: '학생회관', type: 'direct', category: '치킨' },
    { id: 8, store: '김밥천국', minOrder: '10,000원', location: '정문 앞', type: 'share', category: '한식' },
    { id: 9, store: '한솥도시락', minOrder: '8,000원', location: '후문 앞', type: 'direct', category: '한식' },
    { id: 10, store: '스시로', minOrder: '20,000원', location: '기숙사', type: 'share', category: '일식' },
    { id: 11, store: '도미노피자', minOrder: '18,000원', location: '학생회관', type: 'direct', category: '피자' },
    { id: 12, store: '피자헛', minOrder: '20,000원', location: '정문 앞', type: 'share', category: '피자' },
];


export default function Co_deliver_list() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    // 카테고리가 있으면 필터링, 없으면 전체 표시
    const filteredOrders = category
        ? allOrders.filter(order => order.category === category)
        : allOrders;

    const handleCreateOrder = () => {
        navigate('/co_order_create');
    };

    const handleBack = () => {
        navigate('/category');
    };

    return (
        <div className="app">
            <header className="header">
                <div className="back" onClick={handleBack}>&lt;</div>
                <div className="header-title">공동 주문 / {category || '전체'}</div>
            </header>

            <main className="content">
                <div className="order-list">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map(order => (
                            <div className="order-card" key={order.id}>
                                <div className="order-info">
                                    <div className="order-store">{order.store}</div>
                                    <div className="order-meta">최소주문 {order.minOrder} · 위치: {order.location}</div>
                                </div>
                                <div className={`order-tag ${order.type === 'direct' ? 'tag-direct' : 'tag-share'}`}>
                                    {order.type === 'direct' ? '바로먹기' : '나눠먹기'}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="empty-message">해당 카테고리의 공동주문이 없습니다.</p>
                    )}
                </div>
            </main>

            <footer className="footer">
                <button className="btn-primary" onClick={handleCreateOrder}>공동 주문 요청하기</button>
            </footer>
        </div>
    )
}

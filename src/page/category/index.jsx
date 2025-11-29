import './style.css'
import { useNavigate } from 'react-router-dom';

const categories = [
    { emoji: '🍜', label: '중식' },
    { emoji: '🍗', label: '치킨' },
    { emoji: '🍚', label: '한식' },
    { emoji: '🍣', label: '일식' },
    { emoji: '🍕', label: '피자' },
    { emoji: '🍱', label: '기타' },
];

function CategoryCard({ emoji, label, onClick }) {
    return (
        <button className="card" onClick={onClick}>
            <div className="emoji">{emoji}</div>
            <div className="label">{label}</div>
        </button>
    );
}

export default function Category() {
    const navigate = useNavigate();

    const handleCreateOrder = () => {
        navigate('/co_deliver_list');
    };

    const handleCategoryClick = (category) => {
        navigate(`/co_deliver_list?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="container">
            <h2 className="title">공동 배달 카테고리 리스트</h2>

            <div className="grid">
                {categories.map((cat) => (
                    <CategoryCard
                        key={cat.label}
                        emoji={cat.emoji}
                        label={cat.label}
                        onClick={() => handleCategoryClick(cat.label)}
                    />
                ))}
            </div>

            <button className="bottom-btn" onClick={handleCreateOrder}>새로운 공동 주문 만들기 &gt;</button>
        </div>
    );
}


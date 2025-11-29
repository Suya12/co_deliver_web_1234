import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Store_select() {
    const navigate = useNavigate();

    const handleStoreClick = () => {
        navigate('/page2');
    };

    return (

        <div className="app">
            <header className="header">
                <div className="back">&lt;</div>
                <div className="header-title">가게 선택</div>
            </header>

            <main className="content">
                <div className="category-text">
                    선택된 카테고리: <span>햄버거 (더미 값)</span>
                </div>

                <div className="store-list">
                    <div className="store-card" onClick={handleStoreClick} style={{ cursor: 'pointer' }}>
                        <div className="store-info">
                            <div className="store-name">맥도날드</div>
                            <div className="store-meta">
                                최소주문 15,000원 · 배달팁 3,000원 · 35~45분
                            </div>
                        </div>
                    </div>

                    <div className="store-card" onClick={handleStoreClick} style={{ cursor: 'pointer' }}>
                        <div className="store-info">
                            <div className="store-name">버거킹</div>
                            <div className="store-meta">
                                최소주문 18,000원 · 배달팁 3,000원 · 40~50분
                            </div>
                        </div>
                    </div>

                    <div className="store-card" onClick={handleStoreClick} style={{ cursor: 'pointer' }}>
                        <div className="store-info">
                            <div className="store-name">맘스터치</div>
                            <div className="store-meta">
                                최소주문 16,000원 · 배달팁 2,500원 · 30~40분
                            </div>
                        </div>
                    </div>
                </div>

                <p className="notice-text">
                    ※ 실제 3번 페이지에서 카테고리를 선택하고 들어온다고 가정했습니다.
                </p>
            </main>
        </div>
    )
}
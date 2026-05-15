import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

// [신규 생성] 커뮤니티 게시판 - 로그인 사용자 전용 (ProtectedRoute로 보호됨)
// 현재는 목업 데이터로 구성, 추후 백엔드 게시판 API 연동 필요
const BoardPage = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('전체');
    const tabs = ['전체', '식단 공유', '운동 후기', '질문/답변'];

    const mockPosts = [
        { id: 1, category: '식단 공유', title: '다이어트 3개월 차 - 주간 식단 공유합니다', author: '김헬스', date: '2026.04.30', likes: 24, comments: 8 },
        { id: 2, category: '운동 후기', title: '스쿼트 자세 교정 후 무릎 통증이 사라졌어요!', author: '박운동', date: '2026.04.29', likes: 31, comments: 12 },
        { id: 3, category: '질문/답변', title: '단백질 보충제 먹는 타이밍이 언제가 좋을까요?', author: '이질문', date: '2026.04.28', likes: 5, comments: 17 },
        { id: 4, category: '식단 공유', title: '탄수화물 줄이면서도 포만감 유지하는 방법', author: '최식단', date: '2026.04.27', likes: 45, comments: 21 },
        { id: 5, category: '운동 후기', title: '코치님 피드백대로 했더니 1달에 -3.5kg 달성!', author: '정성공', date: '2026.04.26', likes: 87, comments: 33 },
    ];

    const filtered = activeTab === '전체' ? mockPosts : mockPosts.filter(p => p.category === activeTab);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900">커뮤니티 게시판</h1>
                        <p className="text-slate-500 mt-1">회원들과 식단·운동 정보를 나눠요.</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition">
                        글쓰기
                    </button>
                </div>

                {/* 탭 필터 */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
                                activeTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 게시글 목록 */}
                <div className="space-y-3">
                    {filtered.map(post => (
                        <div key={post.id} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition cursor-pointer">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                                        {post.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1 hover:text-blue-600">{post.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-slate-400">
                                        <span>{post.author}</span>
                                        <span>·</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 text-sm text-slate-400 ml-4">
                                    <span>👍 {post.likes}</span>
                                    <span>💬 {post.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-400 text-sm mt-8">
                    게시판 기능은 현재 개발 중입니다. 빠른 시일 내에 완전한 기능을 제공합니다.
                </p>
            </div>
        </div>
    );
};

export default BoardPage;

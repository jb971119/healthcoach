import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

// [수정] ConsultationForm 제거 - 신청 폼은 /apply 페이지로 분리
// 이유: 메인 페이지가 너무 길어지고, 신청 페이지 URL을 공유할 수 없었음
// [수정] 중복 footer 제거 - App.jsx에 이미 footer가 있어 두 번 렌더링되던 문제 해결
const LandingPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* 히어로 섹션 */}
            <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        똑똑한 식단과 과학적 운동,<br/>
                        <span className="text-blue-200">전문가 코칭</span>으로 완성하세요.
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
                        대한운동사협회 &amp; 한국영양학회 기준의 검증된 커리큘럼 기반 헬스케어
                    </p>
                    <button
                        onClick={() => navigate('/apply')}
                        className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105"
                    >
                        지금 무료 체험 신청하기
                    </button>
                </div>
            </header>

            {/* 메인 기능 네비게이션 카드 */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">무엇을 도와드릴까요?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <button
                        onClick={() => navigate('/apply')}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                    >
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🥗</div>
                        <h3 className="text-xl font-bold mb-2">무료 식단 분석 신청</h3>
                        <p className="text-gray-500 text-sm">전문가가 나의 식습관을 분석하고 맞춤 식단을 제안해드립니다.</p>
                        <span className="text-blue-600 text-sm font-semibold mt-4 block group-hover:underline">신청하기 →</span>
                    </button>

                    <button
                        onClick={() => navigate('/register')}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                    >
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-4">👤</div>
                        <h3 className="text-xl font-bold mb-2">회원가입</h3>
                        <p className="text-gray-500 text-sm">가입하고 식단 분석, 운동 피드백 등 모든 기능을 이용하세요.</p>
                        <span className="text-green-600 text-sm font-semibold mt-4 block group-hover:underline">가입하기 →</span>
                    </button>

                    <button
                        onClick={() => navigate('/board')}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                    >
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-4">📋</div>
                        <h3 className="text-xl font-bold mb-2">커뮤니티 게시판</h3>
                        <p className="text-gray-500 text-sm">회원들과 운동·식단 정보를 공유하고 동기부여를 받으세요.</p>
                        <span className="text-purple-600 text-sm font-semibold mt-4 block group-hover:underline">
                            {isAuthenticated ? '게시판 가기 →' : '로그인 후 이용 →'}
                        </span>
                    </button>

                    <button
                        onClick={() => navigate('/ai-body')}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                    >
                        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🤖</div>
                        <h3 className="text-xl font-bold mb-2">AI 체형 분석</h3>
                        <p className="text-gray-500 text-sm">사진 한 장으로 AI가 체형을 분석하고 맞춤 운동을 추천합니다.</p>
                        <span className="text-orange-600 text-sm font-semibold mt-4 block group-hover:underline">분석하기 →</span>
                    </button>
                </div>
            </section>

            {/* 로그인 회원 전용 기능 */}
            {isAuthenticated && (
                <section className="max-w-6xl mx-auto pb-16 px-6">
                    <h2 className="text-2xl font-bold mb-8">나를 위한 AI 분석</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <button
                            onClick={() => navigate('/diet')}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-3xl hover:opacity-90 transition-all text-left"
                        >
                            <div className="text-4xl mb-4">📸</div>
                            <h3 className="text-xl font-bold mb-2">AI 식단 사진 분석</h3>
                            <p className="opacity-80 text-sm">식사 사진을 올리면 AI가 칼로리·영양소를 분석하고 추천 식단을 알려드립니다.</p>
                        </button>
                        <button
                            onClick={() => navigate('/exercise')}
                            className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-8 rounded-3xl hover:opacity-90 transition-all text-left"
                        >
                            <div className="text-4xl mb-4">🎥</div>
                            <h3 className="text-xl font-bold mb-2">AI 운동 자세 분석</h3>
                            <p className="opacity-80 text-sm">운동 영상을 업로드하면 AI가 자세를 분석하고 부상 예방 피드백을 제공합니다.</p>
                        </button>
                    </div>
                </section>
            )}

            {/* 이벤트 배너 */}
            <section className="bg-blue-900 text-white py-12 px-6 text-center">
                <h2 className="text-2xl font-bold mb-3">오픈 기념 특별 이벤트 ☕</h2>
                <p className="text-blue-200">무료 체험 신청자 중 추첨을 통해 스타벅스 커피 쿠폰을 드립니다!</p>
                <button
                    onClick={() => navigate('/apply')}
                    className="mt-6 bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition"
                >
                    지금 신청하기
                </button>
            </section>

            {/* 강점 섹션 */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">차별화된 건강 관리 시스템</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🎓</div>
                        <h3 className="text-2xl font-bold mb-4">검증된 전문가 커리큘럼</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            피트니스 지도사와 공인영양사가 팀을 이루어 설계합니다. 학회 기준에 맞춘 정밀한 프로그램을 경험하세요.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📊</div>
                        <h3 className="text-2xl font-bold mb-4">맞춤형 피드백 시스템</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            1:1 인바디 분석 데이터를 바탕으로 매주 '주간 리포트'를 발행합니다. 데이터로 증명되는 신체 변화를 확인하세요.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;

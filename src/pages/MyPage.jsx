import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
  // 임시 데이터
  const userName = "홍길동";
  const userStats = {
    weight: { current: 75.4, change: -1.2 },
    workout: { count: 3, goal: 5 },
    score: 85
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 상단 헤더 & 네비게이션 */}
        <header className="flex justify-between items-center mb-12 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">H</div>
            <h1 className="text-2xl font-bold text-slate-950">Health Coach <span className="font-light text-slate-500">| 마이페이지</span></h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium text-sm">홈으로</Link>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-700 active:scale-95">로그아웃</button>
          </nav>
        </header>

        {/* 웰컴 메시지 */}
        <div className="mb-12">
          <h2 className="text-5xl font-extrabold text-slate-950 tracking-tighter mb-3">안녕하세요, {userName}님! 👋</h2>
          <p className="text-xl text-slate-600 font-light">오늘도 건강한 하루를 위한 첫걸음을 떼셨군요. 페이스를 유지해봐요!</p>
        </div>
        
        {/* 핵심 지표 대시보드 (카드형) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* 체중 카드 */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">현재 체중</span>
              <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">⚖️</span>
            </div>
            <p className="text-5xl font-extrabold tracking-tight mb-2">{userStats.weight.current} <span className="text-3xl font-medium text-slate-400">kg</span></p>
            <p className={`text-sm font-semibold ${userStats.weight.change < 0 ? 'text-green-600' : 'text-red-600'}`}>
              주간 변화: {userStats.weight.change > 0 ? '+' : ''}{userStats.weight.change} kg
            </p>
          </div>

          {/* 운동 횟수 카드 */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">이번 주 운동</span>
              <span className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl">💪</span>
            </div>
            <p className="text-5xl font-extrabold tracking-tight mb-2">{userStats.workout.count} <span className="text-3xl font-medium text-slate-400">/ {userStats.workout.goal}회</span></p>
            <div className="w-full bg-slate-100 h-3 rounded-full mt-4 overflow-hidden">
              <div className="bg-orange-500 h-full rounded-full" style={{width: `${(userStats.workout.count/userStats.workout.goal)*100}%`}}></div>
            </div>
          </div>

          {/* 식단 점수 카드 */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">식단 점수</span>
              <span className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl">🥗</span>
            </div>
            <p className="text-5xl font-extrabold tracking-tight mb-2">{userStats.score} <span className="text-3xl font-medium text-slate-400">점</span></p>
            <p className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block mt-1">상위 15% (훌륭해요!)</p>
          </div>
        </div>

        {/* 코치 피드백 (하이라이트 카드) */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[32px] p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300 group">
          
          {/* 배경 장식 패턴 */}
          <div className="absolute right-[-50px] top-[-50px] text-[200px] opacity-10 font-black rotate-12 group-hover:rotate-0 transition-transform duration-500">FIT</div>
          <div className="absolute left-[-30px] bottom-[-30px] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl border-4 border-white/30 shadow-inner">🧑‍🏫</div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">박코치님의 주간 피드백</span>
                <span className="text-blue-100 text-sm">2026.04.11 업데이트</span>
              </div>
              <p className="text-2xl font-medium leading-relaxed tracking-wide opacity-95">
                "길동님! 이번 주 단백질 섭취량이 아주 좋습니다. 체중 변화도 긍정적이에요. 다음 주부터는 유산소 시간을 10분만 더 늘려서 체지방 연소를 촉진해볼까요?"
              </p>
              <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 active:scale-95 shadow-lg">상세 리포트 보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
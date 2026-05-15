import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  // 임시 데이터
  const consultations = [
    { id: 1, date: '2026.04.11', name: '홍길동', phone: '010-1234-5678', goal: '바디프로필 준비', status: '대기중' },
    { id: 2, date: '2026.04.10', name: '김철수', phone: '010-5678-1234', goal: '체력 증진', status: '상담예약' },
    { id: 3, date: '2026.04.10', name: '이영희', phone: '010-9876-5432', goal: '산후 다이어트', status: '상담완료' },
  ];

  // 상태별 색상 매핑 함수
  const getStatusStyle = (status) => {
    switch (status) {
      case '대기중': return 'bg-blue-50 text-blue-700 ring-1 ring-blue-200';
      case '상담예약': return 'bg-orange-50 text-orange-700 ring-1 ring-orange-200';
      case '상담완료': return 'bg-green-50 text-green-700 ring-1 ring-green-200';
      default: return 'bg-slate-50 text-slate-700 ring-1 ring-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 상단 헤더 */}
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">A</div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950 tracking-tighter">관리자 시스템</h1>
              <p className="text-slate-600 mt-1 font-light">전체 신청 현황을 한눈에 관리하고 처리하세요.</p>
            </div>
          </div>
          <Link to="/" className="bg-white border border-slate-200 px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-50 active:scale-95 shadow-sm">홈페이지 보기</Link>
        </header>

        {/* 요약 수치 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            {label: '금일 신규 신청', value: '3건', icon: '🆕', color: 'blue'},
            {label: '전체 누적 신청', value: '1,284건', icon: '📊', color: 'slate'},
            {label: '상담 대기', value: '15건', icon: '⏳', color: 'orange'},
            {label: '이번 달 매칭', value: '45명', icon: '🤝', color: 'green'},
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition">
              <div className={`w-14 h-14 rounded-full bg-${item.color}-50 text-3xl flex items-center justify-center`}>{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="text-2xl font-bold text-slate-950">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 신청 현황 표 (메인 콘텐츠) */}
        <div className="bg-white rounded-3xl shadow-[0_15px_50px_-10px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <h2 className="text-xl font-bold text-slate-950">실시간 신청자 목록</h2>
            <div className="flex gap-2">
                <input type="search" placeholder="이름 또는 연락처 검색..." className="px-4 py-2 border rounded-lg text-sm outline-none focus:border-blue-300" />
                <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-700 active:scale-95">검색</button>
            </div>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-600 text-xs uppercase tracking-wider">
                <th className="p-6 font-semibold">신청 일시</th>
                <th className="p-6 font-semibold">이름 / 연락처</th>
                <th className="p-6 font-semibold">주요 운동 목표</th>
                <th className="p-6 font-semibold">처리 상태</th>
                <th className="p-6 font-semibold">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {consultations.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition duration-150">
                  <td className="p-6 text-sm text-slate-600 font-mono">{item.date}</td>
                  <td className="p-6">
                    <div className="font-bold text-slate-800 text-base">{item.name}</div>
                    <div className="text-sm text-slate-500 font-mono mt-1">{item.phone}</div>
                  </td>
                  <td className="p-6 text-slate-700 font-medium italic">"{item.goal}"</td>
                  <td className="p-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-tight inline-block ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:underline">상담하기</button>
                        <button className="text-slate-500 hover:text-slate-800 text-sm font-semibold hover:underline">보류</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* 하단 페이지네이션 */}
          <div className="px-8 py-5 border-t border-slate-100 text-center bg-slate-50/30">
            <p className="text-sm text-slate-500">1 - 10 / 128 건</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
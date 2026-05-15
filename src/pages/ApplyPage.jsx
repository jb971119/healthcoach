import React from 'react';
import ConsultationForm from '../features/consultation/ConsultationForm';

// [신규 생성] 무료 식단 분석 신청 전용 페이지
// 기존에는 LandingPage 하단에 폼이 묻혀 있어 URL 공유가 불가능했음
// /apply 경로로 분리하여 직접 링크 공유 및 독립적인 신청 흐름 구성
const ApplyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                        오픈 기념 무료 체험
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">무료 식단 분석 신청</h1>
                    <p className="text-slate-500 text-lg">
                        전문 코치가 직접 검토 후 맞춤 식단을 제안해드립니다.<br/>
                        신청자 중 추첨으로 스타벅스 커피 쿠폰을 드립니다! ☕
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50">
                    <ConsultationForm />
                </div>

                <p className="text-center text-slate-400 text-sm mt-6">
                    수집된 정보는 상담 목적으로만 사용되며 제3자에게 제공되지 않습니다.
                </p>
            </div>
        </div>
    );
};

export default ApplyPage;

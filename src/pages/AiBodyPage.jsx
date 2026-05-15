import React, { useState } from 'react';

// [신규 생성] AI 체형 분석 페이지 - 로그인 없이 누구나 접근 가능
// AI 분석 API 연동은 추후 OpenAI Vision 또는 별도 AI 서비스와 연결 필요
const AiBodyPage = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleAnalyze = () => {
        if (!previewUrl) return;
        setAnalyzing(true);
        // 추후 AI API 연동 자리
        setTimeout(() => setAnalyzing(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🤖</div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">AI 체형 분석</h1>
                    <p className="text-slate-500 text-lg">
                        전신 사진 한 장으로 AI가 체형을 분석하고<br/>
                        맞춤 운동 및 식단 방향을 제안해드립니다.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
                    {/* 파일 업로드 영역 */}
                    <label className="block w-full border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all">
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        {previewUrl ? (
                            <img src={previewUrl} alt="미리보기" className="max-h-64 mx-auto rounded-xl object-contain" />
                        ) : (
                            <>
                                <div className="text-4xl mb-3">📷</div>
                                <p className="text-slate-600 font-semibold">사진을 클릭하여 업로드</p>
                                <p className="text-slate-400 text-sm mt-1">JPG, PNG 형식 지원 · 전신이 나오는 사진 권장</p>
                            </>
                        )}
                    </label>

                    <button
                        onClick={handleAnalyze}
                        disabled={!previewUrl || analyzing}
                        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all text-lg"
                    >
                        {analyzing ? 'AI 분석 중...' : 'AI 체형 분석 시작'}
                    </button>

                    {/* 분석 결과 자리 (추후 AI API 연동) */}
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-center">
                        <p className="text-slate-400 text-sm">AI 체형 분석 기능은 현재 준비 중입니다.</p>
                        <p className="text-slate-400 text-sm mt-1">빠른 시일 내 서비스를 제공합니다. 무료 체험 신청 시 전문가가 직접 분석해드립니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiBodyPage;

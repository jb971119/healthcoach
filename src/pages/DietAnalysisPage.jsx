import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

// [신규 생성] AI 식단 분석 페이지 - 로그인 필수 (ProtectedRoute로 보호됨)
// 식사 사진 업로드 → AI 칼로리/영양소 분석 → 추천 식단 제공
// AI API 연동은 추후 OpenAI Vision API 또는 전용 식품 인식 AI 서비스 연결 필요
const DietAnalysisPage = () => {
    const { user } = useAuth();
    const [previewUrl, setPreviewUrl] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const handleAnalyze = () => {
        if (!previewUrl) return;
        setAnalyzing(true);
        // 추후 AI API 연동 - 현재는 목업 결과 표시
        setTimeout(() => {
            setResult({
                foods: ['닭가슴살 150g', '현미밥 1공기', '브로콜리 100g'],
                calories: 480,
                protein: 42,
                carbs: 58,
                fat: 9,
                recommendation: '단백질 섭취가 우수합니다! 채소를 조금 더 추가하면 더 좋을 것 같아요. 저녁에는 탄수화물을 절반으로 줄이는 것을 추천드립니다.',
            });
            setAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900">AI 식단 분석</h1>
                    <p className="text-slate-500 mt-1">{user?.name}님의 식사 사진을 올리면 AI가 영양 분석 후 추천 식단을 알려드립니다.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* 업로드 영역 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="font-bold text-slate-900 mb-4">식사 사진 업로드</h2>
                        <label className="block border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
                            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                            {previewUrl ? (
                                <img src={previewUrl} alt="식사 사진" className="max-h-48 mx-auto rounded-xl object-contain" />
                            ) : (
                                <>
                                    <div className="text-4xl mb-2">📸</div>
                                    <p className="text-slate-500 text-sm">식사 사진을 클릭하여 업로드</p>
                                </>
                            )}
                        </label>
                        <button
                            onClick={handleAnalyze}
                            disabled={!previewUrl || analyzing}
                            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-2xl transition-all"
                        >
                            {analyzing ? '분석 중...' : 'AI 분석 시작'}
                        </button>
                    </div>

                    {/* 분석 결과 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="font-bold text-slate-900 mb-4">분석 결과</h2>
                        {result ? (
                            <div className="space-y-4">
                                <div className="flex gap-3 flex-wrap">
                                    {result.foods.map((food, i) => (
                                        <span key={i} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">{food}</span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-slate-900">{result.calories}</p>
                                        <p className="text-xs text-slate-500">칼로리 (kcal)</p>
                                    </div>
                                    <div className="bg-orange-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-orange-600">{result.protein}g</p>
                                        <p className="text-xs text-slate-500">단백질</p>
                                    </div>
                                    <div className="bg-yellow-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-yellow-600">{result.carbs}g</p>
                                        <p className="text-xs text-slate-500">탄수화물</p>
                                    </div>
                                    <div className="bg-green-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-green-600">{result.fat}g</p>
                                        <p className="text-xs text-slate-500">지방</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-4">
                                    <p className="text-sm font-semibold text-blue-800 mb-1">AI 추천</p>
                                    <p className="text-sm text-blue-700">{result.recommendation}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-48 text-slate-300">
                                <div className="text-5xl mb-3">🥗</div>
                                <p className="text-sm">사진을 업로드하고 분석을 시작하세요</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietAnalysisPage;

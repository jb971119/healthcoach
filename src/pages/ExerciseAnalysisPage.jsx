import React from "react";

const ExerciseAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">
          AI 운동 자세 분석
        </h1>
        <p className="text-slate-600 mb-8">
          운동 영상을 업로드하면 AI가 자세를 분석하고 부상 예방 피드백을
          제공합니다.
        </p>

        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-4">🎥</div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            운동 영상 업로드
          </h3>
          <p className="text-slate-500 mb-6">
            MP4, MOV 포맷의 영상을 선택해주세요.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
            파일 선택하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseAnalysisPage;

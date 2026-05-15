import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

// [신규 생성] AI 체형 분석 페이지 - 로그인 없이 누구나 접근 가능
const AiBodyPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError("");
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setAnalyzing(true);
    setError("");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // Python AI 백엔드 통신 (경로는 추후 백엔드 설정에 따라 변경)
      const response = await axiosInstance.post("/ai/analyze-body", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (err) {
      // 백엔드가 아직 없으므로, 데모를 위해 가짜(Mock) 데이터를 결과로 세팅합니다.
      console.log("서버 연결 실패, 임시 데이터를 표시합니다.");
      setTimeout(() => {
        setResult({
          score: 82,
          posture: "거북목 진행 단계",
          details: [
            "어깨가 앞으로 말려있는 라운드 숄더가 관찰됩니다.",
            "골반의 좌우 균형은 양호한 편입니다.",
            "목이 중심축보다 5도 가량 앞으로 나와있습니다.",
          ],
          recommendedExercise: "흉추 가동성 스트레칭, Y레이즈",
        });
      }, 1500);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">
            🤖
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            AI 체형 분석
          </h1>
          <p className="text-slate-500 text-lg">
            전신 사진 한 장으로 AI가 체형을 분석하고
            <br />
            맞춤 운동 및 식단 방향을 제안해드립니다.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
          {/* 파일 업로드 영역 */}
          <label className="block w-full border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="미리보기"
                className="max-h-64 mx-auto rounded-xl object-contain"
              />
            ) : (
              <>
                <div className="text-4xl mb-3">📷</div>
                <p className="text-slate-600 font-semibold">
                  사진을 클릭하여 업로드
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  JPG, PNG 형식 지원 · 전신이 나오는 사진 권장
                </p>
              </>
            )}
          </label>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          <button
            onClick={handleAnalyze}
            disabled={!selectedFile || analyzing}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all text-lg"
          >
            {analyzing ? "AI 분석 중..." : "AI 체형 분석 시작"}
          </button>

          {/* 분석 결과 영역 */}
          {result && (
            <div className="mt-8 p-6 bg-orange-50 border border-orange-100 rounded-2xl animate-fade-in text-left">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  📊 AI 분석 결과
                </h3>
                <span className="bg-white text-orange-600 font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                  종합 점수: {result.score}점
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1">
                    체형 요약
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    {result.posture}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-orange-100">
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    {result.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1">
                    추천 교정 운동
                  </p>
                  <p className="text-slate-800 font-medium bg-white p-3 rounded-lg border border-orange-100">
                    {result.recommendedExercise}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiBodyPage;

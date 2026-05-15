import React from "react";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 font-sans break-keep">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 헤더 영역 */}
        <div className="text-center mt-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-5 py-2 rounded-full mb-6 shadow-sm border border-blue-200">
            프리미엄 헬스케어 솔루션
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              HealthCoach
            </span>
            <br />
            무료 체험 프로그램
          </h1>
          <p className="text-xl text-center text-slate-600 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            전문가의 밀착 코칭과 데이터 기반 분석으로 당신의 확실한 건강 변화를
            시작하세요.
          </p>
        </div>

        {/* 브랜드 소개 (하이라이트 카드) */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 relative z-10 text-balance">
            "의지만으로는 부족합니다.{" "}
            <span className="text-blue-600">시스템</span>이 필요합니다."
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto relative z-10 text-balance">
            안녕하세요! 체계적인 맞춤형 건강 관리 서비스를 제공하는{" "}
            <strong>HealthCoach</strong>입니다.
            <br className="hidden md:block" />
            검증된 피트니스 전문가와 영양사들이 팀을 이루어, 고객님의 목표
            달성을 위한 최적의 솔루션을 제공합니다.
            <br className="hidden md:block" />
            혼자서 지속하기 힘든 다이어트와 체력 관리를 과학적인 코칭 시스템으로
            가장 효율적이고 확실하게 도와드립니다.
          </p>
        </section>

        {/* 핵심 서비스 3가지 (그리드 카드) */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              압도적인 관리 시스템
            </h2>
            <p className="text-slate-500 mt-3 text-lg">
              결과를 만드는 HealthCoach만의 핵심 서비스
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🏋️‍♂️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                전문가 1:1 오프라인 코칭
              </h3>
              <p className="text-slate-600 leading-relaxed">
                제휴 피트니스 센터에서 진행되는 프리미엄 대면 PT입니다. 체형
                분석을 통해 부상을 방지하고 최적의 운동 강도를 설계합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📱
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                데일리 밀착 온라인 관리
              </h3>
              <p className="text-slate-600 leading-relaxed">
                전담 코치가 배정되어 매일 식단과 운동 기록을 모니터링합니다.
                실시간 피드백으로 일상 속 건강한 습관을 만들어드립니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🏃‍♀️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                스페셜 액티비티 클래스
              </h3>
              <p className="text-slate-600 leading-relaxed">
                실내 헬스에만 국한되지 않고 러닝, 클라이밍 등 다양한 스페셜
                클래스를 운영하여 운동에 대한 흥미를 꾸준히 유지시킵니다.
              </p>
            </div>
          </div>
        </section>

        {/* 무료 체험 안내 및 추천 대상 */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">
              FREE TRIAL
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              무료 체험 혜택 안내
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🎁</span>
                <h3 className="text-xl font-bold text-slate-900">
                  제공되는 혜택
                </h3>
              </div>
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> 정밀 체성분 분석 및
                  1:1 심층 상담
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> 라이프스타일 맞춤형
                  식단 가이드라인
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> 1회 체험형 맞춤
                  프리미엄 PT 코칭
                </li>
              </ul>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">💳</span>
                <h3 className="text-xl font-bold text-slate-900">참가 비용</h3>
              </div>
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">✦</span>{" "}
                  <strong className="text-blue-700">전액 무료 (0원)</strong>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">✦</span> 추가 결제
                  강요 절대 없음
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">✦</span> 퀄리티 유지를
                  위해 매월 선착순 마감
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              🔥 이런 분들께 강력히 추천합니다!
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                <span className="text-orange-500 text-xl mt-0.5">💡</span>
                <span className="text-slate-700">
                  혼자 하는 다이어트에 매번 실패하여{" "}
                  <strong>전문가의 체계적인 관리</strong>가 필요하신 분
                </span>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                <span className="text-orange-500 text-xl mt-0.5">💡</span>
                <span className="text-slate-700">
                  인터넷 정보가 아닌,{" "}
                  <strong>내 몸에 딱 맞는 정확한 운동법과 식단</strong>이
                  궁금하신 분
                </span>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start sm:col-span-2">
                <span className="text-orange-500 text-xl mt-0.5">💡</span>
                <span className="text-slate-700">
                  올해는 전문가의 밀착 코칭을 통해{" "}
                  <strong>반드시 목표 체중/체형을 달성</strong>하고 싶으신 분
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (Call To Action) 하단 신청 영역 */}
        <section className="bg-slate-950 text-white p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 leading-tight">
            확실한 변화, 지금 바로 경험해보세요!
          </h2>
          <p className="text-slate-300 mb-16 text-lg relative z-10 text-balance">
            신청 폼을 남겨주시면 담당 코치가 빠르게 연락드려 예약을
            도와드립니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 mt-8">
            {/* 구글 폼 링크 */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdz_p9fI-QsevmO7m8ew96WavXUDD4HXZgSkjboO1ah5n0MoQ/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
            >
              <span className="text-xl">📝</span> 무료 체험 신청하기
            </a>
          </div>

          <div className="mt-12 relative z-10 text-slate-400 text-sm bg-slate-800/40 p-5 rounded-2xl inline-block text-left backdrop-blur-sm border border-slate-700/50">
            <p className="mb-2 text-white font-semibold">📞 고객 센터 문의</p>
            <p>HealthCoach 운영팀 : 1588-0000 / support@healthcoach.com</p>
          </div>
        </section>

        {/* 필수 고지사항 */}
        <p className="text-center text-slate-400 text-sm px-4 pb-10">
          ※ 수집된 정보는 1회성 체험 서비스 제공 목적으로만 사용되며, 제3자에게
          임의로 제공되지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default ApplyPage;

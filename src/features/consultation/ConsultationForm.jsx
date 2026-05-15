import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        goal: '다이어트',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await axiosInstance.post('/consultation/apply', formData);
            setSubmitted(true);
        } catch (err) {
            setError('신청에 실패했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">신청이 완료되었습니다!</h3>
                <p className="text-slate-500">추첨 결과는 등록하신 연락처로 안내드립니다.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">이름</label>
                {/* [수정] value 속성 추가 - 없으면 React 비제어 컴포넌트 경고 발생 */}
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">연락처</label>
                {/* [수정] value 속성 추가 */}
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01012345678 (- 제외)"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div>
                <label htmlFor="goal" className="block text-sm font-semibold text-slate-700 mb-2">운동 목표</label>
                {/* [수정] value 속성 추가 + Tailwind 스타일 통일 */}
                <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-white"
                >
                    <option value="다이어트">다이어트</option>
                    <option value="근력증진">근력 증진</option>
                    <option value="체형교정">체형 교정</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">코치님께 전할 말 (선택)</label>
                {/* [수정] value 속성 추가 */}
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="현재 식습관, 건강 고민 등을 자유롭게 적어주세요."
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.97] text-lg"
            >
                {loading ? '신청 중...' : '무료 체험 신청 및 커피 쿠폰 도전 ☕'}
            </button>
        </form>
    );
};

export default ConsultationForm;

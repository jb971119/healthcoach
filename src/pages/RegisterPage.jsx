import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

// [신규 생성] 회원가입 페이지 - 기존에 회원가입 경로 자체가 없었음
const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirm: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        setLoading(true);
        try {
            await axiosInstance.post('/auth/signup', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            navigate('/login', { state: { message: '회원가입이 완료되었습니다. 로그인해주세요.' } });
        } catch (err) {
            setError(err.response?.data?.message || '회원가입에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-12 border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400"></div>

                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto">👤</div>
                    <h2 className="text-3xl font-extrabold text-slate-950">회원가입</h2>
                    <p className="text-slate-500 mt-2">Health Coach와 함께 건강한 변화를 시작하세요.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">이름</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="홍길동" required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">이메일</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="you@email.com" required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">비밀번호</label>
                        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange}
                            placeholder="8자 이상 입력" required minLength={8}
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm" className="block text-sm font-semibold text-slate-700 mb-2">비밀번호 확인</label>
                        <input id="passwordConfirm" type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange}
                            placeholder="비밀번호 재입력" required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all" />
                    </div>
                    <button type="submit" disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all text-lg">
                        {loading ? '가입 중...' : '회원가입 완료'}
                    </button>
                </form>

                <div className="text-center mt-8 pt-6 border-t border-slate-100">
                    <p className="text-slate-500 text-sm">이미 회원이신가요?
                        <Link to="/login" className="ml-1 text-blue-600 font-semibold hover:underline">로그인</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

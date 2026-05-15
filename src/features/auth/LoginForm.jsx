import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import { useAuth } from '../../context/AuthContext.jsx';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // [수정] 에러 상태 추가 - 기존에는 alert()만 사용하여 UX가 나빴음
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            // [수정] 가짜 로그인(email && password 체크) → 실제 백엔드 API 호출로 변경
            const res = await axiosInstance.post('/auth/login', { email, password });
            // AuthContext에 사용자 정보와 토큰 저장
            login({ email: res.data.email, name: res.data.name }, res.data.accessToken);
            // 게시판 등에서 로그인 페이지로 왔다면 원래 페이지로 복귀
            const redirectTo = location.state?.from?.pathname || '/mypage';
            navigate(redirectTo, { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || '이메일 또는 비밀번호가 올바르지 않습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-12 border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"></div>

                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-inner text-blue-600 font-black">H</div>
                    <h2 className="text-4xl font-extrabold text-slate-950 tracking-tighter">환영합니다!</h2>
                    <p className="text-slate-600 mt-3 text-lg font-light">
                        데이터로 증명되는 변화, <span className="font-semibold text-blue-600">Health Coach</span>
                    </p>
                </div>

                {/* [추가] 에러 메시지 표시 영역 */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-7">
                    <div>
                        <label htmlFor="email" className="text-sm font-semibold text-slate-800 mb-2 block pl-1">이메일 주소</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@email.com"
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-lg bg-white"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2 pl-1">
                            <label htmlFor="password" className="text-sm font-semibold text-slate-800">비밀번호</label>
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-lg bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-950 hover:bg-slate-800 disabled:opacity-60 text-white font-bold py-5 rounded-2xl shadow-xl shadow-slate-200 active:scale-[0.97] text-lg mt-4"
                    >
                        {loading ? '로그인 중...' : '안전하게 로그인하기'}
                    </button>
                </form>

                <div className="text-center mt-10 pt-8 border-t border-slate-100">
                    <p className="text-slate-600">아직 회원이 아니신가요?</p>
                    {/* [수정] 회원가입 버튼을 /register 링크로 변경 */}
                    <Link
                        to="/register"
                        className="mt-3 inline-block text-blue-600 font-bold hover:text-blue-700 hover:underline text-lg"
                    >
                        회원가입하기
                    </Link>
                    <div className="mt-4">
                        <Link to="/apply" className="text-sm text-slate-500 hover:underline">
                            무료 체험 신청하기 (커피 쿠폰 증정) ☕
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

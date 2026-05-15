import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// 기존 페이지
import LandingPage from './pages/LandingPage.jsx';
import MyPage from './pages/MyPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import LoginForm from './features/auth/LoginForm.jsx';

// [추가] 새로운 페이지들
import RegisterPage from './pages/RegisterPage.jsx';
import ApplyPage from './pages/ApplyPage.jsx';
import BoardPage from './pages/BoardPage.jsx';
import AiBodyPage from './pages/AiBodyPage.jsx';
import DietAnalysisPage from './pages/DietAnalysisPage.jsx';
import ExerciseAnalysisPage from './pages/ExerciseAnalysisPage.jsx';

import './App.css';

function AppContent() {
    const location = useLocation();
    const navigate = useNavigate();
    // [수정] 전역 인증 상태 사용 - 기존에는 로그인 여부를 알 수 없어 네비게이션이 정적으로만 표시됨
    const { isAuthenticated, user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="app-container">
            {/* 네비게이션 */}
            <nav className="main-nav">
                <div className="nav-wrapper">
                    <Link to="/" className="nav-logo">
                        <div className="logo-box">H</div>
                        <span className="logo-text">HealthCoach</span>
                    </Link>

                    <ul className="nav-menu">
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>홈</Link>
                        </li>
                        <li>
                            <Link to="/apply" className={location.pathname === '/apply' ? 'active' : ''}>무료 신청</Link>
                        </li>
                        <li>
                            <Link to="/ai-body" className={location.pathname === '/ai-body' ? 'active' : ''}>AI 체형분석</Link>
                        </li>
                        {/* [수정] 게시판: 로그인 여부와 관계없이 링크 표시, 비로그인 시 ProtectedRoute가 /login으로 이동 */}
                        <li>
                            <Link to="/board" className={location.pathname === '/board' ? 'active' : ''}>게시판</Link>
                        </li>
                        {/* [추가] 로그인한 사용자에게만 분석 메뉴 표시 */}
                        {isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/diet" className={location.pathname === '/diet' ? 'active' : ''}>식단분석</Link>
                                </li>
                                <li>
                                    <Link to="/exercise" className={location.pathname === '/exercise' ? 'active' : ''}>운동분석</Link>
                                </li>
                                <li>
                                    <Link to="/mypage" className={location.pathname === '/mypage' ? 'active' : ''}>내 리포트</Link>
                                </li>
                            </>
                        )}
                        <li className="admin-link">
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>

                    <div className="nav-actions">
                        {isAuthenticated ? (
                            /* [수정] 로그인 상태: 사용자 이름 + 로그아웃 버튼 */
                            <>
                                <span className="login-link">{user?.name}님</span>
                                <button onClick={handleLogout} className="apply-btn-neon">
                                    로그아웃
                                    <span className="btn-glow"></span>
                                </button>
                            </>
                        ) : (
                            /* 비로그인 상태: 로그인 + 회원가입 */
                            <>
                                <Link to="/login" className="login-link">로그인</Link>
                                <Link to="/register" className="apply-btn-neon">
                                    회원가입
                                    <span className="btn-glow"></span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <main className="content-area">
                <Routes>
                    {/* 공개 페이지 */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/apply" element={<ApplyPage />} />
                    <Route path="/ai-body" element={<AiBodyPage />} />

                    {/* [추가] 보호된 페이지 - 비로그인 시 /login으로 이동 */}
                    <Route path="/board" element={
                        <ProtectedRoute><BoardPage /></ProtectedRoute>
                    } />
                    <Route path="/mypage" element={
                        <ProtectedRoute><MyPage /></ProtectedRoute>
                    } />
                    <Route path="/diet" element={
                        <ProtectedRoute><DietAnalysisPage /></ProtectedRoute>
                    } />
                    <Route path="/exercise" element={
                        <ProtectedRoute><ExerciseAnalysisPage /></ProtectedRoute>
                    } />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </main>

            <footer className="main-footer">
                <div className="footer-content">
                    <p>© 2026 HealthCoach. Elevate your performance.</p>
                    <div className="footer-links">
                        <span>이용약관</span>
                        <span>개인정보처리방침</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;

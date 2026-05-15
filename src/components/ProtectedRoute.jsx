import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// [신규 생성] 로그인이 필요한 페이지를 보호하는 컴포넌트
// 기존에는 /mypage 등 인증이 필요한 페이지에 누구나 접근 가능했음
// 이 컴포넌트로 감싼 Route는 비로그인 시 /login으로 리다이렉트됨
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    // AuthContext가 localStorage에서 사용자 정보를 읽는 동안 빈 화면 표시
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-slate-500">로딩 중...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // state에 현재 경로 저장 → 로그인 후 원래 페이지로 자동 복귀
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;

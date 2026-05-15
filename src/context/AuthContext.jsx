import React, { createContext, useContext, useState, useEffect } from 'react';

// [신규 생성] 전역 로그인 상태 관리
// 기존에는 로그인 상태를 저장하는 곳이 없어서 페이지를 새로고침하면 로그인이 풀리고,
// 다른 컴포넌트에서 "현재 로그인 여부"를 알 방법이 없었음
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 새로고침해도 로그인 유지: localStorage에서 사용자 정보 복원
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (token && savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                // 저장된 JSON이 손상된 경우 초기화
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isAuthenticated: !!user,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// 다른 컴포넌트에서 useAuth()로 편리하게 접근할 수 있도록 훅으로 제공
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth는 AuthProvider 안에서만 사용 가능합니다.');
    return context;
};

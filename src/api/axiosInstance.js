import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: { 'Content-Type': 'application/json' },
});

// [추가] 요청 인터셉터 - 모든 API 요청에 JWT 토큰 자동 첨부
// 기존에는 토큰이 없어서 인증이 필요한 API를 호출할 때 항상 401 오류가 발생했음
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// [추가] 응답 인터셉터 - 토큰 만료(401) 시 자동 로그아웃 처리
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // 토큰이 만료되거나 유효하지 않으면 저장된 인증 정보 삭제 후 로그인 페이지로
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

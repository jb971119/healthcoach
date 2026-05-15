import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

const ConsultationList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/admin/consultations')
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("데이터를 불러오는데 실패했습니다.", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-center">데이터를 불러오는 중입니다...</div>;

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 border">신청자</th>
          <th className="p-3 border">연락처</th>
          <th className="p-3 border">목표</th>
          <th className="p-3 border">상태</th>
          <th className="p-3 border text-center">관리</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <td className="p-3 border">{item.applicantName}</td>
            <td className="p-3 border">{item.phoneNumber}</td>
            <td className="p-3 border">{item.goal}</td>
            <td className="p-3 border text-blue-600 font-bold">{item.status}</td>
            <td className="p-3 border">
              {/* flex와 gap 속성으로 버튼 간격을 띄워 겹침 방지 */}
              <div className="flex justify-center gap-2">
                <button className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">승인</button>
                <button className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">거절</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ConsultationList;
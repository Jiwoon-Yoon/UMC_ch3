import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
    const navigate = useNavigate();

    const onClickLogIn = () => {
        console.log("로그인 화면으로 이동");
        navigate('/login');
      };

  return (
    <div><button onClick={onClickLogIn}>로그인</button></div>
  )
}

//     {isLogIn ? (
//         <button onClick={onClickLogOut}>로그아웃</button>
//     ) : (
//         <button onClick={onClickLogIn}>로그인</button>
//     )}

// {isLogIn && <span>환영합니다!</span>}
//     {!isLogIn && <span>rrr</span>}
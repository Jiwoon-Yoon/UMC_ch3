import React from 'react'

export default function LoginControl(props) {
    const {isLogIn, onClickLogIn, onClickLogOut} =props

  return (
    <div >
        {isLogIn ? (
            <button onClick={onClickLogOut}>로그아웃</button>
        ) : (
            <button onClick={onClickLogIn}>로그인</button>
        )}
    
    {isLogIn && <span>환영합니다!</span>}
        {!isLogIn && <span>로그인 해주세요!</span>}
    </div>
  )
}

import React,{useEffect, useState} from 'react'


export default function Login() {
    const [inputId,setInputId] = useState('');
    const [inputPw,setInputPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow]= useState(true);

    const handleId = (e) =>{
        setInputId(e.target.value);
        const regex=
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(e.target.value)){
            setIdValid(true);
        } else{
            setIdValid(false);
        }
    };

    const handlePw=(e)=>{
        setInputPw(e.target.value);
        const regex=
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(e.target.value)){
            setPwValid(true);
        } else{
            setPwValid(false);
        }
    };

    useEffect(()=>{
        if(idValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    },[idValid,pwValid])

  return (
    <div className='login-container'>
        <div className='titleWrap'>
            이메일과 비밀번호를 
            <br/>
            입력해주세요
            <br/>
        </div>
        
        <div className='input-container'>
            <div className='email'>
                이메일 주소
                <input id="email_text"
                placeholder='test@gmail.com'
                value={inputId} 
                onChange={handleId}
                //onChange={(e)=>setInputId(e.target.value)}
                type="text">
                </input>
            </div>

            <div className='errorMessageWrap'>
                {
                    !idValid && inputId.length>0 &&(
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}    
            </div>

            <div style={{marginTop:"26px"}}className='password'>
                비밀번호
            </div>
            
            <input id="password_text" 
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            value={inputPw} 
            //onChange={(e)=>setInputPw(e.target.value)}
            onChange={handlePw}
            type="password">
            </input>
            
            <div className='errorMessageWrap'>
                {
                    !pwValid && inputPw.length>0 &&(
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )} 
            </div>
        </div>

        <button disabled={notAllow} id="login_check">
            확인
        </button>
    </div>

  )
}

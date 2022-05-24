import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailtitle">시간 절약, 돈 절약!</h1>
        <span className="mailDesc">가입하시면 최고의 상품을 보내드립니다!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="이메일"/>
            <button>가입</button>
        </div>
    </div>
  )
}

export default MailList
import "../searchItem/searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" 
            alt=""
             className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">타워 호텔 아파트먼트</h1>
            <span className="siDistance">도심까지의 거리 22.8 Km</span>
            <span className="siTaxiOp">무료 공항 택시</span>
            <span className="siSubtitle">
                스튜디오 아파트 - 에어컨
            </span>
            <span className="siFeatures">
                스튜디오 포함 • 1 욕실 • 21m² 1 침대
            </span>
            <span className="siCancleOp">무료 취소</span>
            <span className="siCancelOpSubtitle">
            나중에 취소할 수 있으므로 오늘 이 좋은 가격에 예약하세요!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>매우 좋음</span>
                <button>7.7</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">904,028원</span>
                <span className="siTaxOp">세금 및 수수료 포함</span>
                <button className="siCheckButton">가격 보기</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
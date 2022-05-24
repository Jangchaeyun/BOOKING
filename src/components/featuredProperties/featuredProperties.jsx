import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
      <div className="fp">
          <div className="fpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            className="fpImg" />
            <span className="fpName">아파트호텔 스타레 미아스토</span>
            <span className="fpCity">마드리드</span>
            <span className="fpPrice">99,966원 부터</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>우수</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            className="fpImg" />
            <span className="fpName">컴포트 스위트 오스틴 호텔</span>
            <span className="fpCity">오스틴</span>
            <span className="fpPrice">131,723원 부터</span>
            <div className="fpRating">
                <button>7.6</button>
                <span>좋음</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
            className="fpImg" />
            <span className="fpName">포시즌스 호텔 리츠 리스본</span>
            <span className="fpCity">리스본</span>
            <span className="fpPrice">819,775원 부터</span>
            <div className="fpRating">
                <button>9.2</button>
                <span>매우 훌륭함</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            className="fpImg" />
            <span className="fpName">힐튼 가든 인 프랑크푸르트</span>
            <span className="fpCity">베를린</span>
            <span className="fpPrice">158,305원 부터</span>
            <div className="fpRating">
                <button>8.6</button>
                <span>우수</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties

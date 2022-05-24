import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css"
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    },
]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
});

const navigate = useNavigate()

const handleOption = (name, operation) => {
    setOptions((prev)=>{
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
};

const handleSearch  = () => {
    navigate("/hotels", {state:{ destination, date, options }});
}
  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>숙박</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>항공편</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>차 렌탈</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>명소</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>공항 택시</span>
                </div>
            </div>
            { 
            type !== "list" && (
            <>
            <h1 className="headerTitle">
                여기에서 평생 여행 비용을 할인받으세요.
            </h1>
            <p className="headerDesc">
                행복하고 즐거운 여행을 위한 할인을 받으세요. - 최대 60%까지 할인 받으세요!!!
            </p>
            <button className="headerBtn">로그인 / 회원가입</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input 
                        type="text" 
                        placeholder="어디를 가고 싶은가요?" className="headerSearchInput"
                        onChange={(e)=>setDestination(e.target.value)}
                        />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} childern . ${options.room} room`}</span>
                    {openOptions && (
                        <div className="options">
                        <div className="optionItem">
                            <span className="optionText">어른</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.adult <= 1}
                                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>                            
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>        
                            </div>                    
                        </div>
                        <div className="optionItem">
                            <span className="optionText">아이</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.children <= 0}
                            className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>                            
                            <span className="optionCounterNumber">{options.children}</span>
                            <button 
                            className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button> 
                            </div>                           
                        </div>
                        <div className="optionItem">
                            <span className="optionText">방</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.room <= 1}
                                className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>                            
                                <span className="optionCounterNumber">{options.room}</span>
                                <button
                                className="optionCounterButton"  onClick={() => handleOption("room", "i")}>+</button>      
                            </div>                          
                        </div>
                    </div>
                )}</div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>찾기</button>
                </div>
            </div></>
            )}
        </div>
    </div>
  );
};

export default Header

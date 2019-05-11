import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: -webkit-linear-gradient(90deg, #001749 0%, #0e4bdb 70%);
  line-height: 1;
  width: 110px;
  height: 110px;
  text-align: center;
  color: white;
  padding: 20px;
  transform: rotate(45deg);
  .container {
    display: inline-block;
    width: 80%;
    transform: rotate(-45deg);
  }
  span {
    display: block;
    width: 100%;
  }
  .month {
    font-size: 14px;
  }
  .day {
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 5px;
  }
`

const Dateblock = props => {
  const { month, day, year } = props
  return (
    <Wrapper>
      <div className="container">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
        <span className="year">{year}</span>
      </div>
    </Wrapper>
  )
}

export default Dateblock

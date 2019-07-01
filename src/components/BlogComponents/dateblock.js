import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    width: 110px;
    height: 110px;
    @media screen and (max-width: 425px) {
        width: 60px;
        height: 60px;
    }
`

const Square = styled.div`
    background: -webkit-linear-gradient(90deg, #001749 0%, #0e4bdb 70%);
    line-height: 1;
    width: 110px;
    height: 110px;
    text-align: center;
    color: white;
    transform: rotate(45deg);
    position: absolute;
    z-index: 1;
    @media screen and (max-width: 425px) {
        width: 60px;
        height: 60px;
    }
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.3rem;
    color: white;
    position: absolute;
    z-index: 2;
    .month {
        font-size: 14px;
    }
    .day {
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 425px) {

      line-height: 1rem;
        .day{
          font-size: 24px;
        }

        .month{
          font-size: 12px;
        }

        .year{
          font-size: 10px;
        }
    }
`

const Dateblock = props => {
    const { month, day, year } = props
    return (
        <Wrapper>
            <Square />
            <Date>
                <span className="month">{month}</span>
                <span className="day">{day}</span>
                <span className="year">{year}</span>
            </Date>
        </Wrapper>
    )
}

export default Dateblock

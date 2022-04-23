import styled from "styled-components";


export const DivInput = styled.div`
  width: 90%;
  margin-left: 5%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const DateDados = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Paragrafo = styled.p`
  padding: 2% 0;
  font-size: 18px;
  overflow: hidden;
  @media (max-width: 700px) {
    font-size: 12px;
    padding: 2%;
	}
`

export const Selects = styled.select`
    margin: 2% 0;
    background-color: #92a8d1;
    border: #000000 solid 2px;
    padding: 12px 22px;
    font-size: 16px;
    border-radius: 10px;
    color: #212165;
    font-weight: 900;
    width: 60%;
	`
	
export const Options = styled.option`
	font-weight: bolder;
  color: black;
`
export const Button = styled.button`
    background-color: #92a8d1;
    padding: 10px 22px;
    font-size: 22px;
    border-radius: 25px;
    width: 250px;
    margin-left: 5%;
    color: #000000;
    border: black solid 2px;
    font-weight: 900;
    &:hover{
        cursor: pointer;
        background-color:  #92a8d1;
        color: #0f334c;
        transition: 0.3s;
    }
    &:disabled {
      color: black;
      background-color: #92a8d1;
      border: black solid 2px;
    }
    @media (max-width: 700px) {
      margin: 5% auto;
	  }
`
export const DivInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const DadosP = styled.h2`
  margin: 0 10%;
`


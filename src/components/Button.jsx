import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
padding: 10px;
border-radius: 3px;
border: none;
cursor: pointer;
height: 2.4rem;
`

export default function Button({ handleOnClick, name, disabled=false, classNames='' }) {

  return (
    <Btn onClick={handleOnClick} 
    className={classNames}
    disabled={disabled}
    >
       {name}
    </Btn>
  )
}

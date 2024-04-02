import React from 'react'


function IconBtn({
   Children, text,onclick,disabled,outline=false,customClasses,type
}) {
  return (
    <button disabled={disabled}
    onClick={onclick}
    type={type}
    >
{ Children ? ( 
    <>
        <span>
            {text}
        </span> 
        {Children}
    </>
) : (text)}
    </button>
  )
}

export default IconBtn;
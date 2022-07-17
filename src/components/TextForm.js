import React, {useState} from 'react'

export default function TextForm(props) {

    


    const handleOnChange = (event)=>{
        setText(event.target.value)
        let arr = text.split(" ")
        if (event.target.value === ""){
            setCount(0)
        }

        else{
            if (arr.find(element => element === " ")) {
                setCount(text.split(" ").length-1)

            }
            else{

                setCount(text.split(" ").length)
            }

        }
        console.log(text.split(" "))
    }

    const changeToLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const changeToUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }  

    const changeToClear= ()=>{
        setText("")
        setCount(0)
    }

    const copyMe = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
const removeExtraSpace = () => {
        let arr = text.split(/[  ]+/);
        setText(arr.join(" "))
}

    function yourFunction(text){
        setCount(text.length)
    }

    // function isDark(){
    //     if (props.mode === 'dark') {return true;}
    //     else {return false;}
        

    // }
    

    

    const [text, setText] = useState('')
    const [count, setCount] = useState('')
  return (
        <>
            <div className= 'my-4 ' >
                <h2>{props.tittle}</h2>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder='enter text here'  
                    style={{backgroundColor: props.mode === 'dark' ?"#2A2A2C": "white", color : props.mode === 'dark' ?"white": "#2A2A2C"}}
                     ></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={changeToUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={changeToLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={changeToClear}>Clear </button>
                <button className="btn btn-primary mx-2" onClick={copyMe}>copy </button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>remove space </button>



            </div>

            <div className="container my-4" style = {{color: props.mode === 'dark' ?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>total words is {count}  and total characters are {text.length}</p>
                <p>{text.length >0?text:'Enter something in textArea'}</p>

            </div>
        </>
  )
  }
//

//   style = {{color: document.body.classList.contains('bg-dark')  ? 'red' : 'black'}}    74
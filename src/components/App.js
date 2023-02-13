
import React, { useState } from "react";
import '../styles/App.css';
// creating obj of outputs to return
const relationOutput = {
    0: "Siblings",
    1: "Friends",
    2: "Love", 3: "Affection",
    4: "Marriage",
    5: "Enemy",
}

function App() {
    const [str1, setstr1] = useState("") // to get value frm str1
    const [str2, setstr2] = useState("") // to get value frm str2
    const [err, seterr] = useState("false") // set err msg pls provide valid inputs
    const [output, setoutput] = useState("") // set outputs print

    const addtext1 = (e) => {
        setstr1(e.target.value); // getting values of string using fun
    }
    const addtext2 = (e) => {
        setstr2(e.target.value); // getting values of string using fun
    }
    const calculate = () => {
        if (!str1 || !str2) { // checking empty str
            seterr(true) // set msg to true
        }

// logic for removing same char frm bith str

        let newstr1 = "";
        let newstr2 = "";

        for (let i = 0; i < str1.length; i++) {
            if (str2.includes(str1[i])) {
                newstr2 = str2.replace(str1[i], "")
                break;
            }
            newstr1 = newstr1 + str1[i];
        }

        const outputindex = (newstr1.length + newstr2.length) % 6; // given
        setoutput(relationOutput[outputindex]); //getting index frm obj and set in output
    }
    const handleClear = () => { // onclicking set all empty
        setstr1("");
        setstr2("");
        setoutput("");
    }

    return (
        <div>
            <div id="main">

                <div className="input-box">
                    <input data-testid="input1" placeholder="Firest Name" value={str1} onInput={addtext1}></input> <br /><br />
                    <input data-testid="input2" placeholder="Second Name" value={str2} onInput={addtext2}></input> <br />
                </div>
                <div className="btn">
                    <button data-testid="calculate_relationship" onClick={calculate} >Calculate-Relationship</button>
                    <button data-testid="clear" onClick={handleClear} >clear</button>
                </div>
                <h3 data-testid="answer">
                    {(err ? output : output)}
                </h3>
            </div>
        </div>
    )
}

export default App

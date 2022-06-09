import React, { useState } from "react"
import { sha1, sha256, sha384, sha512 } from "crypto-hash"

export default function Hashing() {
    const [algorithms] = useState(["sha1", "sha256", "sha384", "sha512"])
    let [text_input, setTextInput] = useState("")
    let [algorithm, setAlgorithm] = useState("sha1")
    let [output, setOutput] = useState("")

    const handleTextInput = async (e) => {
        let value = e.target.value

        let result = ""

        if (algorithm == "sha1") {
            result = await sha1(value)
        } else if (algorithm == "sha256") {
            result = await sha256(value)
        } else if (algorithm == "sha384") {
            result = await sha384(value)
        } else if (algorithm == "sha512") {
            result = await sha512(value)
        }

        setOutput(result)

        setTextInput(value)
    }

    const handleAlgorithmChange = async (e) => {

        let value = e.target.value;
    
        let result = '';
    
        if (text_input) {
    
            if (value == 'sha1') {
                result = await sha1(text_input);
            } else if (value == 'sha256') {
                result = await sha256(text_input);
            }
            else if (value == 'sha384') {
                result = await sha384(text_input);
            }
            else if (value == 'sha512') {
                result = await sha512(text_input);
            }
    
        }
    
        setAlgorithm(value);
    
        setOutput(result);
    }

    return (
        <div className="hashing-container">
            <div className="hashing-content">
                <div className="hashing-form">
                    <p className="hashing-info">Indtast en sætning og vælg en algoritme for at hash</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="text-input">String</label>
                            <input type="text" className="form-control" id="text-input" placeholder="Skriv en string..." value={text_input} onChange={handleTextInput} />
                        </div>
                    </form>
                </div>
                <div className="hashing-algorithms">
                    <h4 className="hashing-algorithms-heading">Krypterings algoritmer</h4>
                    <div className="hashing-algorithms-list">
                        {algorithms.map((algo) => {
                            return (
                                <div className="form-check" key={algo}>
                                    <input className="form-check-input" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
                                    <label className="form-check-label" htmlFor={algo}>
                                        {algo}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="hashed-output">
                    <h4 className="hashed-algorithm-heading">Hashed tekst</h4>
                    <div className="hashed-algorithm-container">
                        <p className="hashed-algorithm-text">{output}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import axios from 'axios'
import React, { useEffect } from 'react'
import { MathpixMarkdown, MathpixLoader } from 'mathpix-markdown-it';
import MathJax from 'react-mathjax2'

function ScannerMathpix() {

    const getData = async () => {
        // await axios.get("https://api.mathpix.com/v3/text",{
        //     headers:{
        //         "Content-Type":"application/json",
        //         "api_key":""
        //     },

        // }).then(response =>{
        //     console.log(response?.data)
        // })
    }

    useEffect(() => {
        getData()
    }, [])

    const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
    const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'


    return (
        <div>
            {/* <MathpixLoader>
                <MathpixMarkdown text="\\(ax^2 + bx + c = 0\\)" />
                <MathpixMarkdown text="$x=\frac{ - b \pm \sqrt { b ^ { 2 } - 4 a c } } { 2 a }$" />
            </MathpixLoader> */}

            <MathJax.Context >
                <div>
                    <MathJax.Text>{ascii}</MathJax.Text>
                </div>
            </MathJax.Context>
        </div>
    )
}

export default ScannerMathpix
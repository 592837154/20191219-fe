import React, { useRef, useEffect } from 'react';
import LOGO from './logo.svg';
const TestRef = (props: any) => {
    const REF1 = useRef(null);
    const REF2 = useRef(null);
    const REF3 : any= useRef(null);
    const logRef = () => {
        console.log('REF.current', REF1.current, REF2.current);
    }
    useEffect(() => {
        console.log(REF3.current);
        if (REF3 && REF3.current ) {
            REF3.current.onload = (e: any) => {
                console.log(e.target);
                console.log(e.currentTarget.width);
            }
        }

    }, [])
    return (
        <div onClick={logRef}>
            <div className="ref" ref={REF1}>1111</div>
            <div className="ref" ref={REF2}>2222</div>
            <img src={LOGO} alt="" ref={REF3} />
        </div>
    )
}
export default TestRef;
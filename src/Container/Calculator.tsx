import React, { useState } from 'react';
import Temperature from '../Components/Temprature';

const Calculator:React.FunctionComponent = ()=>{

    const [temp,setTemp] = useState('37');
    const [scale,setScale] = useState('c');

    const changedTempHandler:(a:string,b:string)=>void = (curTemp,curScale)=>{
        setTemp(curTemp);
        setScale(curScale);
    }


    const toCelsius:(a:number) => number = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
      }
      
    const toFahrenheit : (a:number) => number= (celsius)=>{
        return (celsius * 9 / 5) + 32;
      }


    const changeStringToFloat:(convert: (e: number) => number) => string = (convert)=>{
        const input = parseFloat(temp);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }


    const tempCelsius = (scale==='c')?temp:changeStringToFloat(toCelsius);
    const TempFarenheit = (scale==='f')?temp:changeStringToFloat(toFahrenheit);


    return (
        <div>
            <h1>Welcome from LINUX Ubuntu</h1>
            <h3 className='text-center mt-12 font-semibold text-xl'>Hotness Calculator</h3>
            <div className = 'p-16 m-16 border-4 border-red-400 flex justify-center'>
                <Temperature scale='c' temp={tempCelsius} changedTemp={changedTempHandler}/>
                <Temperature scale='f' temp={TempFarenheit} changedTemp={changedTempHandler}/>
            </div>
        </div>
    );
}

export default Calculator;
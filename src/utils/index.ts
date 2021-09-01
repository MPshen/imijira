import {useEffect,useState} from "react";
//export const isFalse = (value) => value === 0?false:!value
// export const cleanObject = (object) => {
//     const result = {...object}
//     Object.keys(result).forEach(key =>{
//         const value = result[key]
//         if(isFalse(value)){
//             delete result[key]
//         }
//     })
//     return result
// }

export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback();
        
    }, [])
}

export const useDebounce = (value:any,delay?:number) => {
    const [debounceValue, setdebounceValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout( () => setdebounceValue(value),delay )
        return () => clearTimeout(timeout)        
    }, [value,delay])

    return debounceValue
}
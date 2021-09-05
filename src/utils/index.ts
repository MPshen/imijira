import {useEffect,useState} from "react";
export const isFalse = (value:unknown) => (value === 0?false:!value);
export const isVoid = (value:unknown) => value === undefined || value === null || value === '';
export const cleanObject = (object:{[key:string]:unknown}) => {
    const result = {...object}
    Object.keys(result).forEach((key:string) =>{ 
        const value = result[key]
        if(isVoid(value)){
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps       
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


export const resetRoute = () => window.location.href = window.location.origin

/** homework01 */
export const useArray = <T>(initialArray: T[]) => {
    //type homework01 here
    const [value, setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value]
            copy.splice(index,1)
            setValue(copy)
        }
    }
};
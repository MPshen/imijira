import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject } from ".";

/**
 * 返回页面url中，指定键的参数值
 */

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
    const [searchParams, setSearchParam] = useSearchParams()
    return [
        useMemo(
            () => keys.reduce((prev ,key) => {
            return {...prev, [key]:searchParams.get(key) || ''}
        }, {} as { [key in K] : string }),
        [searchParams],
    ),
    (params: Partial<{[key in K]: unknown}>) => {
        //iterator
        const o = cleanObject({...Object.fromEntries(searchParams),...params}) as URLSearchParamsInit
        return setSearchParam(o)
    }
    ] as const
}

import { useLogs } from "@usedapp/core"
import { useMemo } from "react"
import { hexToStrColor } from "../../utils/ColorUtils"

import { contract } from ".."

export type FloorItem = {
    ownerName: string,
    message: string,
    link: string,
    color: string,
    windowsTint: string
}

//useMemo değişince calisiyor
export const useFloors = () => {
    const logs = useLogs({
        contract,
        event: "NewFloor",
        args: [null]
    })



    const floors = useMemo(() => {
        return (logs?.value?.map((log) => {
            const floor: FloorItem = {
                ownerName: log.data.ownerName,
                message: log.data.message,
                link: log.data.link,
                color: hexToStrColor(log.data.color._hex),
                windowsTint: hexToStrColor(log.data.windowsTint._hex),
            }
            return floor
        }))
    }, [logs?.value])

    return {
        floors,
    }


}



import { useState } from "react"
import { getUserData, setUserData } from "../api/util"

const useSessionStorage = (defaultValue) => {
    const [user, setUser] = useState(() => {
        const storedUser = getUserData()

        return storedUser || defaultValue
    })

    const setSessionStorageValue = (value) => {
      setUserData(value)
      setUser(value)
    }

    return [
        user, setSessionStorageValue
    ]
}

export default useSessionStorage
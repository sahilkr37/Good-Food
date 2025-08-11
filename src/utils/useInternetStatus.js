//React custom Hooks

import { useState, useEffect } from "react"

const useInternetStatus = () => {
    const [onlineStatus, updateOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener('offline', () => {
            updateOnlineStatus(false);
        })
        window.addEventListener('online', () => {
            updateOnlineStatus(true)
        })
    })
    return onlineStatus
}
export default useInternetStatus
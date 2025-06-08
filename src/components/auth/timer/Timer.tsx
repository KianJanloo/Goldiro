import React, { useState, useEffect } from 'react'

const Timer = ({ email }: { email: string }) => {
    const [timer, setTimer] = useState<number | null>(null)
    const [canResend, setCanResend] = useState(true)

    useEffect(() => {
        if (timer === null || timer === 0) return

        const interval = setInterval(() => {
            setTimer(t => (t !== null ? t - 1 : null))
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    useEffect(() => {
        if (timer === 0) {
            setCanResend(true)
            setTimer(null)
        }
    }, [timer])

    const handleResend = () => {
        if (!canResend || !email) return
        setTimer(120)
        setCanResend(false)
    }

    const isButtonDisabled = !canResend || !email

    return (
        <button
            type="button"
            onClick={handleResend}
            disabled={isButtonDisabled}
            className={`px-4 py-2 rounded-2xl text-sm transition ${!isButtonDisabled ? 'bg-gold text-gold-foreground cursor-pointer' : 'bg-secondary/50 text-foreground/50 cursor-not-allowed'}`}
        >
            {canResend
                ? 'ارسال کد'
                : `ارسال مجدد تا ${Math.floor((timer ?? 0) / 60)}:${((timer ?? 0) % 60).toString().padStart(2, '0')}`}
        </button>
    )
}

export default Timer

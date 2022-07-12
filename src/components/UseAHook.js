import { useWebSocket } from 'ahooks';
import React, { useEffect } from 'react'

export default function UseAHook() {
    const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(
        'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm',
      );

    useEffect(() => {
        console.log('readyState', latestMessage?.data);
    },[latestMessage])
    
  return (
    <div>UseAHook</div>
  )
}

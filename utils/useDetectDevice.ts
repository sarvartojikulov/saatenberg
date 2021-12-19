import {useEffect, useState} from 'react';



const useDeviceDetect = () => {
	const [device, setDevice] = useState<Record<string,boolean>>({mobile: false, tablet: false, desktop: false});

	useEffect(() => {
    console.log("in device hook :::");
    const window_width = window.outerWidth;
    if(window_width > 1020){
      return setDevice(Object.assign(device,{desktop: true}))
    } else if(window_width > 780) {
      return setDevice(Object.assign(device,{tablet: true}))
    } else if(window_width > 320 ) {
      return setDevice(Object.assign(device,{mobile: true}))
    }
	}, [])

	return device
};

export default useDeviceDetect;
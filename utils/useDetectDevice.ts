import {useEffect, useState} from 'react';



const useDeviceDetect = () => {
	const [device, setDevice] = useState<Record<string,boolean>>({mobile: false, tablet: false, desktop: false});

	useEffect(() => {
    console.log("detecting");
    
    const window_width = window.innerWidth;
    switch (true) {
      case window_width > 320:
        setDevice(Object.assign(device,{mobile: true}))
        break;
      case window_width > 780:
        setDevice(Object.assign(device,{tablet: true}))
        break;
      case window_width > 1240:
        setDevice(Object.assign(device,{desktop: true}))
        break;
      default:
        break;
    }
	}, [])

	return device
};

export default useDeviceDetect;
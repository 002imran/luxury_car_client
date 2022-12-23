import { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `luxuryCar-${title}`;
    },[title])
};

export default useTitle;
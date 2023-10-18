import { useEffect, useState } from 'react';

export default function useLoadingEffect({navigation, targetScreen}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: targetScreen }],
        });
    }, 1000);

    return () => {
        clearTimeout(timer);
    };
}, [navigation]); // Make sure to include navigation as a dependency

  return {
    isLoading,
    useEffect,
    
  };
}
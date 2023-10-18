import { useState } from 'react';

export default function useEnableButton() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEnable = () => { 
    setIsEnabled(true);
  };

  const handleDisable = () => {
    setIsEnabled(false);
  };

  return {
    setIsEnabled,
    isEnabled,
    handleEnable,
    handleDisable
  };
}
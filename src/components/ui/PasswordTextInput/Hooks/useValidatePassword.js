import { useState } from 'react';

export default function useValidatePassword() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => { 
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return {
    setIsFocused,
    isFocused,
    handleFocus,
    handleBlur
  };
}
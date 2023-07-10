import { useRef } from 'react';

type Param = (pastedText: string) => void;

export function usePasteOnButtonClick(func: Param) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    navigator.clipboard.readText().then((pastedText) => {
      func(pastedText)
    });
  };

  return { inputRef, handleClick };
};


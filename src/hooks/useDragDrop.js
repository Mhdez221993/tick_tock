import { useEffect, useRef } from "react";

export default function useDragDrop() {
  const dropRef = useRef();

  function handleDrag(e){
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      console.log(file);
    }
  }

  useEffect(() => {
    const dropErea = dropRef.current;
    dropErea.addEventListener('dragover', handleDrag);
    dropErea.addEventListener('drop', handleDrop);

    return () => {
      dropErea.removeEventListener('dragover', handleDrag);
      dropErea.removeEventListener('drop', handleDrop);
    }
  })

  return { dropRef };
}

import { useEffect, useRef } from "react";

export default function useDragDrop(onDrop) {
  const dropRef = useRef();
  const inputRef = useRef();

  function handleDrag(e){
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      onDrop(file);
      e.dataTransfer.clearData();
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
  });

  function selectFile() {
    inputRef.current.click();
  }

  function onSelectFile(e) {
    const file = e.target.files[0];
    if (file) {
      onDrop(file);
    }
  }

  return { dropRef, inputRef, selectFile, onSelectFile };
}

import { useState } from "react";

export default function useFirebaseUpload(user) {
  const [file, setFile] = useState(null);
  const [uploadTask, setUploadTask] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');

  function handleUpload(file) {
    setFile(file);
    setUploading(true);
  }

  return { handleUpload };
}

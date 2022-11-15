import { storage } from "lib/firebase";
import { useState } from "react";
import shortid from "shortid";

export default function useFirebaseUpload(user) {
  const [file, setFile] = useState(null);
  const [uploadTask, setUploadTask] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');

  function handleUpload(file) {
    const uploadId = shortid();
    setFile(file);
    setUploading(true);
    storage.ref(`uploads/${user.uid}/${uploadId}`).put(file);
  }

  return { handleUpload };
}

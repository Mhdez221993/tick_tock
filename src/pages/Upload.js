import DraftEditor from "components/DraftEditor";
import useAuthUser from "context/userContext";
import useDragDrop from "hooks/useDragDrop";
import useFirebaseUpload from "hooks/useFirebaseUpload";
import UploadCircleIcon from "icons/UploadCircleIcon";
import toast from "react-hot-toast";

export default function Upload() {
  const [user] = useAuthUser();
  const { handleUpload, cancelUpload, file, videoUrl, isUploading, uploadProgress } = useFirebaseUpload(user);

  return (
    <div className="u-container">
      <div className="u-wrapper">
        <div className="u-inner">

          <div className="u-title">
            Upload Video
            <div className="u-subtitle">
              This video will be published to {user.username}
            </div>
          </div>

          <div className="u-content">
            { videoUrl && <UploadPreview file={file} videoUrl={videoUrl} />}
            {isUploading && <UploadProgress cancelUpload={ cancelUpload } file={file} uploadProgress={uploadProgress} />}
            <UploadSelectFile isUploading={ isUploading } videoUrl={ videoUrl } handleUpload={ handleUpload } />
            <UploadForm />
          </div>
        </div>

      </div>
    </div>
  );
}

function UploadPreview({ file, videoUrl }) {
  return (
    <div className="u-preview-container">
      <div className="u-preview-wrapper">
        <button className="u-preview-delete-button">
          <img src="/delete.svg" alt="Delete" className="u-preview-delete-icon" />
        </button>
        <video src={videoUrl} autoPlay loop muted className="u-preview-video"></video>
      </div>
      <div className="u-preview-file-size">{ Math.round(file.size / 1000000) } MB</div>
    </div>
  );
}

function UploadProgress({ file, uploadProgress, cancelUpload }) {
  return (
    <div className="u-progress-container">
      <div className="u-progress-circle-container">

        <div className="u-progress-circle">
          <UploadCircleIcon progress={ uploadProgress } />
          <img
            onClick={ cancelUpload }
            src="/close.svg"
            alt="Close"
            className="u-progress-close-icon"
            style={{
              marginTop: -27
            }}
          />
          <div className="u-progress-percentage">{ uploadProgress }</div>
          <div className="u-progress-file-name-container"><span className="u-progress-file-name">{ file.name }</span></div>
        </div>

        <div className="u-progress-file-size"> { Math.round(file.size / 1000000) } MM</div>
      </div>
    </div>
  );
}

function UploadSelectFile({ handleUpload, isUploading, videoUrl }) {
  const { dropRef, inputRef, selectFile, onSelectFile } = useDragDrop(getVideoDuration);

  function getVideoDuration(file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const media = new Audio(reader.result);
      media.onloadedmetadata = () => {
        const duration = Math.round(media.duration);
        if (duration > 180) {
          toast("Video is over the 3-minute limit", {
            style: {
              fontFamily: 'proxima-regular',
              borderRadius: 10,
              background: "#333",
              color: '#fff'
            }
          })
        } else {
          handleUpload(file);
        }
      }
    }

    reader.readAsDataURL(file);
  }

  return (
    <div
      onClick={selectFile}
      ref={dropRef}
      className={`u-select-file-container ${isUploading} || ${videoUrl} ? "empty" : ""`}
    >
      <div className="u-select-file-wrapper">
        <img src="/cloud-icon.svg" alt="Cloud icon" className="u-select-file-icon" />
        <div className="u-select-file-title">Select video to upload</div>
        <div className="u-select-file-subtitle">Or drap and drop a file</div>
        <br className="u-select-file-spacer" />
        <ul className="u-select-file-specs">
          <li className="u-select-file-type">MP4 or WebM</li>
          <li className="u-select-file-dimentions">720x1280 resolution or higher</li>
          <li>Up to 180 seconds</li>
        </ul>
      </div>
      <input
        ref={inputRef}
        onChange={onSelectFile}
        type="file"
        id="file-input"
        accept="video/mp4, video/webm"
        className="u-select-file-input"
      />
    </div>
  );
}

function UploadForm() {
  return (
    <div className="u-form-container">
      <div className="u-form-wrapper">
        <div className="u-form-inner">

          <div className="u-form-header"><span
          className="u-form-title">Caption</span><span
          className="u-form-length-container"><span
          className="u-form-length">0 / 150</span></span></div>

          <div className="u-form-input">
            <DraftEditor></DraftEditor>
          </div>
        </div>

        <div className="u-form-action"><button
        className="u-form-discard">Discard</button><button
        className="u-form-submit">Post</button></div>
      </div>
    </div>
  );
}

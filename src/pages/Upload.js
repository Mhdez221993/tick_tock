
export default function Upload() {
  return (
    <div className="u-container">
      <div className="u-wrapper">
        <div className="u-inner">

          <div className="u-title">
            Upload Video
            <div className="u-subtitle">
              This video will be published to username
            </div>
          </div>

          <div className="u-content">
            {/* <UploadPreview />
            <UploadProgress /> */}
            <UploadSelectFile />
            <UploadForm />
          </div>
        </div>

      </div>
    </div>
  );
}



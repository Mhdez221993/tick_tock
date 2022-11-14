import DraftEditor from "components/DraftEditor";

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

function UploadPreview() {
  return "uploadpreview";
}

function UploadProgress() {
  return "uploadprogress";
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

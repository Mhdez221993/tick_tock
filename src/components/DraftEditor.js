import { MentionSuggestions } from "@draft-js-plugins/mention";
import { Editor } from "draft-js";

export default function DraftEditor() {
  return (
    <div className="editor-container">
      <div className="editor-wrapper">
        <div className="editor-inner">
          <div>
            <Editor />
            <MentionSuggestions />
          </div>
        </div>
      </div>
      <button className="editor-mention-button"><img src="/at-icon.svg" alt="At icon"
      className="editor-mention-icon" /></button><button
      className="editor-hashtag-button"><img src="/hashtag-icon.svg" alt="Hashtag Icon"
      className="editor-hashtag-icon" /></button></div>
  );
}

function Entry(props) {
  const { mention, theme, searchValue, isFocused, ...parentProps } = props;

  return (
    <div {...parentProps}>
      <div className="entry-container">
        <div className="entry-container-left">
          <img src={mention.photoURL} className="entry-avatar" alt="" />
        </div>

        <div className="entry-container-right">
          <div className="entry-text">{mention.name}</div>

          <div className="entry-title">{mention.displayName}</div>
        </div>
      </div>
    </div>
  );
}

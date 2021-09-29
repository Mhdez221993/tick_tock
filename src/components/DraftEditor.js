export default function DraftEditor() {
  return "drafteditor";
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

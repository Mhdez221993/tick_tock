import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, { defaultSuggestionsFilter } from "@draft-js-plugins/mention";
import db from "lib/firebase";
import { useMemo, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function DraftEditor({
  editorState,
  setEditorState,
  onInputChange,
  maxLength = 150
}) {
  const [usersCol] = useCollectionData(db.collection("users"));

  const users = usersCol?.map((user) => ({
    ...user,
    name: user.username
  }))

  const [open, setOpen] = useState(false);

  const [suggestions, setSugestions] = useState(users?.slice(0, 5));

  const editorRef = useRef();

  function onSearchChange({ value }) {
    setSugestions(defaultSuggestionsFilter(value, users));
  }

  const { plugins, MentionSuggestions } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, [])

  return (
    <div className="editor-container">
      <div className="editor-wrapper">
        <div className="editor-inner">
          <div onClick={() => {
            editorRef.current.focus();
          }}>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              plugins={plugins}
              ref={editorRef}
            />

            <MentionSuggestions
              entryComponent={Entry}
              open={open}
              onOpenChange={open => setOpen(open)}
              suggestions={suggestions || []}
              onSearchChange={onSearchChange}
            />
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

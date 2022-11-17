import { createMentionPlugin } from "@draft-js-plugins/mention";
import { Editor } from "draft-js";
import db from "lib/firebase";
import { useMemo, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function DraftEditor({ editorState, setEditorState, onInputChange, maxLength = 150 }) {
  const [usersCol] = useCollectionData(db.collection('users').limit(5));

  const users = usersCol?.map(user => ({
    ...user,
    name: user.username
  }))

  const [open, setOpen] = useState(false);

  const [suggestions, setSugestions] = useState(users);

  const editorRef = useRef();

  const { plugin, MentionSuggestions } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    const { MentionSuggestions } = mentionPlugin;
    const plugin = [mentionPlugin];
    return { plugin, MentionSuggestions };
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
              plugin={plugin}
              ref={editorRef}
            />

            <MentionSuggestions
              entryComponent={Entry}
              open={open}
              onOpenChange={open => setOpen(open)}
              suggestions={suggestions || []}
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

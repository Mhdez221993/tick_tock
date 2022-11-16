import Modal from "components/Modal";
import useDiscardModal from "context/discardModalContext";

export default function DiscardModal({ onConfirm }) {
  const { isDiscardOpen, closeDiscard } = useDiscardModal();

  return (
    <Modal open={isDiscardOpen} onClose={ closeDiscard } >
      <div className="discard-modal-container">
        <div className="discard-modal-title-container">
          <div className="discard-modal-title">Discard this post?</div>
          <div className="discard-modal-subtitle">
            The video and all edits will be discarded
          </div>
        </div>

        <button className="discard-modal-confirm" onClick={onConfirm}>Discard</button>
        <button className="discard-modal-discard" onClick={ closeDiscard }>Continue editing</button>
      </div>
    </Modal>
  );
}

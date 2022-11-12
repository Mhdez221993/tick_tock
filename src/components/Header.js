import SearchBar from "components/SearchBar";
import useAuthUser from "context/userContext";
import InboxIcon from "icons/InboxIcon";
import MessageIcon from "icons/MessageIcon";
import UploadIcon from "icons/UploadIcon";
import { Link } from "react-router-dom";

export default function Header() {
  const [user] = useAuthUser();

  if (!user) return null;

  return (
    <div className="h-container">
      <div className="h-content">

        <div className="h-wrapper">
          <Link to="/" className="h-link">
            <img src="/tiktok-logo.svg" alt="tiktok" className="h-icon" />
          </Link>
        </div>

        <SearchBar />

        <div className="h-menu-right">
          <Link to="/upload" className="h-menu-upload">
            <UploadIcon />
          </Link>

          <MessageIcon />

          <InboxIcon />

          <div className="h-avatar-container"><img src={user.photoURL} alt={user.username} className="h-avatar" /></div>
        </div>
      </div>
    </div>
  );
}

import Header from "components/Header";
import Feed from "pages/Feed";
import NotFound from "pages/NotFound";
import Profile from "pages/Profile";
import Upload from "pages/Upload";
import VideoPost from "pages/VideoPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AuthApp() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path="/">
          <Feed />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>

        <Route path="/:username/video/:postId">
          <VideoPost />
        </Route>

        <Route path="/:username">
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

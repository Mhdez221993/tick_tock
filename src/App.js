import AuthApp from "AuthApp";
import Loader from "components/Loader";
import useAuthUser from "context/userContext";
import UnAuthApp from "UnAuthApp";

export default function App() {
  const [user, loading] = useAuthUser();

  if (loading && !user) return <Loader />

  return user ? <AuthApp /> : <UnAuthApp />;
}

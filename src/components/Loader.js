export default function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img style={{ height: 40 }} src="/loading.gif" alt="loading" />
    </div>
  );
}
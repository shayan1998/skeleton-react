import Skeleton from "./Skeleton";

function App() {
  return (
    <div className="app">
      <Skeleton>
        <Skeleton.Row alignItems="center" justifyContent="space-between">
          <Skeleton.Circle radius="40px" />
          <Skeleton.Rect width="70px" height="20px" />
        </Skeleton.Row>
        <Skeleton.Rect height="220px" />
      </Skeleton>
      <Skeleton>
        <Skeleton.Row alignItems="center" justifyContent="space-between">
          <Skeleton.Square width="100px" />
          <Skeleton.Col>
            <Skeleton.Rect />
            <Skeleton.Rect height="10px" />
            <Skeleton.Rect height="10px" />
            <Skeleton.Rect height="10px" />
          </Skeleton.Col>
        </Skeleton.Row>
        <Skeleton.Rect height="10px" />
        <Skeleton.Rect height="10px" />
        <Skeleton.Row justifyContent="center">
          <Skeleton.Rect width="100px" height="40px" margin="15px 10px" />
          <Skeleton.Rect width="100px" height="40px" margin="15px 10px" />
        </Skeleton.Row>
      </Skeleton>
    </div>
  );
}

export default App;

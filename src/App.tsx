import Skeleton from "./Skeleton";

function App() {
  return (
    <div className="app">
      <Skeleton>
        <Skeleton.List count={5}>
          <Skeleton.Row>
            <Skeleton.Circle />
            <Skeleton.Col>
              <Skeleton.Rect />
              <Skeleton.Rect width="50%" />
            </Skeleton.Col>
          </Skeleton.Row>
        </Skeleton.List>
        end
        <Skeleton.Row>
          <Skeleton.Circle />
          <Skeleton.Rect full />
        </Skeleton.Row>
        <Skeleton.Col alignItems="center">
          <Skeleton.Circle radius="70px" />
          <Skeleton.Rect width="50%" />
          <Skeleton.Rect width="50%" />
          <Skeleton.Row>
            <Skeleton.Square />
            <Skeleton.Square />
            <Skeleton.Square />
          </Skeleton.Row>
        </Skeleton.Col>
      </Skeleton>
    </div>
  );
}

export default App;

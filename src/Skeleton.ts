import Skeleton from "./components/Skeleton";
import Rect from "./components/Rect";
import Square from "./components/Square";
import Circle from "./components/Circle";
import Row from "./frame/Row";
import Col from "./frame/Col";
import Center from "./frame/Center";
import List from "./module/List";

export default Object.assign(Skeleton, {
  Rect,
  Square,
  Circle,

  // frames
  Row,
  Col,
  Center,

  // modules
  List,
});

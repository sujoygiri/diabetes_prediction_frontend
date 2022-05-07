import { HashLoader } from "react-spinners";
import './Loading.css';

const Loading = ({loading}) => {
  return (
    <>
    <div className="sweet-loading">
      <HashLoader color="red" loading={loading}/>
    </div>
    </>
  )
}

export default Loading;
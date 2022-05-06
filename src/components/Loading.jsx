import { HashLoader } from "react-spinners";

const Loading = ({loading}) => {
  return (
    <>
    <HashLoader color="#1ed9d3" loading={loading}/>
    </>
  )
}

export default Loading;
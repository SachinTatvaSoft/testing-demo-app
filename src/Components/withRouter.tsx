import { useNavigate } from "react-router-dom";

const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const history = useNavigate();

    return <Component history={history} {...props} />;
  };

  return Wrapper;
};

export default withRouter;

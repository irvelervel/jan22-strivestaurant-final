// withRouter creates a HOC -> Higher Order Component
// (which is basically a component enriched with MORE PROPS that the ones he came with)

import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  );
};

export default withRouter;
// the component you're creating with withRouter maintains all the props he originally had
// BUT it will also receive 3 new props: location, navigate and params

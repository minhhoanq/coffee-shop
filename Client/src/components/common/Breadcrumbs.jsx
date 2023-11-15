import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {

    const routes = [
        { path: "/", breadcrumb: "Home" },
    ];

    const breadcrumbs = useBreadcrumbs(routes);
    console.log(breadcrumbs)

  return (
      <>
        {breadcrumbs.map(({ match, breadcrumb }, index, self) => {
            if(index > 0) {
                return <Link to={match.pathname} key={index}
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "rgba(0, 0, 0, 0.8)",
                        }}
                    >
                    {breadcrumb}
                    {index !== self.length - 1 && <> / </>}
                </Link>
            }
        })}
      </>
  );
};

export default Breadcrumbs;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { createStyles, em } from "@mantine/core";
import { Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// const useStyles = createStyles(() => ({
//   homeVedio: {
//     padding: "150px 0",
//   },
//   //   bgTheme: {
//   //     backgroundImage: "url(https://wallsproperty.netlify.app/images/bg18.jpg)",
//   //     width: "100%",
//   //     backgroundPosition: "center center",
//   //     backgroundSize: "cover",
//   //   },

//   container: {
//     width: "100%",
//     paddingRight: "15px",
//     paddingLeft: "15px",
//     marginRight: "auto",
//     marginLeft: "auto",

//     [`@media (max-width: ${em(576)})`]: {
//       maxWidth: "540px",
//     },
//   },

//   row: {
//     display: "flex",
//     flexWrap: "wrap",
//     marginRight: "-15px",
//     marginLeft: "-15px",
//   },

//   justifyContent: {
//     justifyContent: "center !important",
//   },
// }));

export default function HomeVedio() {
  // const { classes } = useStyles();
  return (
    <div>
      <section className="home__video bg-theme-v6">
        <div style={{ zIndex: 1, position: "relative" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 mx-auto">
              <div className="home__video-area text-center">
                <Link to="#" className="play-video ">
                  <FontAwesomeIcon icon={faPlay} />
                </Link>
                <h2 className="text-white">
                  The #1 Place For Commercial Property
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

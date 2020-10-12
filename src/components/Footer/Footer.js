import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    position: "absolute",
    bottom: 0,
  },
  media: {
    height: 200,
  },
});

// footer {
//   clear: both;
//   position: relative;
//   height: 200px;
//   margin-top: -200px;
// }

const style = {
  color: "gray",
};
export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            KardeşlerCoding
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We are KardeşlerCoding and this web app was made by <br />
            <a
              style={style}
              rel={"noopener noreferrer"}
              target={"_blank"}
              href={"https://github.com/fadime94"}
            >
              Fadime Özdemir
            </a>
            <br />
            <a
              style={style}
              rel={"noopener noreferrer"}
              target={"_blank"}
              href={"https://github.com/jennethydyrova"}
            >
              Jennet Hydyrova
            </a>
            <br />
            <a
              style={style}
              rel={"noopener noreferrer"}
              target={"_blank"}
              href={"https://github.com/ihab-sensei"}
            >
              Ihab Almashhadani{" "}
            </a>
            <br />
            <a
              style={style}
              rel={"noopener noreferrer"}
              target={"_blank"}
              href={"https://github.com/orcunsagirsoy"}
            >
              Orçun Sağırsoy
            </a>
            <br />
            <a
              style={style}
              rel={"noopener noreferrer"}
              target={"_blank"}
              href={"https://github.com/bertacsevercan"}
            >
              Bertaç Severcan
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

import React from "react";
import Layout from "components/Layout";
import BreadcrumbBar from "components/BreadcrumbBar";
import { GridList, GridListTile } from "@material-ui/core/";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import {tile1Data, tile2Data} from "components/images";

const Events = (props) => {
  const getGridListCols = () => {
    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 2;
    }
    if (isWidthUp("sm", props.width)) {
      return 1;
    }
    return 1;
  };
  return (
    <Layout>
      <div className="header-container events-page">
      <BreadcrumbBar page="Events" />
        <h1 className="activities">Events</h1>
        <hr />
        <div className="event-container">
          <h2 className="event-subtitle">Grew Multifold across 2020-2023</h2>
          <p className="event-description">
            Sahodaya, a concept literally meaning ‘’Rising Together’ came into
            being in the year 1986, to facilitate synergy of ideas among the
            schools of CBSE for excellence in the education. A Sahodaya School
            Complex is a group of neighbourhood schools voluntarily coming
            together to share their innovative practices in all aspects of
            school education including curriculum design, evaluation and
            pedagogy and also providing support services for teachers and
            students.
          </p>
          {/* Images Grid */}
          <GridList
            cellHeight={260}
            cols={getGridListCols()}
            spacing={4}
            style={{ width: "100%" }}
          >
            {tile1Data.map((tile) => (
              <GridListTile
                key={tile.id}
                cols={!isWidthUp("md", props.width) ? 1 : tile.cols || 1}
              >
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>

        {/*  */}
        <hr />
        <hr />
        <hr />

        <div className="event-container">
          <h2 className="event-subtitle">Our Journey Till 2020</h2>
          {/* Images Grid */}
          <GridList
            cellHeight={260}
            cols={getGridListCols()}
            spacing={4}
            style={{ width: "100%" }}
          >
            {tile2Data.map((tile) => (
              <GridListTile
                key={tile.id}
                cols={!isWidthUp("md", props.width) ? 1 : tile.cols || 1}
              >
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </Layout>
  );
};

export default withWidth()(Events);

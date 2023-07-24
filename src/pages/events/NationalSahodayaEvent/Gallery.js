import { grid1, grid2, grid3 } from "./images";
import { GridList, GridListTile } from "@material-ui/core/";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const Gallery = (props) => {
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
        <div className="header-container events-page">
            <h1 className="activities">Maharashtra Cultural Theme</h1>
            <hr />
            <div className="event-container">
                <h2 className="event-subtitle">Welcoming of Guest Maharashtra Cultural theme and Safa to Guests</h2>
                <GridList
                    cellHeight={260}
                    cols={getGridListCols()}
                    spacing={4}
                    style={{ width: "100%" }}
                >
                    {grid1.map((tile) => (
                        <GridListTile
                            key={tile.id}
                            cols={!isWidthUp("md", props.width) ? 1 : tile.cols || 1}
                        >
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            {/* Digital Registration */}
            <h1 className="activities">Digital Registration</h1>
            <hr />
            <div className="event-container">
                <h2 className="event-subtitle">Welcoming of Guest with On spot Registration with Printed Logo bag, Lanyard, Name Card, Agenda and Information Brochures with Notepad and Pen</h2>
                <GridList
                    cellHeight={260}
                    cols={getGridListCols()}
                    spacing={4}
                    style={{ width: "100%" }}
                >
                    {grid2.map((tile) => (
                        <GridListTile
                            key={tile.id}
                            cols={!isWidthUp("md", props.width) ? 1 : tile.cols || 1}
                        >
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            {/* Stage Design */}
            <h1 className="activities">Education Summits</h1>
            <hr />
            <div className="event-container">
                <h2 className="event-subtitle">Stage Design and Ideas with Event LIT letter Signage on stage</h2>
                <GridList
                    cellHeight={260}
                    cols={getGridListCols()}
                    spacing={4}
                    style={{ width: "100%" }}
                >
                    {grid3.map((tile) => (
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
    )
}

export default withWidth()(Gallery);
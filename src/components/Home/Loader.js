import React from 'react';

class Loader extends React.Component
{
    render()
    {
        if(this.props.IsLoading === "none")
        {
            return(
                <div id="group-loading-screen">
                    <div className="crawler is-large"><div></div><div></div><div></div></div>
                </div>
            );
        }
        else
        {
            return(
                <div id="group-loading-screen" style={{"display":"none"}}>
                    <div className="crawler is-large"><div></div><div></div><div></div></div>
                </div>
            );
        }
    }
}

export default Loader;
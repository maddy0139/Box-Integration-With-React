import React from 'react';

class Loader extends React.Component
{
    render()
    {
        if(!this.props.IsLoaded)
        {
            return(
                <div id={this.props.id}>
                    <div className="crawler is-large"><div></div><div></div><div></div></div>
                </div>
            );
        }
        else
        {
            return(
                <div id={this.props.id} style={{"display":"none"}}>
                    <div className="crawler is-large"><div></div><div></div><div></div></div>
                </div>
            );
        }
    }
}

export default Loader;
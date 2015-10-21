var React = require('react');




var ToolTip = React.createClass({ 
  render: function(){ 
    var style = this.props.hover ? hoverStyle : generalStyle;
    return ( 
      <div className='hint' style={style}>
        <div>{this.props.text}</div>
        <div style={{width: 100}} className='hintContent'>Hello</div> 
      </div>
      );
  }
});

module.exports = ToolTip;
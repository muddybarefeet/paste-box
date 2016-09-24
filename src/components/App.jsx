var React = require('react');

var PasteBox = require('./PasteBox.jsx');

var APP = React.createClass({
  
  render: function(){
    return (
      <div className="container">
        <PasteBox contentProp="Hi" />
      </div>
    );
  }
})

module.exports = APP;
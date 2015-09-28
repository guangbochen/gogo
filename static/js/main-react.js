(function() {
    'use strict';

    var HelloMessage = React.createClass({
      displayName: 'HelloMessage',
      render: function render() {
          return React.createElement( 'div', null, 'Hello ', this.props.name);
        }
    });

    var mountNode = document.getElementById('react');
    React.render(React.createElement(HelloMessage, { name: 'React' }), mountNode);

})();

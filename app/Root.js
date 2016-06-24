import React,{ Component } from 'react';
import { render } from 'react-dom';
import Yes from './Yes';
class Hello extends Component{
  render(){
    const initialProps = {
      __html : this.props
    }

    return(
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <p>hello</p>
          <Yes/>
          <script
          id='initial-props'
          type='application/json'
          dangerouslySetInnerHTML={initialProps} />
          <script src='/bundle.js' />
        </body>
        
      </html>
    )
  }
}
function safeStringify (obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
export default Hello;

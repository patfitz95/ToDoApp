import React from 'react';

function FirstComponent (props) {
    console.log("this is firstComponent Props", props.items)
    return (
       <div>
        <ul>{props.items.map((item, index) => {
            return <li key={index}>{props.items[index]}</li>
           })}
          </ul>
          <h1>This is Our Listing Component</h1>
        </div> 
    )
}

export default FirstComponent;
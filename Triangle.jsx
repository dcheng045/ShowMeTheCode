import React from 'react' // can be ignored

const Triangle = (props) => {
  let borderColor = props.notAutomated ? {borderColor: 'white transparent transparent transparent'} :
    {borderColor: 'black transparent transparent transparent'}
  let offset = props.notAutomated? {left: 41} : {right: 41}
  let style = Object.assign({}, defaultStyle, offset, borderColor)
  return <div style={style} />
}

let defaultStyle = {
  position: 'absolute',
  top: 0,
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '20px 27px 0 20px'
}

export default Triangle

// Object.assign to concact new style
// borderColor decide the triangle direction,
// borderWidth decide whether it is an symmetrical tiangle or not

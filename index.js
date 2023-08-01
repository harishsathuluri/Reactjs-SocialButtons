const Button = props => {
  //  Write your code here.
  const {buttonName, className} = props;
  return <button className= `{button ${className}}`> {buttonName} </button>
}


const element = (
  //  Write your code here.
  <div className="bg-color">
  <div className="Content-container">
  <h1 className="heading1"> Social Buttons </h1>
  <div className="buttons-container">
  <Button buttonName="Like" className="Like-content"/>
  <Button buttonName="Comment" className="Comment-content"/>
  <Button buttonName="Share" className="Share-content"/>
  </div>
  </div>  
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

import React from 'react';

const CharacterList=(props)=>{
	return <div className="main_div_style ma4 bg-light-purple dib pa4 tc">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`}/>
			<h1 className=""> {props.name} </h1>
			<p> {props.work} </p></div>
		   
}
export default CharacterList;
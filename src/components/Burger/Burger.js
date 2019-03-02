import React from 'react'
import classes from './Burger.module.css';
import BurgerIndrigents from './BurgerIngridents/BurgrIngridents';
const burger =(props)=>{
	let transformedIndrigents=Object.keys(props.ingredients)
	                .map(igkey=>{
                   return [...Array(props.ingredients[igkey])].map((_,i)=>{
                       return <BurgerIndrigents key={igkey + i}  type={igkey}/>;
																			});
																	})
																	.reduce((arr,el)=>{
                    return arr.concat(el);
																	},[]);
																	console.log(transformedIndrigents);
																	if(transformedIndrigents.length===0){
																		transformedIndrigents=<p>Please  add ingredients</p>
																	}
   return (
				<div className={classes.Burger}>
				 <BurgerIndrigents type="bread-top"/>
					{transformedIndrigents}
					<BurgerIndrigents type="bread-bottom"/>
				</div>
			);
};
export default burger;
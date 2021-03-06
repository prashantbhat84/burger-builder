import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary';
import Burger  from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls'
import Modal  from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary'
	
const INGRIDIENT_PRICES={
			salad:0.5,
			cheese:0.4,
			meat:1.3,
			bacon:0.7
};
class BurgerBuilder extends  Component{
	state={
		ingredients:{
							salad:0,
							bacon:0,
							cheese:0,
							meat:0
		},
		totalPrice:4,
		purchasable:false,
		purchasing:false
	};
	updatePurchaseState=(ingridients)=>{
    
				const sum = Object.keys(ingridients)
				               .map(igkey=>{
                        return ingridients[igkey];
																			})
																			.reduce((sum,el)=>{
																				   return sum + el;
																			},0);
																			this.setState({purchasable:sum>0})

	};
	addIngridientHandler=(type)=>{
		const oldcount= this.state.ingredients[type];
						const updatedcount= oldcount +1;
						const updatedIngridients={
           ...this.state.ingredients
						};
						updatedIngridients[type]=updatedcount;
						const priceAddition= INGRIDIENT_PRICES[type];
						const oldPrice= this.state.totalPrice;
						const newPrice= oldPrice + priceAddition;
						this.setState({
							totalPrice:newPrice,
							ingredients:updatedIngridients
						});
						this.updatePurchaseState(updatedIngridients);

	};
	removeIngridentHandler=(type)=>{
		const oldcount= this.state.ingredients[type];
		if(oldcount<=0){
			return;
		}
						const updatedcount= oldcount -1;
						const updatedIngridients={
           ...this.state.ingredients
						};
						updatedIngridients[type]=updatedcount;
						const priceDeduction= INGRIDIENT_PRICES[type];
						const oldPrice= this.state.totalPrice;
						const newPrice= oldPrice - priceDeduction;
						this.setState({
							totalPrice:newPrice,
							ingredients:updatedIngridients
						});
						this.updatePurchaseState(updatedIngridients);


	};
	purchaseHandler=()=>{
		this.setState({purchasing:true});
	}

	purchaseCancelHandler=()=>{
		this.setState({purchasing:false});

	}
	purchaseContinueHandler=()=>{
		alert('You Continue');
	}
	render(){
		const disabledInfo={
   ...this.state.ingredients
		};
		for(let key in disabledInfo){
			disabledInfo[key]=disabledInfo[key]<=0;
		}
		return(
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					<OrderSummary  ingredients={this.state.ingredients}
					  purchaseCancelled={this.purchaseCancelHandler}
							  purchaseContinued={this.purchaseContinueHandler}
									price={this.state.totalPrice}/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				 <BuildControls  ingridientAdded={this.addIngridientHandler}
					           ingridientRemoved={this.removeIngridentHandler}
																disabled={disabledInfo}
																	price={this.state.totalPrice}
																	ordered={this.purchaseHandler}
																	purchasable={this.state.purchasable}/>
			</Aux>
		);
	}
}
export default BurgerBuilder;
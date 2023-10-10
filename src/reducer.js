export const initialState= {
    basket: [],
    user:null,
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => amount + item.price , 0);
  

const reducer=(state,action)=>{
    console.log(action)
    // console.log(action.item)
    // console.log({...state}) //state={basket: Array(0), user: null}
    switch(action.type){
        case "SET_USER":
          return {
            ...state,
            user: action.user
          }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                 ...state,              
                 basket:[...state.basket, // accessing key here
                 action.item]
                 };
            
        case 'REMOVE_FROM_BASKET':
            // logic for remvoing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                // basketItem : {id: '123458', title: 'Apple iPhone 11 (64GB) - White', price: 63999, rating: 4, image: 'https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY327_QL65_.jpg'}
              );
              
        
              if (index >= 0) {
                newBasket.splice(index, 1);
                // console.log(newBasket)
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
            return { ...state,
            basket: newBasket };
            
        default:
            return state;
    }
}
export default reducer;
// {
//     id:"123458",
//     title:"Apple iPhone 11 (64GB) - White",
//     price:63999.00,
//     rating:4,
//     image:"https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY327_QL65_.jpg"
// }
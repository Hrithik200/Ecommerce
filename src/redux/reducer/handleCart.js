const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    // console.log(state);
    switch (action.type) {
        case "ADDITEM": return [
            ...state,
            action.payload
        ]
            break;
        // console.log("Case1");
        // // Check if product is already exist 
        // const exist = state.find((x) => x.id === product.id);
        // console.log(state)



        // if (exist) {
        //     // Increse the quantity 
        //     return state.map((x) =>
        //         x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
        // }
        // else {
        //     const product = action.payload;
        //     return [
        //         ...state,
        //         {
        //             ...product,
        //             qty: 1,
        //         }
        //     ]
        // }

        case "DELITEM":
            return state = state.filter((x) => {
                return x.id !== action.payload.id
            })
            break;

        default:
            return state;
            break;
    }
}

export default handleCart;
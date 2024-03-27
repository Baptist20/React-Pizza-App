import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import PropTypes from 'prop-types'; // Import PropTypes

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

// Define prop types
UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.string.isRequired, // Example type, adjust as needed
  currentQuantity: PropTypes.number.isRequired, // Example type, adjust as needed
};

export default UpdateItemQuantity;

// function UpdateItemQuantity({ pizzaId, currentQuantity }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="flex items-center gap-2 md:gap-3">
//       <Button
//         type="round"
//         onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
//       >
//         -
//       </Button>
//       <span className="text-sm font-medium">{currentQuantity}</span>
//       <Button
//         type="round"
//         onClick={() => dispatch(increaseItemQuantity(pizzaId))}
//       >
//         +
//       </Button>
//     </div>
//   );
// }

// export default UpdateItemQuantity;

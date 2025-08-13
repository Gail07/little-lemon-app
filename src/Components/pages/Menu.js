import recipes from "../../recipes";
import Swal from "sweetalert2"

const Menu = () => {

    const handleOrderClick = (recipeId) => {
        console.log(recipeId, "clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4ccea2ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
                title: "Ordered!",
                text: "Your order has been placed.",
                icon: "success"
            });
        }
    });
    }

    return (
            <div className="menu-container">
                <div className="menu-header">
                    <h2>This weeks specials!</h2>
                    <button>Order Menu</button>
                </div>

                <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={require(`../../images/${recipe.image}`)} alt="" />
                        <div className="menu-content">
                            <div className="menu-info">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                        </div>
                        <p>{recipe.description}</p>
                        <button className="order-button" onClick={() => handleOrderClick(recipe.id)}>Order Now</button>
                    </div>)
                }
                </div>

            </div>

            
    )
}

export default Menu;
const menu = [{
        id: 1,
        title: "Classic Cheeseburger",
        category: "burger",
        price: 15,
        img: "img/burger1.jpg",
        desc: "A timeless favorite that features a juicy beef patty, melted cheese, crisp lettuce, fresh tomato, tangy pickles, and savory special sauce, all nestled between two soft buns."
    },
    {
        id: 2,
        title: "Margherita Pizza",
        category: "pizza",
        price: 16,
        img: "img/pizza1.jpg",
        desc: "This classic pizza is topped with tomato sauce, mozzarella cheese, and fresh basil. It's a simple yet delicious option that showcases the flavors of the ingredients."
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        category: "dessert",
        price: 10,
        img: "img/dessert1.jpg",
        desc: "This decadent dessert features a warm, chocolate cake with a gooey, melted chocolate center. It's often served with a scoop of vanilla ice cream and is perfect for chocolate lovers."
    },
    {
        id: 4,
        title: "BBQ Bacon Burger",
        category: "burger",
        price: 18,
        img: "img/burger2.jpg",
        desc: "This hearty burger is packed with flavor, featuring a juicy beef patty, crispy bacon, melted cheddar cheese, caramelized onions, tangy BBQ sauce, and topped off with fresh lettuce and tomato."
    },
    {
        id: 5,
        title: "Pepperoni Pizza",
        category: "pizza",
        price: 15,
        img: "img/pizza2.jpg",
        desc: "This popular pizza features tomato sauce, mozzarella cheese, and slices of spicy pepperoni. It's a savory and satisfying option that's perfect for meat lovers."
    },
    {
        id: 6,
        title: "Crème Brûlée",
        category: "dessert",
        price: 12,
        img: "img/dessert2.jpg",
        desc: "This dessert features a rich and creamy custard base that is topped with a layer of caramelized sugar. The contrast between the smooth custard and the crisp sugar topping makes for a delicious and elegant dessert."
    },
    {
        id: 7,
        title: "Veggie Burger",
        category: "burger",
        price: 10,
        img: "img/burger3.jpg",
        desc: "A delicious alternative to a meat-based burger, this veggie burger features a savory patty made from wholesome ingredients like black beans, chickpeas, and quinoa. Topped off with fresh lettuce, tomato, and tangy avocado sauce, it's a perfect meal for vegans and vegetarians."
    },
    {
        id: 8,
        title: "BBQ Chicken Pizza",
        category: "pizza",
        price: 16,
        img: "img/pizza3.jpg",
        desc: "This pizza is topped with BBQ sauce, mozzarella cheese, diced chicken, and sometimes onions and peppers. It's a sweet and tangy option that's a bit more unique than traditional pizza flavors."
    },
    {
        id: 9,
        title: "Red Velvet Cake",
        category: "dessert",
        price: 15,
        img: "img/dessert3.jpg",
        desc: "This cake features a bright red cake with a hint of cocoa powder and a rich cream cheese frosting. It's a popular dessert option that's perfect for special occasions and is known for its moist texture and subtle chocolate flavor."
    },
    {
        id: 10,
        title: "Mushroom Swiss Burger",
        category: "burger",
        price: 14,
        img: "img/burger4.jpg",
        desc: "A rich and savory burger that features a juicy beef patty, sautéed mushrooms, melted Swiss cheese, and a touch of tangy Dijon mustard, all sandwiched between two soft buns."
    },
    {
        id: 11,
        title: "Veggie Pizza",
        category: "pizza",
        price: 8,
        img: "img/pizza4.jpg",
        desc: "This pizza can be customized with a variety of vegetables such as mushrooms, onions, peppers, olives, and more. It's a great option for those looking for a lighter and healthier pizza, and it can be made with either tomato sauce or pesto sauce."
    }
];

const menuItemsContainer = document.querySelector(".menu-items");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="menu-item flex flex-col lg:flex-row shadow-lg border rounded-lg overflow-hidden">
        <img src="${item.img}" class="photo w-full lg:w-40 object-cover" alt="menu item">
        <div class="item-info">
            <header class="flex justify-between p-3 border-b-2 border-slate-300">
                <h4 class="font-semibold">${item.title}</h4>
                <p class="font-semibold text-amber-500">$${item.price}</p>
            </header>
            <p class="item-text text-slate-600 text-sm p-3">
            ${item.desc}
            </p>
        </div>
    </div>`;
    });

    displayMenu = displayMenu.join("");
    menuItemsContainer.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);

    const categoryBtns = categories.map(function (category) {
        return `<button
        class="filter-btn font-semibold capitalize border-2 border-amber-500 py-1 px-4 rounded-lg sm:hover:bg-amber-500"
        data-id="${category}" type="button">${category}</button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        // set the background colour of first (all) button
        if (btn.dataset.id === "all") {
            btn.classList.add("bg-amber-500");
        }

        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (item) {
                if (item.category === category) {
                    return item;
                }
            });

            // Remove background class from all buttons
            filterBtns.forEach(function (button) {
                button.classList.remove("bg-amber-500");
            });

            // Add background class to clicked button
            e.currentTarget.classList.add("bg-amber-500");

            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
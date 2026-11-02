
document.addEventListener("DOMContentLoaded", () => {

    // Select HTML elements
    const status = document.querySelector(".status");
    const featuredContainer = document.querySelector("#featured-products");
    const productsContainer = document.querySelector("#products");

    // Common function to create a product card
    function createProductCard(product) {

        // 1. Display the product title inside an h1 element.
        // 2. Display product ID and title inside an h2 element.
        // 3. Display the first 30 characters of the product title.
        // 4. Display the first 100 characters of the description.
        // 5. Display the product image inside a div.
        // 6. Display title, description and image inside one div.
        // 7. Display product price inside a p element.
        // 8. Display product category inside an h3 element.
        // 9. Display the product title in uppercase.
        // 10. Display the title and its character count.
        // 12. Display product ID, title and price.
        // 13. Display product image with a width of 200px.
        // 15. Display title and first 50 description characters.
        // 17. Display product title and category inside the same div.

        const card = document.createElement("article");
        card.className = "card";

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = product.category;

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.loading = "lazy";
        image.width = 200;

        imageContainer.appendChild(image);

        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.title;

        const idTitle = document.createElement("p");
        idTitle.textContent = `ID: ${product.id} | ${product.title}`;

        const shortTitle = document.createElement("p");
        shortTitle.textContent = product.title.slice(0, 30);

        const shortDescription = document.createElement("p");
        shortDescription.textContent =
            product.description.slice(0, 100) + "...";

        const upperTitle = document.createElement("p");
        upperTitle.textContent = product.title.toUpperCase();

        const characterCount = document.createElement("p");
        characterCount.textContent =
            `Title characters: ${product.title.length}`;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = `$${product.price.toFixed(2)}`;

        const productInfo = document.createElement("p");
        productInfo.textContent =
            `Product #${product.id} | $${product.price}`;

        const limitedDescription = document.createElement("p");
        limitedDescription.className = "description";
        limitedDescription.textContent =
            `${product.title}: ${product.description.slice(0, 50)}...`;

        const titleCategory = document.createElement("div");

        const titleText = document.createElement("p");
        titleText.textContent = `Title: ${product.title}`;

        const categoryText = document.createElement("p");
        categoryText.textContent = `Category: ${product.category}`;

        titleCategory.append(titleText, categoryText);

        // Add product information to the card
        card.append(
            category,
            imageContainer,
            title,
            idTitle,
            shortTitle,
            shortDescription,
            upperTitle,
            characterCount,
            price,
            productInfo,
            limitedDescription,
            titleCategory
        );

        return card;
    }


    // Common fetch function
    function fetchProducts() {

        // 19. Display Loading message before fetching API data.
        status.textContent = "Loading products...";
        status.classList.remove("error");

        featuredContainer.innerHTML = "";
        productsContainer.innerHTML = "";

        fetch("https://fakestoreapi.com/products")

            .then(response => {

                if (!response.ok) {
                    throw new Error("Unable to fetch products");
                }

                return response.json();
            })

            .then(products => {

                console.log("API Data:", products);

                // 11. Display the first five products.
                const firstFive = products.slice(0, 5);

                firstFive.forEach(product => {
                    const card = createProductCard(product);
                    featuredContainer.appendChild(card);
                });

                // 14. Display each product in a separate card.
                products.forEach(product => {
                    const card = createProductCard(product);
                    productsContainer.appendChild(card);
                });

                // 16. Display all product titles in the console and webpage.
                console.log("Product Titles:");

                const titleList = document.createElement("ul");

                products.forEach(product => {

                    console.log(product.title);

                    const listItem = document.createElement("li");
                    listItem.textContent = product.title;

                    titleList.appendChild(listItem);
                });

                // Display the title list below all products
                const titleSection = document.createElement("section");
                const titleHeading = document.createElement("h2");

                titleHeading.textContent = "Product Title List";
                titleSection.append(titleHeading, titleList);

                productsContainer.after(titleSection);

                // 18. Display a success message after loading the data.
                status.textContent =
                    `Successfully loaded ${products.length} products.`;
            })

            .catch(error => {

                console.error("API Error:", error);

                status.textContent = "Failed to load products.";
                status.classList.add("error");

                featuredContainer.textContent =
                    "Featured products are unavailable.";

                productsContainer.textContent =
                    "Products could not be displayed.";
            })

            .finally(() => {

                // 20. Display a message after the API request completes.
                console.log("API request completed.");
                status.textContent += " API request completed.";
            });
    }


    // Call the common fetch function
    fetchProducts();

});

var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./green.png",
        altText: "A pair of socks",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./green.png"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./blue.png"
            }],
        cart:0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            console.log(variantImage)
            this.image = variantImage
        }
    }
})
class cartElements{
    public get CartElements(){
        return $$("//button[text()='Add to cart']")
    }
public get cartValue(){
    return $(".shopping_cart_badge")
}

    public async addToCartElements(){
        let sizeOfCartElements=await this.CartElements.length
        console.log("size of the cart",sizeOfCartElements)
        await browser.waitUntil(async()=> await this.CartElements.length>0,{timeout: 8000,timeoutMsg: "Elements should be more than 0"})
       for (let index = 0; index < sizeOfCartElements; index++) {
        const element = await this.CartElements[index];
        await element.waitForClickable() //to ensure the element is clickable
        await element.click()
       }

        const addToCartElements = (await this.cartValue).getText()
        console.log("no of items",addToCartElements)
console.log("add to cart element",sizeOfCartElements.toString);
await browser.waitUntil(
    async () => (await addToCartElements) == sizeOfCartElements.toString(),
    {timeout: 8000,timeoutMsg: " element is equal to six"}
)
await expect(addToCartElements).toEqual(sizeOfCartElements.toString())
       }
    }

export default new cartElements()
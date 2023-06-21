class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(product) {
      // Validar que todos los campos sean obligatorios
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log("Todos los campos son obligatorios.");
        return;
      }
  
      // Validar que el campo code no se repita
      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.log("El producto con el codigo", product.code, "ya existe.");
        return;
      }
  
      // Crear un nuevo producto con un id autoincrementable
      const newProduct = {
        id: this.currentId,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock,
      };
  
      this.products.push(newProduct);
      this.currentId++;
  
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
      }
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  productManager.addProduct({
    title: "Zapatillas",
    description: "Zapatillas deportivas",
    price: 9569,
    thumbnail: "imagen1.jpg",
    code: "ZAP001",
    stock: 10,
  });
  
  
  
  const addProduct = productManager.getProducts();
  console.log("Todos los productos:", addProduct);
  
  const productById = productManager.getProductById(2);
  console.log("Producto por ID:", productById);
  
  const productByIdNotFound = productManager.getProductById(99);
  
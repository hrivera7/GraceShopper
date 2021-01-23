// code to build and initialize DB
const {
  client,
  getUsers,
  getUserById,
  getUserByUsername,
  getProducts,
  getProductById,
  createProduct,
  createUser,
  getCart,
  createCart,
  addToCart,
  checkout,
  getOrder,
  // other db methods
} = require("./index");

async function dropTables() {
  try {
    console.log("Starting to drop tables");
    client.query(`
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users CASCADE;
      `);
    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error while dropping tables!");
    throw error;
  }
}

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    await dropTables();

    // build tables in correct order
    console.log("Starting to build tables");

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar (255) NOT NULL UNIQUE,
        email varchar (255) NOT NULL UNIQUE,
        role TEXT NOT NULL,
        password varchar (255) NOT NULL
      );
  
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name varchar (255) NOT NULL UNIQUE,
        description TEXT NOT NULL,
        "photoUrl" TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        price DECIMAL NOT NULL,
        department TEXT NOT NULL,
        "inStock" BOOLEAN NOT NULL,
        count INTEGER NOT NULL
      );

        CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER[],
        status TEXT NOT NULL
      );

      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "cartId" INTEGER REFERENCES cart(id)
      );
      `);
    console.log("finished building tables");
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  try {
    // create customers
    console.log("trying to create customers");
    const userOne = await createUser({
      username: "TestUser1",
      email: "testuser1@gmail.com",
      role: "user",
      password: "password123",
    });

    const userTwo = await createUser({
      username: "TestUser2",
      email: "testuser2@gmail.com",
      role: "user",
      password: "password456",
    });

    const userThree = await createUser({
      username: "TestUser3",
      email: "testuser3@gmail.com",
      role: "user",
      password: "password789",
    });

    const userFour = await createUser({
      username: "Admin",
      email: "admin@gmail.com",
      role: "admin",
      password: "admin",
    });

    console.log("Success creating users!");

    return [userOne, userTwo, userThree, userFour];
  } catch (error) {
    console.error("error while creating users");
    throw error;
  }
}

async function createInitialCarts() {
  try {
    // create customers
    console.log("trying to create carts");
    const cartOne = await createCart({
      userId: 1,
      productId: [1, 4, 5],
    });

    const cartTwo = await createCart({
      userId: 2,
      productId: [1, 3, 5],
    });

    const cartThree = await createCart({
      userId: 3,
      productId: [2, 4, 7],
    });

    const cartFour = await createCart({
      userId: 4,
      productId: [1, 4, 7],
    });

    console.log("Success creating carts!");

    return [cartOne, cartTwo, cartThree, cartFour];
  } catch (error) {
    console.error("error while creating carts");
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log("Trying to create products...");

    const productOne = await createProduct({
      name: "Duracell - AAA Batteries (4-Pack)",
      description:
        "Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack",
      photoUrl:
        "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 5,
      price: 5.49,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productTwo = await createProduct({
      name: "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
      description:
        "Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 19,
      price: 5.49,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productThree = await createProduct({
      name: "Duracell - AA Batteries (8-Pack)",
      description:
        "Compatible with select electronic devices; AA size; DURALOCK Power Preserve technology; 8-pack",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 7,
      price: 7.49,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productFour = await createProduct({
      name: "Energizer - MAX Batteries AA (4-Pack)",
      description: "4-pack AA alkaline batteries; battery tester included",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 12,
      price: 4.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productFive = await createProduct({
      name: "Duracell - C Batteries (4-Pack)",
      description:
      "Invaluable renaissance artwork",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 10,
      price: 8.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productSix = await createProduct({
      name: "Duracell - D Batteries (4-Pack)",
      description:
        "Compatible with select electronic devices; D size; DURALOCK Power Preserve technology; 4-pack",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 8,
      price: 9.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productSeven = await createProduct({
      name: "Duracell - 9V Batteries (2-Pack)",
      description:
        "Compatible with select electronic devices; alkaline chemistry; 9V size; DURALOCK Power Preserve technology; 2-pack",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 2,
      price: 7.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productEight = await createProduct({
      name: "Directed Electronics - Viper Audio Glass Break Sensor",
      description:
        "From our expanded online assortment; compatible with Directed Electronics alarm systems; microphone and microprocessor detect and analyze intrusions; detects quiet glass breaks",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 1,
      price: 39.99,
      department: "Carfi Instore Only",
      inStock: true,
      count: 1,
    });

    const productNine = await createProduct({
      name: "Energizer - N Cell E90 Batteries (2-Pack)",
      description: "Alkaline batteries; 1.5V",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 6,
      price: 5.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productTen = await createProduct({
      name:
        "Metra - Radio Installation Dash Kit for Most 1989-2000 Ford, Lincoln & Mercury Vehicles - Black",
      description:
        "From our expanded online assortment; compatible with most 1989-2000 Ford, Lincoln and Mercury vehicles; snap-in TurboKit offers fast installation; spacer/trim ring; rear support bracket",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 4,
      price: 16.99,
      department: "Car Electronics & GPS",
      inStock: true,
      count: 1,
    });

    const productEleven = await createProduct({
      name: "Metra - Radio Dash Multikit for Select GM Vehicles - Black",
      description:
        "From our expanded online assortment; compatible with select GM vehicles; plastic material",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 9,
      price: 16.99,
      department: "Car Electronics & GPS",
      inStock: true,
      count: 1,
    });

    const productTwelve = await createProduct({
      name:
        "Metra - Wiring Harness for Select 1998-2008 Ford Vehicles - Multicolored",
      description:
        "From our expanded online assortment; compatible with most 1989-2000 Ford, Lincoln and Mercury vehicles; snap-in TurboKit offers fast installation; spacer/trim ring; rear support bracket",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 0,
      price: 16.99,
      department: "Car Electronics & GPS",
      inStock: false,
      count: 1,
    });

    const productThirteen = await createProduct({
      name: "INSTALL - PORTABLE RADAR DETECTOR INST",
      description: "PORTABLE RADAR DETECTOR INST",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 0,
      price: 29.99,
      department: "In-Store Only",
      inStock: false,
      count: 1,
    });

    const productFourteen = await createProduct({
      name: "Jensen - 3.6V NiCad Battery for 900MHz Phones",
      description:
        "Rechargeable 3.6V 300 mAh NiCad battery for GE 2-9614 model cordless phones",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 11,
      price: 19.99,
      department: "Connected Home & Housewares",
      inStock: true,
      count: 1,
    });

    const productFifteen = await createProduct({
      name:
        "Metra - Turbo Wire Aftermarket Radio Wire Harness Adapter for Select Vehicles",
      description:
        "Compatible with Honda and Acura vehicles; connects an aftermarket radio to your car's harness",
      photoUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3eZejd574vc7Ioci3q5fio21i3zwM04JQE4SySU5vwJ5p_Dz-vhY8FlYque5HZ_gahwg88F5jnO-kFNny2lvJlI6KWnBGeyrHDzFB_cFnExQkXy_1KaUPCuGg01iP7fPr2U9H59UnrXFAqiOrHh7-Pn=w720-h915-no?authuser=0",
      quantity: 8,
      price: 16.99,
      department: "Car Electronics & GPS",
      inStock: true,
      count: 1,
    });

    console.log("Success creating products!");

    return [
      productOne,
      productTwo,
      productThree,
      productFour,
      productFive,
      productSix,
      productSeven,
      productEight,
      productNine,
      productTen,
      productEleven,
      productTwelve,
      productThirteen,
      productFourteen,
      productFifteen,
    ];
  } catch (error) {
    console.log("Failure creating products!");
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    console.log("filling DB with initial data");

    await createInitialUsers();
    await createInitialProducts();
    await createInitialCarts();

    /* These lines should always work */
    console.log("Getting all users:\n", await getUsers());
    const user1 = await getUserById(1);
    const user2 = await getUserByUsername("TestUser2");
    const product1 = await getProductById(1);

    await addToCart({ userId: 1, productId: [2] });
    //await checkout({ userId: 1, cartId: 1 });
    const orders = await getOrder(1);
    const cart1 = await getCart({ userId: 2 });

    console.log("Getting user 1 and 2:\n", user1, user2);
    console.log("Getting product 1:\n", product1);

    console.log("Getting cart 1:\n", cart1);
    console.log("Getting order 1:\n", orders);
    console.log("Getting all products:\n", await getProducts());

    console.log("filled database and need to do testing");

    console.log("finished filling database");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());

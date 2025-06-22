
export const additionalProducts = [
  {
    id: 21,
    title: "Apple MacBook Air M2",
    price: 1199.99,
    description: "The redesigned MacBook Air is more portable than ever and weighs just 2.7 pounds. It's the ultra-capable laptop that lets you work, play, or create just about anything — anywhere.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop",
    rating: {
      rate: 4.8,
      count: 1250
    }
  },
  {
    id: 22,
    title: "Nike Air Max 270",
    price: 150.00,
    description: "Nike's Air Max 270 is the tallest Air unit in the brand's history, providing unrivaled comfort and a striking visual statement.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: {
      rate: 4.5,
      count: 890
    }
  },
  {
    id: 23,
    title: "Canon EOS R5 Camera",
    price: 3899.99,
    description: "Professional mirrorless camera with 45MP full-frame sensor, 8K video recording, and advanced autofocus system.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    rating: {
      rate: 4.9,
      count: 567
    }
  },
  {
    id: 24,
    title: "Levi's 501 Original Jeans",
    price: 89.50,
    description: "The original blue jean since 1873. Levi's 501 Original jeans are a classic straight fit with a regular waist.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    rating: {
      rate: 4.3,
      count: 2100
    }
  },
  {
    id: 25,
    title: "Zara Floral Summer Dress",
    price: 49.95,
    description: "Elegant floral print dress perfect for summer occasions. Features a flowing silhouette and comfortable fabric.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    rating: {
      rate: 4.2,
      count: 1450
    }
  },
  {
    id: 26,
    title: "Sony WH-1000XM4 Headphones",
    price: 349.99,
    description: "Industry-leading noise canceling wireless headphones with 30-hour battery life and superior sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
    rating: {
      rate: 4.7,
      count: 3200
    }
  },
  {
    id: 27,
    title: "Adidas Ultraboost 22",
    price: 190.00,
    description: "Premium running shoes with responsive Boost midsole and Primeknit upper for ultimate comfort and performance.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
    rating: {
      rate: 4.6,
      count: 1680
    }
  },
  {
    id: 28,
    title: "Coach Large Tote Bag",
    price: 350.00,
    description: "Luxury leather tote bag with spacious interior and elegant design. Perfect for work or travel.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: {
      rate: 4.4,
      count: 890
    }
  },
  {
    id: 29,
    title: "iPhone 15 Pro",
    price: 999.99,
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop",
    rating: {
      rate: 4.8,
      count: 5670
    }
  },
  {
    id: 30,
    title: "Ralph Lauren Polo Shirt",
    price: 89.50,
    description: "Classic fit polo shirt made from soft cotton mesh with the iconic polo player embroidered on the chest.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    rating: {
      rate: 4.3,
      count: 1200
    }
  },
  {
    id: 31,
    title: "Michael Kors Watch",
    price: 195.00,
    description: "Stylish stainless steel watch with chronograph features and water resistance up to 100 meters.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    rating: {
      rate: 4.5,
      count: 890
    }
  },
  {
    id: 32,
    title: "H&M Cashmere Sweater",
    price: 79.99,
    description: "Soft cashmere sweater with a relaxed fit. Perfect for layering during cooler weather.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&h=500&fit=crop",
    rating: {
      rate: 4.1,
      count: 1560
    }
  }
];

export const getAllProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const apiProducts = await response.json();
    
    // Combine API products with additional products
    return [...apiProducts, ...additionalProducts];
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return only additional products if API fails
    return additionalProducts;
  }
};

export const getProductsByCategory = async (category: string) => {
  const allProducts = await getAllProducts();
  return allProducts.filter(product => product.category === category);
};

export const getProductById = async (id: number) => {
  const allProducts = await getAllProducts();
  return allProducts.find(product => product.id === id);
};

export const searchProducts = async (query: string) => {
  const allProducts = await getAllProducts();
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};

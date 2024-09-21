const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Load product data from JSON
  const productData = JSON.parse(fs.readFileSync('./src/data/products.json'));

  // Define the product template file
  const productTemplate = path.resolve('src/templates/product-template.js');

  // Loop through each product and create a page
  productData.forEach(product => {
    createPage({
      path: `/products/${product.slug}`, // Dynamic URL for each product
      component: productTemplate, // Template to use
      context: {
        product, // Pass product data as context to the template
      },
    });
  });
};

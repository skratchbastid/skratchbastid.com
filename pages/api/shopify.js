import axios from 'axios';

const API_URL = 'https://shop.skratchbastid.com/api/2023-04/graphql.json';
const ACCESS_TOKEN = 'f8f291bb703eff8a86cec11936709f2e';

const shopifyApi = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const query = `
  {
    products(first: 30) {
      edges {
        node {
          id
          title
          description
          onlineStoreUrl  # Aggiungi questa riga per ottenere il link alla pagina del prodotto
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;
  const response = await shopifyApi.post('', { query });
  return response.data.data.products.edges.map(edge => edge.node);
};

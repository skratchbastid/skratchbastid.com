<template>
  <div class="py-6 bg-white mt-8 px-6">
    <!-- Intestazione -->
    <div class="flex justify-between items-center pr-4 mb-4">
      <div class="flex items-center gap-2">
        <img 
          src="/img/storeImg.png" 
          alt="New in Top Grillin" 
          class="w-6 h-6"
        />
        <h2 class="text-[18px] font-bold text-gray-800">Bastid’s store</h2>
      </div>
      <div>
        <NuxtLink
              to="https://shop.skratchbastid.com/"
              class="text-white hover:text-black hover:bg-white text-sm py-1"
            >
              <div class="flex items-center">
                <p class="text-[14px] font-bold text-black uppercase tracking-wide text-[14px]">
                  Store &nbsp;
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000"
                  stroke="black"
                  class="w-4 h-4"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                
              </div>
            </NuxtLink>
      </div>
    </div>

    <!-- Prodotti -->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="products.length" class="products">
      <div v-for="product in products" :key="product.id" class="product-card">
        <a :href="product.onlineStoreUrl" target="_blank" rel="noopener noreferrer">

        <img 
          :src="product.images.edges[0]?.node.src" 
          :alt="product.images.edges[0]?.node.altText || product.title" 
          class="product-image" 
        />
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-price">
          {{ product.variants.edges[0]?.node.price.amount }} {{ product.variants.edges[0]?.node.price.currencyCode }}
        </p>
        </a>
      </div>
    </div>
    <div v-if="!loading && !error && !products.length" class="no-products">
      Nessun prodotto disponibile.
    </div>
  </div>
</template>

<script>
import { fetchProducts } from "../pages/api/shopify";

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      this.products = await fetchProducts();
      console.log(this.products)
    } catch (err) {
      this.error = "Error";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Layout per la testata */
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.bg-white {
  background-color: #fff;
}

/* Stile dei prodotti */
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.product-card {
  border: none;
  border-radius: 12px;
  padding: 0;
  width: 300px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1);
  box-shadow: none;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  background-color: #00000008;
}

.product-title {
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0;
  color: #333;
}

.product-description {
  font-size: 0.9em;
  color: #666;
  margin: 8px 0;
}

.product-price {
  font-weight: 400;
  color: #FF5941;
  margin-top: 0.5rem;
  font-size: 14px;
}

.loading,
.error,
.no-products {
  text-align: center;
  font-size: 1.2em;
  color: #444;
  margin-top: 20px;
}

/* Stile responsive per la testata */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }

  .pr-4 {
    padding-right: 0;
  }
}
</style>

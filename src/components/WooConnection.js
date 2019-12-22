import React from 'react';
import WooCommerceAPI from "woocommerce-api";

export const WooCommerce = new WooCommerceAPI({
  url: "http://veronica.codingkloud.com", // Your store URL
  consumerKey: "ck_0e3d7aae58c8d7d045abde006c59737a90674458", // Your consumer secret
  consumerSecret: "cs_f1fc6f531edbdcfa2c5db4d3e5f1bcf7781bdc84", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v1" // WooCommerce WP REST API version
});
